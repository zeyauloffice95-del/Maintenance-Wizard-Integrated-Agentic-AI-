import { useEffect, useState } from "react";
import axios from "axios";

export default function DigitalTwin() {

  const [data, setData] = useState(null);

  useEffect(() => {

    axios
      .get("https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/twin/")
      .then((res) => setData(res.data))
      .catch(console.error);

  }, []);

  if (!data) {

    return (
      <div className="p-10 text-white">
        Loading Digital Twin...
      </div>
    );

  }

  return (

    <div className="p-10 text-white min-h-screen">

      <h1 className="text-5xl font-bold text-emerald-400 mb-8">
        Plant Digital Twin
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-4 gap-6 mb-10">

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div className="text-slate-400 mb-2">
            Plant Availability
          </div>
          <div className="text-3xl font-bold text-green-400">
            {data.summary.availability}
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div className="text-slate-400 mb-2">
            Power Consumption
          </div>
          <div className="text-3xl font-bold text-cyan-400">
            {data.summary.power_consumption}
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div className="text-slate-400 mb-2">
            Average Health
          </div>
          <div className="text-3xl font-bold text-emerald-400">
            {data.summary.avg_health}
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div className="text-slate-400 mb-2">
            Production Efficiency
          </div>
          <div className="text-3xl font-bold text-yellow-400">
            {data.summary.efficiency}
          </div>
        </div>

      </div>

      {/* Assets */}

      <div className="grid grid-cols-4 gap-6">

        {data.assets.map((asset, index) => (

          <div
            key={index}
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-5
            "
          >

            <h2 className="text-xl font-bold mb-4">
              {asset.name}
            </h2>

            <div className="mb-3">

              <span className="font-semibold">
                Status :
              </span>

              <span
                className={
                  asset.status === "RUNNING"
                    ? "text-green-400 ml-2"
                    : asset.status === "WARNING"
                    ? "text-yellow-400 ml-2"
                    : "text-red-400 ml-2"
                }
              >
                {asset.status}
              </span>

            </div>

            <div className="mb-2">
              Health : {asset.health}%
            </div>

            <div className="mb-2">
              Efficiency : {asset.efficiency}%
            </div>

            <div>
              Temperature : {asset.temperature}°C
            </div>

          </div>

        ))}

      </div>

    </div>

  );

}