from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_assets():

    return [

        # Continuous Casting Machine (CCM)

        {
            "id": "CCM-001",
            "name": "Mould Oscillator",
            "area": "Continuous Casting",
            "health": 94,
            "risk": "LOW"
        },
        {
            "id": "CCM-002",
            "name": "Segment Bearing #1",
            "area": "Continuous Casting",
            "health": 78,
            "risk": "MEDIUM"
        },
        {
            "id": "CCM-003",
            "name": "Segment Bearing #2",
            "area": "Continuous Casting",
            "health": 62,
            "risk": "HIGH"
        },
        {
            "id": "CCM-004",
            "name": "Withdrawal Roll",
            "area": "Continuous Casting",
            "health": 88,
            "risk": "LOW"
        },
        {
            "id": "CCM-005",
            "name": "Hydraulic Cylinder",
            "area": "Continuous Casting",
            "health": 74,
            "risk": "MEDIUM"
        },
        {
            "id": "CCM-006",
            "name": "Tundish Car Drive",
            "area": "Continuous Casting",
            "health": 91,
            "risk": "LOW"
        },

        # Hot Strip Mill

        {
            "id": "HSM-001",
            "name": "Roughing Mill Stand",
            "area": "Hot Strip Mill",
            "health": 89,
            "risk": "LOW"
        },
        {
            "id": "HSM-002",
            "name": "Finishing Mill Gearbox",
            "area": "Hot Strip Mill",
            "health": 69,
            "risk": "HIGH"
        },
        {
            "id": "HSM-003",
            "name": "Pinion Stand",
            "area": "Hot Strip Mill",
            "health": 82,
            "risk": "MEDIUM"
        },
        {
            "id": "HSM-004",
            "name": "Work Roll Chock",
            "area": "Hot Strip Mill",
            "health": 87,
            "risk": "LOW"
        },
        {
            "id": "HSM-005",
            "name": "Main Drive Motor",
            "area": "Hot Strip Mill",
            "health": 76,
            "risk": "MEDIUM"
        },

        # Blast Furnace

        {
            "id": "BF-001",
            "name": "Blast Furnace Motor",
            "area": "Blast Furnace",
            "health": 91,
            "risk": "LOW"
        },
        {
            "id": "BF-002",
            "name": "Charging Conveyor",
            "area": "Blast Furnace",
            "health": 86,
            "risk": "LOW"
        },
        {
            "id": "BF-003",
            "name": "Dust Collector Fan",
            "area": "Blast Furnace",
            "health": 71,
            "risk": "MEDIUM"
        },

        # Utilities

        {
            "id": "UTL-001",
            "name": "Air Compressor #1",
            "area": "Utilities",
            "health": 92,
            "risk": "LOW"
        },
        {
            "id": "UTL-002",
            "name": "Cooling Water Pump",
            "area": "Utilities",
            "health": 84,
            "risk": "LOW"
        },
        {
            "id": "UTL-003",
            "name": "Cooling Tower Fan",
            "area": "Utilities",
            "health": 81,
            "risk": "MEDIUM"
        },
        {
            "id": "UTL-004",
            "name": "Substation Transformer",
            "area": "Utilities",
            "health": 96,
            "risk": "LOW"
        },
        {
            "id": "UTL-005",
            "name": "DG Set",
            "area": "Utilities",
            "health": 88,
            "risk": "LOW"
        },
        {
            "id": "UTL-006",
            "name": "Dust Extraction Fan",
            "area": "Utilities",
            "health": 67,
            "risk": "HIGH"
        }
    ]
