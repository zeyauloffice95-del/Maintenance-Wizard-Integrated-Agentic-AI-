from fastapi import APIRouter
from agents.knowledge_agent import get_context, docs

router = APIRouter()

@router.get("/{query}")
def search_knowledge(query: str):

    return {
        "query": query,
        "docs_loaded": len(docs),
        "result": get_context(query)
    }
