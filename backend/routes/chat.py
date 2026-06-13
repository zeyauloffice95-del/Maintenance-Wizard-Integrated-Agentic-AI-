from fastapi import APIRouter

from pydantic import BaseModel

from services.gemini_service import ask_gemini_text

router = APIRouter()


class ChatRequest(BaseModel):

    question: str


@router.post("/ask")
def ask_question(request: ChatRequest):

    prompt = f"""
You are an expert Steel Plant Maintenance Copilot.

Answer as an experienced maintenance engineer.

Question:

{request.question}

Provide:
1. Technical Explanation
2. Risk Assessment
3. Recommended Action
4. Best Practice

Return clear response.
"""

    response = ask_gemini_text(prompt)

    return {
        "answer": response
    }
