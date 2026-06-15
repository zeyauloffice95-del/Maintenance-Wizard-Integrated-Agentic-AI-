import { useEffect, useState } from "react";
import axios from "axios";

export default function AIAgents() {

  const [data, setData] = useState(null);

  useEffect(() => {

    axios
      .get(
        "https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/agents/"
      )
      .then((res) => setData(res.data))
      .catch(console.error);

  }, []);

  return (

    <div className="p-10 text-white min-h-screen">

      <h1 className="text-5xl font-bold text-cyan-400 mb-8">
        AI Agent Orchestration Center
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-4 gap-6 mb-10">

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div className="text-slate-400">
            Agents Online
          </div>

          <div className="text-3xl font-bold text-green-400">
            {data?.summary?.agents_online}
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div className="text-slate-400">
            Tasks Executed
          </div>

          <div className="text-3xl font-bold text-cyan-400">
            {data?.summary?.tasks_executed}
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div className="text-slate-400">
            Avg Confidence
          </div>

          <div className="text-3xl font-bold text-yellow-400">
            {data?.summary?.avg_confidence}
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div className="text-slate-400">
            System Load
          </div>

          <div className="text-3xl font-bold text-red-400">
            {data?.summary?.system_load}
          </div>
        </div>

      </div>

      {/* Agent Cards */}

      <div className="grid grid-cols-2 gap-6">

        {data?.agents?.map((agent, index) => (

          <div
            key={index}
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-6
            hover:border-cyan-400
            transition
            "
          >

            <div className="flex justify-between mb-4">

              <h2 className="text-2xl font-bold text-cyan-400">
                {agent.name}
              </h2>

              <span className="text-green-400 font-bold">
                ● {agent.status}
              </span>

            </div>

            <div className="space-y-2">

              <div>
                Tasks Completed:
                <span className="text-cyan-300 ml-2">
                  {agent.tasks_completed}
                </span>
              </div>

              <div>
                Latency:
                <span className="text-yellow-300 ml-2">
                  {agent.latency}
                </span>
              </div>

              <div>
                Confidence:
                <span className="text-green-300 ml-2">
                  {agent.confidence}
                </span>
              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Agent Workflow */}

      <div
        className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-8
        mt-10
        "
      >

        <h2 className="text-3xl font-bold text-purple-400 mb-6">
          Agent Collaboration Workflow
        </h2>

        <div className="grid grid-cols-6 gap-4 text-center">

          <div className="bg-slate-800 p-4 rounded-xl">
            🧠 Diagnostic
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            🔍 Root Cause
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            📊 Risk
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            📅 Planner
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            📚 Knowledge
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            📄 Report
          </div>

        </div>

      </div>

    </div>

  );
}