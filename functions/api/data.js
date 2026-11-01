const OBJECT_KEY = "ledger.json";

function response(body, status = 200) {
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

export async function onRequestGet({ env }) {
  const object = await env.LEDGER_DATA.get(OBJECT_KEY);
  if (!object) {
    return response({
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
  const body = await object.text();
  return new Response(body, {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

export async function onRequestPut({ request, env }) {
  let state;
  try {
    state = await request.json();
  } catch {
    return response({ error: "Request body must be valid JSON." }, 400);
  }
  if (!validState(state)) {
    return response({ error: "Request body is not a valid Ledger state." }, 400);
  }
  await env.LEDGER_DATA.put(OBJECT_KEY, JSON.stringify(state));
  return response({ saved: true });
}
