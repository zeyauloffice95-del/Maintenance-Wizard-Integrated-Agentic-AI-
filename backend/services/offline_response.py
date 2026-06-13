def offline_analysis(equipment, symptoms):

    return {
        "diagnosis":
        f"Potential failure detected in {equipment}",

        "root_cause":
        "Lubrication degradation, wear, vibration and thermal stress.",

        "risk_level":
        "HIGH",

        "failure_probability":
        "85%",

        "remaining_useful_life":
        "5-10 Days",

        "catastrophic_risk":
        "Possible production stoppage.",

        "immediate_actions": [
            "Inspect equipment",
            "Check lubrication",
            "Monitor vibration"
        ],

        "short_term_actions": [
            "Schedule maintenance",
            "Replace worn components"
        ],

        "long_term_actions": [
            "Implement predictive monitoring",
            "Review maintenance strategy"
        ],

        "spare_procurement": [
            "Order bearings",
            "Maintain spare inventory"
        ],

        "executive_summary":
        f"{equipment} requires immediate attention.",

        "maintenance_recommendation":
        "Perform planned maintenance at earliest opportunity.",

        "conclusion":
        "Potential failure identified. Preventive action recommended."
    }
