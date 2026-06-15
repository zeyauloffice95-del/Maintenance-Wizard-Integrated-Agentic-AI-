from fastapi import APIRouter

router = APIRouter()

dashboard_state = {

    "connected_assets": 148,

    "critical_insights": 27,

    "failure_predictions": 14,

    "optimization_actions": 42,

    "asset_health": 87,

    "monthly_savings": 185000,

    "live_risk_board": [

        {
            "equipment": "CCM Segment Bearing #3",
            "risk": "HIGH"
        },
        {
            "equipment": "Rolling Mill Gearbox #2",
            "risk": "HIGH"
        },
        {
            "equipment": "Blast Furnace Blower",
            "risk": "MEDIUM"
        },
        {
            "equipment": "Hydraulic Pump Station",
            "risk": "MEDIUM"
        },
        {
            "equipment": "Cooling Water Pump",
            "risk": "LOW"
        },
        {
            "equipment": "Conveyor Drive Motor",
            "risk": "LOW"
        }
    ],

    "reasoning": {

        "observation":
            "Abnormal vibration trend observed on CCM Segment Bearing #3",

        "evidence":
            "RMS vibration increased by 34% over the last 48 hours and bearing temperature increased by 12°C",

        "inference":
            "Progressive bearing degradation likely to cause production disruption within 5-7 days",

        "confidence":
            "92%"
    }
}


@router.get("/status")
def get_dashboard():
    return dashboard_state


@router.post("/update")
def update_dashboard(result: dict):

    dashboard_state["critical_insights"] += 1
    dashboard_state["failure_predictions"] += 1

    dashboard_state["optimization_actions"] += len(
        result.get("immediate_actions", [])
    )

    dashboard_state["reasoning"] = {

        "observation":
            result.get(
                "diagnosis",
                dashboard_state["reasoning"]["observation"]
            ),

        "evidence":
            result.get(
                "root_cause",
                dashboard_state["reasoning"]["evidence"]
            ),

        "inference":
            result.get(
                "maintenance_recommendation",
                dashboard_state["reasoning"]["inference"]
            ),

        "confidence":
            result.get(
                "risk_level",
                dashboard_state["reasoning"]["confidence"]
            )
    }

    return {
        "status": "updated"
    }
