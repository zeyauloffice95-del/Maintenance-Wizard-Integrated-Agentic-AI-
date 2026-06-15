import { useEffect, useState } from "react";
import axios from "axios";

export default function AssetUniverse() {

  const [assets, setAssets] = useState([]);

  useEffect(() => {

    axios
      .get("https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/assets/")
      .then((res) => setAssets(res.data))
      .catch(console.error);

  }, []);

  const getRiskColor = (risk) => {

    if (risk === "HIGH")
      return "bg-red-500";

    if (risk === "MEDIUM")
      return "bg-yellow-500";

    return "bg-green-500";
  };

  const getHealthColor = (health) => {

    if (health < 70)
      return "text-red-400";

    if (health < 85)
      return "text-yellow-400";

    return "text-green-400";
  };

  return (

    <div className="p-10 text-white">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Asset Universe
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {assets.map((asset, index) => (

          <div
            key={index}
            className="
            bg-slate-900
            border
            border-slate-700
            rounded-xl
            p-5
            shadow-lg
            hover:scale-105
            transition-all
            duration-300
            "
          >

            <div className="flex justify-between items-center mb-3">

              <div className="text-sm text-slate-400">
                {asset.id}
              </div>

              <div
                className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-bold
                  text-black
                  ${getRiskColor(asset.risk)}
                `}
              >
                {asset.risk}
              </div>

            </div>

            <div className="text-xl font-bold text-cyan-300 mb-2">
              {asset.name}
            </div>

            <div className="text-slate-400 mb-4">
              {asset.area}
            </div>

            <div className="flex justify-between items-center">

              <span className="text-slate-300">
                Health Score
              </span>

              <span
                className={`
                  font-bold
                  text-2xl
                  ${getHealthColor(asset.health)}
                `}
              >
                {asset.health}%
              </span>

            </div>

            <div className="mt-4 w-full bg-slate-700 rounded-full h-3">

              <div
                className="bg-cyan-500 h-3 rounded-full"
                style={{
                  width: `${asset.health}%`
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}