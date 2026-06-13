from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_forecast():

    return [
        {
            "asset": "CCM Segment Bearing",
            "probability": 91
        },
        {
            "asset": "Gearbox",
            "probability": 45
        },
        {
            "asset": "Motor",
            "probability": 12
        }
    ]
