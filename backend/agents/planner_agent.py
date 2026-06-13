
from services.gemini_service import ask_gemini_text

def maintenance_plan(
        equipment,
        diagnosis,
        risk):

    prompt = f"""
Equipment:
{equipment}

Diagnosis:
{diagnosis}

Risk:
{risk}

Generate:

1. Immediate Actions
2. Short-Term Actions
3. Long-Term Actions
4. Spare Procurement Advice

Return structured response.
"""

    return ask_gemini_text(prompt)
