from services.gemini_service import ask_gemini_json
from services.deepseek_service import ask_deepseek
from services.offline_response import offline_analysis

import json


def run_master_analysis(
        equipment,
        symptoms):

    prompt = f"""
    You are a senior maintenance engineer in a steel plant.

    Equipment:
    {equipment}

    Symptoms:
    {symptoms}

    Return ONLY valid JSON.

    Required JSON:

    {{
    "executive_summary": "",
    "diagnosis": "",
    "root_cause": "",
    "risk_level": "",
    "failure_probability": "",
    "remaining_useful_life": "",
    "catastrophic_risk": "",
    "immediate_actions": [],
    "short_term_actions": [],
    "long_term_actions": [],
    "spare_procurement": [],
    "maintenance_recommendation": "",
    "conclusion": ""
    }}

    Rules:

    - Return ONLY JSON
    - No markdown
    - No explanations
    - No code blocks
    """

    # ===================================
    # 1. GEMINI (3 Keys Rotation)
    # ===================================

    try:

        print("\nUSING GEMINI\n")

        return ask_gemini_json(
            prompt
        )

    except Exception as e:

        print("\nALL GEMINI KEYS FAILED\n")
        print(str(e))

    # ===================================
    # 2. DEEPSEEK
    # ===================================

    try:

        print("\nUSING DEEPSEEK\n")

        text = ask_deepseek(
            prompt
        )

        text = text.replace(
            "```json",
            ""
        )

        text = text.replace(
            "```",
            ""
        )

        text = text.strip()

        return json.loads(
            text
        )

    except Exception as e:

        print("\nDEEPSEEK FAILED\n")
        print(str(e))

    # ===================================
    # 3. OFFLINE AI
    # ===================================

    print(
        "\nUSING OFFLINE FALLBACK\n"
    )

    return offline_analysis(
        equipment,
        symptoms
    )