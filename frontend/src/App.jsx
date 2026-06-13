import { useState } from "react";

import TopNav from "./components/TopNav";

import Dashboard from "./pages/Dashboard";
import Analysis from "./pages/Analysis";
import Copilot from "./pages/Copilot";

import AssetUniverse from "./pages/AssetUniverse";
import HealthRadar from "./pages/HealthRadar";
import FailureForecast from "./pages/FailureForecast";
import AIAgents from "./pages/AIAgents";
import Planner from "./pages/Planner";
import DigitalTwin from "./pages/DigitalTwin";
import KnowledgeHub from "./pages/KnowledgeHub";
import Reports from "./pages/Reports";

function App() {

  const [page, setPage] =
    useState("dashboard");

  return (

    <div className="min-h-screen bg-[#050816] text-white">

      <TopNav />

      {/* Navigation Buttons */}

      <div className="
      flex
      flex-wrap
      gap-3
      px-6
      py-4
      bg-slate-900
      ">

        <button
          onClick={() => setPage("dashboard")}
          className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded"
        >
          Dashboard
        </button>

        <button
          onClick={() => setPage("analysis")}
          className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded"
        >
          Analysis
        </button>

        <button
          onClick={() => setPage("copilot")}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
        >
          Maintenance Copilot
        </button>

        <button
          onClick={() => setPage("assets")}
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded"
        >
          Asset Universe
        </button>

        <button
          onClick={() => setPage("health")}
          className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded"
        >
          Health Radar
        </button>

        <button
          onClick={() => setPage("forecast")}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Failure Forecast
        </button>

        <button
          onClick={() => setPage("agents")}
          className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded"
        >
          AI Agents
        </button>

        <button
          onClick={() => setPage("planner")}
          className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded"
        >
          Planner
        </button>

        <button
          onClick={() => setPage("twin")}
          className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded"
        >
          Digital Twin
        </button>

        <button
          onClick={() => setPage("knowledge")}
          className="bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded"
        >
          Knowledge Hub
        </button>

        <button
          onClick={() => setPage("reports")}
          className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded"
        >
          Reports
        </button>

      </div>

      {/* Page Content */}

      <main>

        {page === "dashboard" && <Dashboard />}

        {page === "analysis" && <Analysis />}

        {page === "copilot" && <Copilot />}

        {page === "assets" && <AssetUniverse />}

        {page === "health" && <HealthRadar />}

        {page === "forecast" && <FailureForecast />}

        {page === "agents" && <AIAgents />}

        {page === "planner" && <Planner />}

        {page === "twin" && <DigitalTwin />}

        {page === "knowledge" && <KnowledgeHub />}

        {page === "reports" && <Reports />}

      </main>

    </div>

  );
}

export default App;
