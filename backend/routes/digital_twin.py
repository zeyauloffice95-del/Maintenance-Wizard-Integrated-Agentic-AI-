from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_twin():

    return {

        "summary": {

            "availability": "96.4%",
            "power_consumption": "2.8 MW",
            "avg_health": "86%",
            "efficiency": "91%"

        },

        "assets": [

            {
                "name": "Blast Furnace #1",
                "status": "RUNNING",
                "health": 94,
                "efficiency": 92,
                "temperature": 1480
            },

            {
                "name": "Blast Furnace #2",
                "status": "RUNNING",
                "health": 91,
                "efficiency": 90,
                "temperature": 1465
            },

            {
                "name": "Continuous Caster #1",
                "status": "WARNING",
                "health": 72,
                "efficiency": 84,
                "temperature": 915
            },

            {
                "name": "Continuous Caster #2",
                "status": "RUNNING",
                "health": 88,
                "efficiency": 91,
                "temperature": 903
            },

            {
                "name": "Hot Strip Mill",
                "status": "RUNNING",
                "health": 90,
                "efficiency": 89,
                "temperature": 720
            },

            {
                "name": "Cooling Water System",
                "status": "CRITICAL",
                "health": 61,
                "efficiency": 71,
                "temperature": 68
            },

            {
                "name": "Hydraulic Pump Station",
                "status": "WARNING",
                "health": 75,
                "efficiency": 80,
                "temperature": 82
            },

            {
                "name": "Main Compressor Unit",
                "status": "RUNNING",
                "health": 93,
                "efficiency": 94,
                "temperature": 74
            }

        ]
    }
