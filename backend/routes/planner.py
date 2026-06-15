from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_plan():

    return [

        {
            "task": "Replace Segment Bearing #2",
            "priority": "HIGH",
            "area": "Continuous Casting",
            "due_date": "2026-06-16"
        },
        {
            "task": "Inspect Dust Extraction Fan",
            "priority": "HIGH",
            "area": "Utilities",
            "due_date": "2026-06-16"
        },
        {
            "task": "Gearbox Lubrication Analysis",
            "priority": "HIGH",
            "area": "Hot Strip Mill",
            "due_date": "2026-06-17"
        },
        {
            "task": "Hydraulic Cylinder Seal Inspection",
            "priority": "MEDIUM",
            "area": "Continuous Casting",
            "due_date": "2026-06-18"
        },
        {
            "task": "Main Drive Motor Thermal Scan",
            "priority": "MEDIUM",
            "area": "Hot Strip Mill",
            "due_date": "2026-06-18"
        },
        {
            "task": "Cooling Water Pump Inspection",
            "priority": "MEDIUM",
            "area": "Utilities",
            "due_date": "2026-06-19"
        },
        {
            "task": "Pinion Stand Alignment Check",
            "priority": "MEDIUM",
            "area": "Hot Strip Mill",
            "due_date": "2026-06-20"
        },
        {
            "task": "Work Roll Chock Condition Monitoring",
            "priority": "MEDIUM",
            "area": "Hot Strip Mill",
            "due_date": "2026-06-20"
        },
        {
            "task": "Blast Furnace Motor Inspection",
            "priority": "LOW",
            "area": "Blast Furnace",
            "due_date": "2026-06-21"
        },
        {
            "task": "Charging Conveyor Inspection",
            "priority": "LOW",
            "area": "Blast Furnace",
            "due_date": "2026-06-22"
        },
        {
            "task": "DG Set Routine Maintenance",
            "priority": "LOW",
            "area": "Utilities",
            "due_date": "2026-06-22"
        },
        {
            "task": "Substation Transformer Health Check",
            "priority": "LOW",
            "area": "Utilities",
            "due_date": "2026-06-23"
        },
        {
            "task": "Cooling Tower Fan Inspection",
            "priority": "LOW",
            "area": "Utilities",
            "due_date": "2026-06-23"
        },
        {
            "task": "Withdrawal Roll Condition Assessment",
            "priority": "LOW",
            "area": "Continuous Casting",
            "due_date": "2026-06-24"
        },
        {
            "task": "Monthly Lubrication Audit",
            "priority": "LOW",
            "area": "Plant Wide",
            "due_date": "2026-06-25"
        }
    ]
