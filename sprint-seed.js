window.LEDGER_AGILE_SEED = {
  "sprints": [
    {
      "id": "sprint-2026-oct-3",
      "name": "2026_Oct_3",
      "startDate": "2026-10-12",
      "endDate": "2026-10-18",
      "status": "active",
      "pbis": [
        {
          "id": "pbi-oct3-index",
          "title": "NIFTY / SENSEX",
          "market": "Options",
          "description": "Aim for at least two successful target trades. Follow the trend, compare NIFTY and SENSEX before entry, and avoid chasing missed moves.",
          "target": 500
        },
        {
          "id": "pbi-oct3-commodity",
          "title": "Commodities",
          "market": "Commodities",
          "description": "Focus on NatGasMini / NaturalGas, use planned lot sizing, avoid overtrading, and wait for a clear EMA setup.",
          "target": 1000
        }
      ],
      "retro": null
    }
  ],
  "activeSprintId": "sprint-2026-oct-3",
  "scrum": [
    {"date":"2026-09-21","market":"Options","wentWell":"Waited, read the trend, and entered with a plan; reached the target after a long wait.","wentWrong":"","nextFocus":"Keep waiting for the planned setup.","followedRetro":true},
    {"date":"2026-09-21","market":"Commodities","wentWell":"Stopped trading for a while after the losses.","wentWrong":"Entered early while unsure; after stopping, an emotional SilverMic trade to increase profit led to multiple failed trades.","nextFocus":"Wait for a clear commodity entry and stop after the planned limit.","followedRetro":false},
    {"date":"2026-09-22","market":"Options","wentWell":"Trusted the independent trend view.","wentWrong":"Missed a profitable entry because of the one-trade-per-day rule.","nextFocus":"Review the one-trade rule separately; do not improvise an extra entry.","followedRetro":true},
    {"date":"2026-09-22","market":"Commodities","wentWell":"Recovered an earlier loss on a later, clearer breakout with fewer lots.","wentWrong":"Took a planned-to-avoid CrudeOil trade, then a SilverMic revenge/random trade and overtraded.","nextFocus":"Avoid unplanned instruments and revenge entries.","followedRetro":false},
    {"date":"2026-09-23","market":"Options","wentWell":"The independent trend read worked and price reached the planned profit.","wentWrong":"Entry was a little early.","nextFocus":"Wait for confirmation without abandoning the setup.","followedRetro":true},
    {"date":"2026-09-23","market":"Commodities","wentWell":"SilverMic eventually followed the setup; CrudeOil was avoided because another trade was in progress.","wentWrong":"NatGasMini hit its stop; SilverMic took around eight hours to reach profit.","nextFocus":"Check whether the setup and expected holding time justify the trade.","followedRetro":true},
    {"date":"2026-09-24","market":"Options","wentWell":"","wentWrong":"Call-side bias and hesitation after a gap-down overruled a clear put-side setup.","nextFocus":"Assess both call and put setups by the same rules; do not let gap bias decide.","followedRetro":false},
    {"date":"2026-09-24","market":"Commodities","wentWell":"A SilverMic range breakout was identified.","wentWrong":"Busy schedule and disappointment after an Options stop affected the decision; took a non-EMA setup to force a trade.","nextFocus":"Keep the EMA200 setup filter; no-trade is a valid outcome.","followedRetro":false},
    {"date":"2026-10-06","market":"Options","wentWell":"Compared NIFTY and SENSEX and avoided chasing a missed move.","wentWrong":"","nextFocus":"Continue requiring confirmation across the indices.","followedRetro":true},
    {"date":"2026-10-06","market":"Commodities","wentWell":"Avoided SilverMic according to plan.","wentWrong":"Started with SilverMic despite the plan, then took a NatGasMini revenge entry on a range breakout rather than EMA200.","nextFocus":"Follow the instrument and setup filters after a loss.","followedRetro":false},
    {"date":"2026-10-07","market":"Options","wentWell":"Waited for a levels breakout before entry.","wentWrong":"A quick reversal began soon after entry and the stop was nearly hit.","nextFocus":"Observe the breakout candle for reversal before entering.","followedRetro":true},
    {"date":"2026-10-07","market":"Commodities","wentWell":"Avoided SilverMic; a later clean breakout recovered earlier losses.","wentWrong":"Overtraded NatGasMini, set a target away from the screen, and considered another trade while near breakeven.","nextFocus":"Limit trade count and validate risk/reward before placing unattended orders.","followedRetro":false},
    {"date":"2026-10-08","market":"Options","wentWell":"Used a pivot breakout and achieved the expected move.","wentWrong":"Entry was a little early.","nextFocus":"Keep the setup; improve timing without chasing.","followedRetro":true},
    {"date":"2026-10-08","market":"Commodities","wentWell":"","wentWrong":"Overtraded NatGasMini; emotion affected decisions.","nextFocus":"Use the planned trade limit and stop when it is reached.","followedRetro":false},
    {"date":"2026-10-12","market":"Options","wentWell":"Followed the trend and reached target.","wentWrong":"Entry was conservative and nearly reached stop first.","nextFocus":"Review entry timing against the written setup.","followedRetro":true},
    {"date":"2026-10-12","market":"Commodities","wentWell":"Experimented with a recent EMA10 pullback observation.","wentWrong":"Took three NatGasMini trades while driving, making execution unsafe and uncontrolled.","nextFocus":"Never trade while driving; only act when able to monitor and follow the plan.","followedRetro":false},
    {"date":"2026-10-13","market":"Options","wentWell":"A pivot breakout and prior resistance aligned with the expected target.","wentWrong":"Entry was a little early.","nextFocus":"Preserve the setup and wait for confirmation.","followedRetro":true},
    {"date":"2026-10-13","market":"Commodities","wentWell":"","wentWrong":"Overtraded NatGasMini; emotion needs control.","nextFocus":"Respect the planned trade limit.","followedRetro":false},
    {"date":"2026-10-14","market":"Options","wentWell":"","wentWrong":"Took a second trade after consecutive target days; stop was hit.","nextFocus":"Follow the process in winning and losing streaks alike.","followedRetro":false},
    {"date":"2026-10-14","market":"Commodities","wentWell":"","wentWrong":"Overtraded NatGasMini; emotion needs control.","nextFocus":"Respect the planned trade limit.","followedRetro":false}
  ],
  "retrospectives": [
    {
      "sprint": "Legacy sprint 37865",
      "worked": "For NIFTY/SENSEX, overtrading was avoided despite consecutive failures. Commodity EMA200 setups showed promise. Closing index trades by 3 PM was identified as a useful rule.",
      "wentWrong": "Counter-trend and early index entries caused failures; call-side bias was noted. Commodity overtrading and emotional decisions continued.",
      "improve": "Avoid CrudeOil as the first trade; trade only clear setups and manage entries against the trend carefully."
    },
    {
      "sprint": "2026_Oct_2",
      "worked": "Compared NIFTY and SENSEX before entries. NatGasMini lot allocation helped clarify risk. Clear-trend early trades were profitable.",
      "wentWrong": "Overtrading increased after losses; SilverMic often failed to reach target; call-side bias remained.",
      "improve": "Avoid CrudeOil and SilverMic for the next sprint. For uncertain NatGasMini breakouts, reduce size to one lot."
    }
  ],
  "planningHistory": [
    {
      "sprint": "Sept-04 (Planning sheet label 38231)",
      "market": "Options",
      "goal": "Achieve at least two successful NIFTY/SENSEX target trades; the workbook notes a target P&L of 500.",
      "target": 500,
      "actual": 1170.64,
      "status": "Achieved"
    },
    {
      "sprint": "Sept-04 (Planning sheet label 38231)",
      "market": "Commodities",
      "goal": "Aim for 2000 P&L for the week; no-trade days are acceptable.",
      "target": 2000,
      "actual": -7356.83,
      "status": "Not achieved"
    },
    {
      "sprint": "2026_Oct_2",
      "market": "Options",
      "goal": "Achieve at least two successful NIFTY/SENSEX target trades; target P&L 500.",
      "target": 500,
      "actual": 2145.86,
      "status": "Achieved"
    },
    {
      "sprint": "2026_Oct_2",
      "market": "Commodities",
      "goal": "Avoid SilverMic; use NatGasMini/NaturalGas and planned lot sizing. Limit the sprint loss to 1500.",
      "target": -1500,
      "actual": -902.59,
      "status": "Achieved"
    }
  ],
  "reviewHistory": [
    {"sprint":"Sept-03","market":"Options","trades":4,"wins":1,"losses":3,"pnl":-3501.5,"winRate":25},
    {"sprint":"Sept-03","market":"Commodities","trades":11,"wins":7,"losses":4,"pnl":3314.65,"winRate":63.6364},
    {"sprint":"Sept-04","market":"Options","trades":5,"wins":2,"losses":3,"pnl":1170.64,"winRate":40},
    {"sprint":"Sept-04","market":"Commodities","trades":17,"wins":4,"losses":13,"pnl":-7356.83,"winRate":23.5294},
    {"sprint":"Sept-05","market":"Options","trades":7,"wins":2,"losses":5,"pnl":-836.54,"winRate":28.5714},
    {"sprint":"Sept-05","market":"Commodities","trades":9,"wins":3,"losses":6,"pnl":-5365.13,"winRate":33.3333},
    {"sprint":"2026_Oct_2","market":"Options","trades":7,"wins":3,"losses":4,"pnl":2145.86,"winRate":42.8571},
    {"sprint":"2026_Oct_2","market":"Commodities","trades":12,"wins":5,"losses":7,"pnl":-902.59,"winRate":41.6667}
  ]
};
