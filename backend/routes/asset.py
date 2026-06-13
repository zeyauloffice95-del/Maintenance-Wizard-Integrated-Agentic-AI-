from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_assets():

    return [
        {
            "name": "CCM Segment Bearing",
            "health": 62,
            "risk": "HIGH"
        },
        {
            "name": "HSM Gearbox",
            "health": 81,
            "risk": "MEDIUM"
        },
        {
            "name": "Blast Furnace Motor",
            "health": 91,
            "risk": "LOW"
        }
    ]
