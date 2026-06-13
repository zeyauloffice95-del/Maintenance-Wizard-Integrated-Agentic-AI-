from services.gemini_service import ask_gemini_text
from agents.knowledge_agent import get_context

def diagnose(
        equipment,
        symptoms):

    context = get_context(
        equipment + " " + symptoms
    )

    prompt = f"""
You are a senior steel plant maintenance engineer.

Use the supplied knowledge base before answering.

KNOWLEDGE BASE:

{context}

Equipment:
{equipment}

Symptoms:
{symptoms}

Provide:

1. Probable Fault
2. Confidence %
3. Evidence

Use plant knowledge if available.
"""

    return ask_gemini_text(prompt)
