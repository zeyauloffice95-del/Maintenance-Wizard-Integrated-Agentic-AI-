from pydantic import BaseModel

class EquipmentRequest(BaseModel):

    equipment: str

    symptoms: str
