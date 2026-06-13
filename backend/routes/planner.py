from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_plan():

    return [
        {
            "task":"Replace CCM Bearing",
            "priority":"HIGH"
        },
        {
            "task":"Inspect Gearbox",
            "priority":"MEDIUM"
        },
        {
            "task":"Lubrication Audit",
            "priority":"LOW"
        }
    ]
