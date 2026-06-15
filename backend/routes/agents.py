from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_agents():

    return {
        "summary": {
            "agents_online": 6,
            "tasks_executed": 6258,
            "avg_confidence": "94.5%",
            "system_load": "72%"
        },

        "agents": [

            {
                "name": "Diagnostic Agent",
                "status": "ACTIVE",
                "tasks_completed": 1247,
                "latency": "1.2 sec",
                "confidence": "96%"
            },

            {
                "name": "Root Cause Agent",
                "status": "ACTIVE",
                "tasks_completed": 1189,
                "latency": "1.6 sec",
                "confidence": "94%"
            },

            {
                "name": "Risk Agent",
                "status": "ACTIVE",
                "tasks_completed": 1105,
                "latency": "1.0 sec",
                "confidence": "95%"
            },

            {
                "name": "Planner Agent",
                "status": "ACTIVE",
                "tasks_completed": 1048,
                "latency": "1.8 sec",
                "confidence": "92%"
            },

            {
                "name": "Knowledge Agent",
                "status": "ACTIVE",
                "tasks_completed": 867,
                "latency": "2.1 sec",
                "confidence": "93%"
            },

            {
                "name": "Report Agent",
                "status": "ACTIVE",
                "tasks_completed": 802,
                "latency": "0.9 sec",
                "confidence": "97%"
            }
        ]
    }
