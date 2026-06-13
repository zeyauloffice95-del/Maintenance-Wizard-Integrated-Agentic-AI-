from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def reports():

    return [
        {
            "name":"CCM_Bearing_Report.pdf",
            "date":"2026-06-13"
        }
    ]
