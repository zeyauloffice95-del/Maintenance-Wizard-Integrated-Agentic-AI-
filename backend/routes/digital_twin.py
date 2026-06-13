from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_twin():

    return {
        "Blast Furnace":"GREEN",
        "CCM":"YELLOW",
        "Rolling Mill":"GREEN",
        "Utilities":"RED"
    }
