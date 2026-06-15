from pydantic import BaseModel
from typing import List, Optional


class EquipmentRequest(BaseModel):

    equipment: str

    symptoms: str

    fault_message: Optional[str] = ""

    delay_log: Optional[str] = ""

    sensor_summary: Optional[str] = ""

    anomaly_alert: Optional[str] = ""

    engineer_query: Optional[str] = ""

    uploaded_documents: Optional[List[str]] = []
