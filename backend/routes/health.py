from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_health():

    return {
        "bearing": 62,
        "gearbox": 81,
        "motor": 91,
        "pump": 76,
        "fan": 88
    }
