
from services.gemini_service import ask_gemini_text

def assess_risk(
        equipment,
        diagnosis,
        rootcause):

    prompt = f"""
Equipment:
{equipment}

Diagnosis:
{diagnosis}

Root Cause:
{rootcause}

Determine:

1. Risk Level
2. Failure Probability
3. Remaining Useful Life
4. Catastrophic Failure Risk

Return structured response.
"""

    return ask_gemini_text(prompt)
