import { useEffect, useState } from "react";
import axios from "axios";
import KPIcard from "../components/KPIcard";

export default function Dashboard() {

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {

    loadDashboard();

    const timer = setInterval(() => {
      loadDashboard();
    }, 5000);

    return () => clearInterval(timer);

  }, []);

  const loadDashboard = async () => {

    try {

      const response = await axios.get(
        "https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/dashboard/status"
      );

      setDashboard(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  const kpis = dashboard
  ? [
      {
        title: "Connected Assets",
        value: dashboard.connected_assets,
        color: "text-cyan-400",
      },
      {
        title: "Critical Insights",
        value: dashboard.critical_insights,
        color: "text-amber-400",
      },
      {
        title: "Failure Predictions",
        value: dashboard.failure_predictions,
        color: "text-red-400",
      },
      {
        title: "Optimization Actions",
        value: dashboard.optimization_actions,
        color: "text-emerald-400",
      },
    ]
  : [];

  return (
    <div className="flex-1 bg-[#020617] text-white min-h-screen">

      {/* Header */}

      <div className="px-10 py-5 border-b border-slate-800">

        <div className="flex justify-between items-start">

          <div>

            <h1 className="text-5xl font-bold">
              SteelOps AI Command Center
            </h1>

            <p className="text-slate-400 mt-2">
              Maintenance Wizard : Industrial Multi-Agent AI System
            </p>

          </div>

          {/* System Status */}

          <div className="border border-emerald-500 rounded-2xl px-6 py-3 text-center">

            <div className="text-sm text-emerald-300">
              System Status
            </div>

            <div className="text-2xl font-bold text-emerald-400">
              6 Agents Active
            </div>

          </div>

        </div>

      </div>

      <div className="p-10">

        {/* KPI */}

        <div className="grid grid-cols-4 gap-6 mb-8">

          {kpis.map((item) => (
            <KPIcard
              key={item.title}
              title={item.title}
              value={item.value}
              color={item.color}
            />
          ))}

        </div>

        {/* Row 1 */}

        <div className="grid grid-cols-3 gap-6 mb-8">

          {/* Agent Network */}

          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

            <h2 className="text-3xl font-bold text-cyan-400 mb-5">
              Multi-Agent Network
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>🧠 Diagnostic Agent</span>
                <span className="text-green-400">ACTIVE</span>
              </div>

              <div className="flex justify-between">
                <span>🔍 Root Cause Agent</span>
                <span className="text-green-400">ACTIVE</span>
              </div>

              <div className="flex justify-between">
                <span>📊 Risk Intelligence Agent</span>
                <span className="text-green-400">ACTIVE</span>
              </div>

              <div className="flex justify-between">
                <span>📅 Planning Agent</span>
                <span className="text-green-400">ACTIVE</span>
              </div>

              <div className="flex justify-between">
                <span>📚 Knowledge Agent</span>
                <span className="text-green-400">ACTIVE</span>
              </div>
              
              <div className="flex justify-between">
                <span>📄 Report Agent</span>
                <span className="text-green-400">ACTIVE</span>
              </div>

            </div>

          </div>

          {/* Autonomous Actions Queue */}

          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

            <h2 className="text-3xl font-bold text-amber-400 mb-5">
              Autonomous Actions Queue
            </h2>

            <div className="space-y-4">

              <div className="bg-slate-800 p-3 rounded-xl">
                Replace CCM Bearing within 5 days
              </div>

              <div className="bg-slate-800 p-3 rounded-xl">
                Schedule Blast Furnace Motor Inspection
              </div>

              <div className="bg-slate-800 p-3 rounded-xl">
                Procure SKF-22320 Bearing
              </div>

            </div>

          </div>

          {/* Risk Board */}

          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

            <h2 className="text-3xl font-bold text-red-400 mb-5">
              Live Risk Board
            </h2>

            <div className="space-y-4">

              {dashboard?.live_risk_board?.map(
                (item, index) => (

                  <div
                    key={index}
                    className="flex justify-between"
                  >

                    <span>
                      {item.equipment}
                    </span>

                    <span
                      className={
                        item.risk === "HIGH"
                          ? "text-red-400"
                          : item.risk === "MEDIUM"
                          ? "text-yellow-400"
                          : "text-green-400"
                      }
                    >
                      {item.risk}
                    </span>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

        {/* Row 2 */}

        <div className="grid grid-cols-3 gap-6 mb-8">

          {/* Agent Collaboration Stream */}

          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

            <h2 className="text-2xl font-bold text-purple-400 mb-5">
              Agent Collaboration Stream
            </h2>

            <div className="space-y-3 text-sm">

              <div>
                🧠 Diagnostic Agent → Abnormal vibration detected
              </div>

              <div>
                🔍 Root Cause Agent → Bearing wear suspected
              </div>

              <div>
                📊 Risk Agent → Failure probability 84%
              </div>

              <div>
                📅 Planning Agent → Maintenance window created
              </div>

            </div>

          </div>

          {/* Live AI Reasoning */}

          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

            <h2 className="text-2xl font-bold text-cyan-400 mb-5">
              Live AI Reasoning
            </h2>

            <div className="space-y-4">

              <div>
                <b>Observation:</b>
                <br />
                {dashboard?.reasoning?.observation}
              </div>

              <div>
                <b>Evidence:</b>
                <br />
                {dashboard?.reasoning?.evidence}
              </div>

              <div>
                <b>Inference:</b>
                <br />
                {dashboard?.reasoning?.inference}
              </div>

              <div>
                <b>Confidence:</b>
                <br />
                {dashboard?.reasoning?.confidence}
              </div>

            </div>

          </div>

          {/* Digital Twin */}

          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

            <h2 className="text-2xl font-bold text-emerald-400 mb-5">
              Plant Digital Twin
            </h2>

            <div className="space-y-3">

              <div className="flex justify-between">
                <span>Blast Furnace</span>
                <span>🟢</span>
              </div>

              <div className="flex justify-between">
                <span>CCM</span>
                <span>🟡</span>
              </div>

              <div className="flex justify-between">
                <span>Rolling Mill</span>
                <span>🟢</span>
              </div>

              <div className="flex justify-between">
                <span>Utilities</span>
                <span>🔴</span>
              </div>

            </div>

          </div>

        </div>

        {/* Pipeline */}

        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Autonomous Decision Pipeline
          </h2>

          <div className="grid grid-cols-6 gap-4 text-center">

            <div className="bg-slate-800 rounded-xl p-4">
              🚨 Event
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              🧠 Diagnose
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              🔍 RCA
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              📊 Risk Score
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              📅 Plan
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              ✅ Execute
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
