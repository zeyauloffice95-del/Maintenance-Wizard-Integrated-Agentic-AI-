from fastapi import APIRouter
from fastapi.responses import FileResponse

from routes.request_models import EquipmentRequest

from services.agent_orchestrator import run_agents
from services.pdf_service import generate_pdf_report

router = APIRouter()


@router.post("/download")

def download_report(
        request: EquipmentRequest):

    result = run_agents(
        equipment=request.equipment,
        symptoms=request.symptoms
    )

    pdf_file = generate_pdf_report(
        result
    )

    return FileResponse(
        pdf_file,
        media_type="application/pdf",
        filename="Maintenance_Report.pdf"
    )
