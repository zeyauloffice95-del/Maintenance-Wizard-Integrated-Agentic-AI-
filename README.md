1. Project Overview
Maintenance Wizard is an AI-powered Industrial Maintenance Assistant designed to help maintenance engineers, production teams, and plant operators identify, predict, diagnose, and resolve equipment issues through a collaborative multi-agent architecture.
The system combines Large Language Models (LLMs), predictive analytics, knowledge retrieval, root-cause reasoning, and intelligent alerting into a unified platform that acts as a virtual maintenance expert.
The objective is to reduce equipment downtime, improve maintenance efficiency, enhance decision-making, and enable proactive maintenance strategies in industrial environments.

2. System Architecture
High-Level Architecture
                    ┌────────────────────┐
                    │    User Interface   │
                    │  (React + Vercel)   │
                    └──────────┬─────────┘
                               │
                               ▼
                    ┌────────────────────┐
                    │  API Gateway Layer │
                    └──────────┬─────────┘
                               │
          ┌────────────────────┼───────────────────┐
          │                    │                   │
          ▼                    ▼                   ▼
 ┌────────────────┐  ┌────────────────┐  ┌────────────────┐
 │ Knowledge Agent│  │ Prediction Agent│ │ Alert Agent     │
 └────────────────┘  └────────────────┘  └────────────────┘
          │                    │                   │
          ▼                    ▼                   ▼
 ┌────────────────┐  ┌────────────────┐  ┌────────────────┐
 │ RCA Agent      │  │ Recommendation │  │ Monitoring     │
 │ (Root Cause)   │  │ Agent          │  │ Agent          │
 └────────────────┘  └────────────────┘  └────────────────┘
                     ▼
         ┌─────────────────────────┐
         │ LLM Orchestration Layer │
         └─────────────────────────┘
                     ▼
         ┌─────────────────────────┐
         │ Historical Maintenance  │
         │ Data / Knowledge Base   │
         └─────────────────────────┘

3. Technology Stack Used
Frontend
    • React.js 
    • TypeScript 
    • Tailwind CSS 
    • Vite 
    • Vercel Deployment 
Backend
    • Python 
    • FastAPI / Flask (depending on implementation) 
    • REST APIs 
Artificial Intelligence
    • Large Language Models (LLMs) : Gemini 2.5 Flash API key Used here
    • Multi-Agent AI Framework 
    • Retrieval-Augmented Generation (RAG) 
    • Predictive Analytics Models 
    • Rule-Based Reasoning Engine 
Data Management
    • Structured Maintenance Logs 
    • Equipment Metadata 
    • Historical Failure Records 
    • Sensor Data Inputs 
    • Knowledge Repository 
Deployment
    • Vercel (Frontend) 
    • Cloud-hosted Backend Services 
    • API-based Integration 

4. Data Flow and System Flow
Step 1 – User Input
The user enters:
    • Equipment details 
    • Symptoms 
    • Error messages 
    • Sensor readings 
    • Maintenance history 
Example:
Motor vibration increased by 35%
Bearing temperature = 92°C
Abnormal noise observed

Step 2 – Query Understanding
The LLM interprets:
    • Equipment type 
    • Severity level 
    • Failure indicators 
    • Maintenance context 

Step 3 – Agent Collaboration
Knowledge Agent
Searches:
    • Historical maintenance records 
    • Standard operating procedures 
    • Equipment manuals 
Prediction Agent
Predicts:
    • Failure probability 
    • Remaining useful life 
    • Risk score 
RCA Agent
Performs:
    • Root Cause Analysis 
    • Failure mode identification 
Recommendation Agent
Generates:
    • Corrective actions 
    • Preventive maintenance plan 
Alert Agent
Determines:
    • Warning level 
    • Criticality 
    • Escalation actions 

Step 4 – Result Aggregation
All agent outputs are combined and ranked.

Step 5 – Final AI Response
User receives:
    • Root Cause 
    • Failure Probability 
    • Recommended Actions 
    • Priority Level 
    • Maintenance Plan 

5. Model Design and Reasoning Pipeline
Multi-Agent Reasoning Workflow
User Query
     │
     ▼
Intent Detection
     │
     ▼
Task Decomposition
     │
     ▼
