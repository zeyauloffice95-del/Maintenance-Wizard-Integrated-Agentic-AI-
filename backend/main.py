from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.maintenance import router as maintenance_router
from routes.report import router as report_router

from services.knowledge_loader import load_documents

# from services.vector_store import build_vector_store
from routes.chat import router as chat_router
from routes.feedback_route import router as feedback_router
from routes.dashboard import router as dashboard_router

from routes.asset import router as asset_router
from routes.health import router as health_router
from routes.forecast import router as forecast_router
from routes.agents import router as agents_router
from routes.planner import router as planner_router
from routes.digital_twin import router as twin_router
from routes.knowledge import router as knowledge_router
from routes.reports import router as reports_router



app = FastAPI(
    title="Maintenance Wizard",
    description="Industrial Multi-Agent AI System",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    maintenance_router,
    prefix="/maintenance",
    tags=["Maintenance AI"]
)

app.include_router(
    dashboard_router,
    prefix="/dashboard",
    tags=["Dashboard"]
)



app.include_router(
    report_router,
    prefix="/report",
    tags=["PDF Reports"]
)

app.include_router(
    chat_router,
    prefix="/chat",
    tags=["Maintenance Copilot"]
)

app.include_router(
    feedback_router,
    prefix="/feedback",
    tags=["Feedback Learning"]
)


app.include_router(asset_router,prefix="/assets")
app.include_router(health_router,prefix="/health")
app.include_router(forecast_router,prefix="/forecast")
app.include_router(agents_router,prefix="/agents")
app.include_router(planner_router,prefix="/planner")
app.include_router(twin_router,prefix="/twin")
app.include_router(knowledge_router,prefix="/knowledge")
app.include_router(reports_router,prefix="/reports")


'''
docs = load_documents()

build_vector_store(
    docs
)

print(
    f"Loaded {len(docs)} knowledge documents"
)
'''

@app.get("/")
def root():

    return {
        "status": "running",
        "system": "Maintenance Wizard",
        "agents": [
            "Diagnostic Agent",
            "Root Cause Agent",
            "Risk Agent",
            "Planner Agent",
            "Knowledge Agent",
            "Report Agent"
        ]
    }
