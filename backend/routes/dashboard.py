from fastapi import APIRouter

router = APIRouter()

dashboard_state = {

    "connected_assets": 100,

    "critical_insights": 0,

    "failure_predictions": 0,

    "optimization_actions": 0,

    "live_risk_board": [
        {
            "equipment": "CCM Segment Bearing",
            "risk": "HIGH"
        }
    ],

    "reasoning": {

        "observation": "",

        "evidence": "",

        "inference": "",

        "confidence": ""
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
        result.get(
            "immediate_actions",
            []
        )
    )

    dashboard_state["reasoning"] = {

        "observation":
            result.get(
                "diagnosis",
                ""
            ),

        "evidence":
            result.get(
                "root_cause",
                ""
            ),

        "inference":
            result.get(
                "maintenance_recommendation",
                ""
            ),

        "confidence":
            result.get(
                "risk_level",
                ""
            )
    }

    dashboard_state["live_risk_board"] = [

        {
            "equipment":
                result.get(
                    "equipment",
                    "Unknown"
                ),

            "risk":
                result.get(
                    "risk_level",
                    "Unknown"
                )
        }
    ]

    return {
        "status": "updated"
    }
