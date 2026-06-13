from agents.master_agent import run_master_analysis

def run_agents(
        equipment,
        symptoms):

    result = run_master_analysis(
        equipment,
        symptoms
    )

    return result
