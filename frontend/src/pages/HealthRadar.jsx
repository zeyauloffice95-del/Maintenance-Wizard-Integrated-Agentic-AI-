import { useEffect, useState } from "react";
import axios from "axios";

export default function HealthRadar() {

  const [assets, setAssets] = useState([]);

  useEffect(() => {

    axios
      .get("https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/health/")
      .then(res => setAssets(res.data))
      .catch(console.error);

  }, []);

  const healthyCount =
    assets.filter(a => a.health >= 85).length;

  const warningCount =
    assets.filter(a => a.health >= 70 && a.health < 85).length;

  const criticalCount =
    assets.filter(a => a.health < 70).length;

  const getHealthColor = (health) => {

    if (health < 70)
      return "bg-red-500";

    if (health < 85)
      return "bg-yellow-500";

    return "bg-green-500";
  };

  const getTrendIcon = (trend) => {

    if (trend === "UP")
      return "⬆";

    if (trend === "DOWN")
      return "⬇";

    return "➡";
  };

  return (

    <div className="p-10 text-white">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Health Radar
      </h1>

      {/* Summary Cards */}

      <div className="grid md:grid-cols-3 gap-5 mb-8">

        <div className="bg-slate-900 rounded-xl p-5 border border-green-700">
          <div className="text-slate-400">
            Healthy Assets
          </div>
          <div className="text-4xl font-bold text-green-400">
            {healthyCount}
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl p-5 border border-yellow-700">
          <div className="text-slate-400">
            Warning Assets
          </div>
          <div className="text-4xl font-bold text-yellow-400">
            {warningCount}
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl p-5 border border-red-700">
          <div className="text-slate-400">
            Critical Assets
          </div>
          <div className="text-4xl font-bold text-red-400">
            {criticalCount}
          </div>
        </div>

      </div>

      {/* Asset Health Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {assets.map((asset, index) => (

          <div
            key={index}
            className="
            bg-slate-900
            rounded-xl
            border
            border-slate-700
            p-5
            shadow-lg
            hover:scale-105
            transition-all
            duration-300
            "
          >

            <div className="flex justify-between items-center mb-3">

              <div className="font-bold text-cyan-300">
                {asset.asset}
              </div>

              <div className="text-xl">
                {getTrendIcon(asset.trend)}
              </div>

            </div>

            <div className="flex justify-between mb-2">

              <span className="text-slate-400">
                Health
              </span>

              <span className="font-bold">
                {asset.health}%
              </span>

            </div>

            <div className="w-full bg-slate-700 rounded-full h-3">

              <div
                className={`${getHealthColor(asset.health)} h-3 rounded-full`}
                style={{
                  width: `${asset.health}%`
                }}
              />

            </div>

            <div className="mt-3 text-sm text-slate-400">
              Trend : {asset.trend}
            </div>

          </div>

        ))}

      </div>

    </div>

  );
}