Agent Assignment
     │
 ┌───┼──────────────┐
 ▼   ▼              ▼
Knowledge      Prediction
Agent          Agent
 ▼                ▼
RCA Agent   Recommendation Agent
      ▼
Response Synthesizer
      ▼
Final Maintenance Report

Reasoning Strategy
The system uses:
1. Context Extraction
Extracts:
    • Machine type 
    • Failure symptoms 
    • Operating conditions 
2. Evidence Collection
Retrieves:
    • Similar failures 
    • Maintenance records 
    • Domain knowledge 
3. Root Cause Reasoning
Uses:
    • Failure symptom mapping 
    • Cause-effect relationships 
    • Historical correlations 
4. Decision Generation
Produces:
    • Action recommendations 
    • Priority assignments 
    • Maintenance schedules 

6. Alerting and Prediction Logic
Alert Severity Levels
Green
Normal operation
No action required

Yellow
Potential anomaly detected
Monitor closely

Orange
High risk condition
Schedule maintenance

Red
Critical condition
Immediate intervention required

Prediction Logic
The prediction engine evaluates:
Equipment Health Score
Health Score =
100 - Weighted Degradation Factors

Risk Assessment
Factors considered:
    • Temperature 
    • Vibration 
    • Runtime 
    • Historical failures 
    • Maintenance frequency 

Failure Probability
Output:
Low Risk
Medium Risk
High Risk
Critical Risk

7. Key Features
Intelligent Fault Diagnosis
Automatically identifies likely causes of failures.

Predictive Maintenance
Forecasts future failures before breakdown.

Multi-Agent Collaboration
Specialized AI agents solve different maintenance tasks.

Explainable Recommendations
Provides reasoning behind every recommendation.

Maintenance Planning
Suggests:
    • Immediate actions 
    • Preventive actions 
    • Long-term improvements 

Interactive AI Assistant
Allows natural language interaction with maintenance teams.

8. Assumptions
    1. Equipment data provided is reasonably accurate. 
    2. Historical maintenance records are available. 
    3. Sensor readings are updated periodically. 
    4. Users provide sufficient failure descriptions. 
    5. Domain knowledge repository is maintained. 

9. Limitations
    1. Accuracy depends on quality of input data. 
    2. Extremely rare failure modes may not have historical references. 
    3. Predictions are probabilistic, not guaranteed outcomes. 
    4. Real-time performance depends on backend infrastructure. 
    5. Requires periodic updates to knowledge base and maintenance records. 

10. Installation and Configuration Guide
Prerequisites
Python 3.10+
Node.js 18+
npm
Git

Backend Setup
git clone <repository>
cd backend
pip install -r requirements.txt
python app.py

Frontend Setup
cd frontend
npm install
npm run dev

Production Build
npm run build

Environment Variables
GEMINI_API_KEY_1=xxxx
GEMINI_API_KEY_2=xxxx
GEMINI_API_KEY_3=xxxx


11. Sample Input and Output Demonstration
Sample Input
Equipment:
Conveyor Drive Motor
Symptoms:
- High vibration
- Temperature 95°C
- Intermittent noise
Runtime:
18 hours/day
Last Maintenance:
45 days ago

System Output
Root Cause:
Bearing wear and lubrication degradation
Failure Probability:
82%
Risk Level:
High
Recommended Actions:
1. Inspect bearing assembly
2. Replace lubrication
3. Check shaft alignment
4. Monitor vibration continuously
Priority:
Immediate Maintenance Recommended

12. Business Impact
The Maintenance Wizard system delivers:
    • Reduced equipment downtime 
    • Faster fault diagnosis 
    • Improved maintenance planning 
    • Reduced maintenance costs 
    • Increased plant availability 
    • Better decision support for maintenance teams 

13. Conclusion
Maintenance Wizard is a scalable Industrial Multi-Agent AI platform that combines predictive maintenance, root-cause analysis, intelligent alerting, and maintenance recommendations into a single decision-support system. By leveraging collaborative AI agents and advanced reasoning pipelines, the system helps industries move from reactive maintenance to proactive and predictive maintenance strategies, improving operational reliability and reducing unplanned downtime.
This version is suitable for submission to hackathons, innovation challenges, industry showcases, and technical evaluations.
