from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_agents():

    return [
        {"name":"Diagnostic Agent","status":"ACTIVE"},
        {"name":"Root Cause Agent","status":"ACTIVE"},
        {"name":"Risk Agent","status":"ACTIVE"},
        {"name":"Planner Agent","status":"ACTIVE"},
        {"name":"Knowledge Agent","status":"ACTIVE"},
        {"name":"Report Agent","status":"ACTIVE"}
    ]
