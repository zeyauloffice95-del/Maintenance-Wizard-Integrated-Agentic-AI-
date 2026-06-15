from fastapi import APIRouter

from routes.request_models import EquipmentRequest
from services.agent_orchestrator import run_agents

router = APIRouter()


@router.post("/analyze")
def analyze(request: EquipmentRequest):

    enriched_symptoms = f"""

Equipment:
{request.equipment}

Symptoms:
{request.symptoms}

Fault Message:
{request.fault_message}

Delay Log:
{request.delay_log}

Sensor Summary:
{request.sensor_summary}

Anomaly Alert:
{request.anomaly_alert}

Engineer Query:
{request.engineer_query}

Uploaded Documents:
{", ".join(request.uploaded_documents)}

"""

    result = run_agents(
        equipment=request.equipment,
        symptoms=enriched_symptoms
    )

    result["equipment"] = request.equipment

    result["fault_message"] = request.fault_message

    result["delay_log"] = request.delay_log

    result["sensor_summary"] = request.sensor_summary

    result["anomaly_alert"] = request.anomaly_alert

    result["engineer_query"] = request.engineer_query

    result["uploaded_documents"] = request.uploaded_documents

    return result
