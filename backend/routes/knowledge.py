from fastapi import APIRouter
from agents.knowledge_agent import get_context

router = APIRouter()

@router.get("/{query}")
def search_knowledge(query:str):

    return {
        "query": query,
        "result": get_context(query)
    }
