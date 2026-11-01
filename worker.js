const OBJECT_KEY = "ledger.json";
const AUTH_USERNAME = "Vimal";

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

function validState(value) {
  return value &&
    typeof value === "object" &&
    Array.isArray(value.trades) &&
    value.agile &&
    typeof value.agile === "object" &&
    Array.isArray(value.agile.sprints) &&
    Array.isArray(value.agile.scrum) &&
    Array.isArray(value.nseHolidays) &&
    value.donations &&
    typeof value.donations === "object" &&
    !Array.isArray(value.donations);
}

function unauthorized() {
  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "www-authenticate": 'Basic realm="Ledger"'
    }
  });
}

function isAuthorized(request, env) {
  if (!env.AUTH_PASSWORD) return false;
  const header = request.headers.get("authorization") || "";
  if (!header.startsWith("Basic ")) return false;
  try {
    const decoded = atob(header.slice(6));
    const separator = decoded.indexOf(":");
    return separator > 0 &&
      decoded.slice(0, separator) === AUTH_USERNAME &&
      decoded.slice(separator + 1) === env.AUTH_PASSWORD;
  } catch {
    return false;
  }
}

async function dataApi(request, env) {
  if (request.method === "GET") {
    const object = await env.LEDGER_DATA.get(OBJECT_KEY);
    if (!object) {
      return json({
        initialized: false,
        trades: [],
        agile: {
          sprints: [],
          activeSprintId: "",
          scrum: [],
          scrumSessions: [],
          planningHistory: [],
          reviewHistory: [],
          retrospectiveHistory: []
        },
        nseHolidays: [],
        donations: {}
      });
    }
    return new Response(await object.text(), {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "no-store"
      }
    });
  }
  if (request.method !== "PUT") return json({ error: "Method not allowed." }, 405);
  let state;
  try {
    state = await request.json();
  } catch {
    return json({ error: "Request body must be valid JSON." }, 400);
  }
  if (!validState(state)) return json({ error: "Request body is not a valid Ledger state." }, 400);
  await env.LEDGER_DATA.put(OBJECT_KEY, JSON.stringify(state));
  return json({ saved: true });
}

export default {
  async fetch(request, env) {
    if (!isAuthorized(request, env)) {
      return env.AUTH_PASSWORD ? unauthorized() : json({ error: "Authentication is not configured." }, 503);
    }
    const url = new URL(request.url);
    if (url.pathname === "/api/data") return dataApi(request, env);
    return env.ASSETS.fetch(request);
  }
};
