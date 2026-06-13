from services.gemini_service import ask_gemini

def generate_report(
        equipment,
        diagnosis,
        root_cause,
        risk,
        plan):

    prompt = f"""
You are an industrial maintenance reporting specialist.

Generate a professional maintenance report.

Equipment:
{equipment}

Diagnosis:
{diagnosis}

Root Cause:
{root_cause}

Risk Assessment:
{risk}

Maintenance Plan:
{plan}

Create:

1. Executive Summary
2. Fault Diagnosis
3. Root Cause Analysis
4. Risk Assessment
5. Remaining Useful Life
6. Immediate Actions
7. Long-Term Recommendations
8. Spare Procurement Strategy
9. Conclusion

Return a professional structured report.
"""

    return ask_gemini(prompt)
