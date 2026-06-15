from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_forecast():

    return [

        {
            "asset": "Segment Bearing #2",
            "probability": 91,
            "rul": "3 Days",
            "action": "Immediate Replacement"
        },
        {
            "asset": "Dust Extraction Fan",
            "probability": 87,
            "rul": "5 Days",
            "action": "Inspect Bearing Assembly"
        },
        {
            "asset": "Finishing Mill Gearbox",
            "probability": 82,
            "rul": "7 Days",
            "action": "Lubrication Analysis"
        },
        {
            "asset": "Hydraulic Cylinder",
            "probability": 74,
            "rul": "12 Days",
            "action": "Seal Inspection"
        },
        {
            "asset": "Main Drive Motor",
            "probability": 69,
            "rul": "15 Days",
            "action": "Thermal Inspection"
        },
        {
            "asset": "Dust Collector Fan",
            "probability": 65,
            "rul": "18 Days",
            "action": "Vibration Analysis"
        },
        {
            "asset": "Pinion Stand",
            "probability": 58,
            "rul": "25 Days",
            "action": "Routine Inspection"
        },
        {
            "asset": "Cooling Tower Fan",
            "probability": 52,
            "rul": "28 Days",
            "action": "Performance Check"
        },
        {
            "asset": "Work Roll Chock",
            "probability": 48,
            "rul": "35 Days",
            "action": "Condition Monitoring"
        },
        {
            "asset": "Cooling Water Pump",
            "probability": 42,
            "rul": "40 Days",
            "action": "Flow Verification"
        },
        {
            "asset": "Withdrawal Roll",
            "probability": 36,
            "rul": "50 Days",
            "action": "Routine Inspection"
        },
        {
            "asset": "Charging Conveyor",
            "probability": 31,
            "rul": "60 Days",
            "action": "Monitor"
        }
    ]
