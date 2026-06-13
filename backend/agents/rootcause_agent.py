from services.gemini_service import ask_gemini_text
from agents.knowledge_agent import get_context

def root_cause(
        equipment,
        symptoms,
        diagnosis):

    context = get_context(
        equipment + " " + symptoms
    )

    prompt = f"""
Use knowledge base information.

KNOWLEDGE:

{context}

Equipment:
{equipment}

Symptoms:
{symptoms}

Diagnosis:
{diagnosis}

Find probable root cause.

Return:

1. Root Cause
2. Evidence
3. Confidence
"""

    return ask_gemini_text(prompt)
