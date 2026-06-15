from fastapi import APIRouter
from agents.knowledge_agent import get_context, docs

router = APIRouter()


@router.get("/")
def knowledge_stats():

    return {
        "docs_loaded": len(docs),
        "documents": [
            doc["source"]
            for doc in docs
        ]
    }


@router.get("/{query}")
def search_knowledge(query: str):

    return {
        "query": query,
        "docs_loaded": len(docs),
        "result": get_context(query)
    }
