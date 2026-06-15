from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_health():

    return [

        {
            "asset": "Segment Bearing #1",
            "health": 78,
            "trend": "UP"
        },
        {
            "asset": "Segment Bearing #2",
            "health": 62,
            "trend": "DOWN"
        },
        {
            "asset": "Withdrawal Roll",
            "health": 88,
            "trend": "UP"
        },
        {
            "asset": "Hydraulic Cylinder",
            "health": 74,
            "trend": "STABLE"
        },
        {
            "asset": "Tundish Car Drive",
            "health": 91,
            "trend": "UP"
        },
        {
            "asset": "Finishing Mill Gearbox",
            "health": 69,
            "trend": "DOWN"
        },
        {
            "asset": "Pinion Stand",
            "health": 82,
            "trend": "UP"
        },
        {
            "asset": "Work Roll Chock",
            "health": 87,
            "trend": "UP"
        },
        {
            "asset": "Main Drive Motor",
            "health": 76,
            "trend": "STABLE"
        },
        {
            "asset": "Blast Furnace Motor",
            "health": 91,
            "trend": "UP"
        },
        {
            "asset": "Charging Conveyor",
            "health": 86,
            "trend": "UP"
        },
        {
            "asset": "Dust Collector Fan",
            "health": 71,
            "trend": "DOWN"
        },
        {
            "asset": "Air Compressor #1",
            "health": 92,
            "trend": "UP"
        },
        {
            "asset": "Cooling Water Pump",
            "health": 84,
            "trend": "STABLE"
        },
        {
            "asset": "Cooling Tower Fan",
            "health": 81,
            "trend": "UP"
        },
        {
            "asset": "Substation Transformer",
            "health": 96,
            "trend": "UP"
        },
        {
            "asset": "DG Set",
            "health": 88,
            "trend": "UP"
        },
        {
            "asset": "Dust Extraction Fan",
            "health": 67,
            "trend": "DOWN"
        }
    ]
