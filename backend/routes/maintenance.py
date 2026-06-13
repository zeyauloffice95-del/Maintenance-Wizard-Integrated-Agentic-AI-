from fastapi import APIRouter

from routes.request_models import EquipmentRequest

from services.agent_orchestrator import run_agents

router = APIRouter()

@router.post("/analyze")
def analyze(
        request: EquipmentRequest):

    result = run_agents(
    equipment=request.equipment,
    symptoms=request.symptoms
    )
  
    result["equipment"] = request.equipment

    return result
