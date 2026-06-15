import { useEffect, useState } from "react";
import axios from "axios";

export default function FailureForecast() {

  const [data, setData] = useState([]);

  useEffect(() => {

    axios
      .get("https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/forecast/")
      .then(res => setData(res.data))
      .catch(console.error);

  }, []);

  const criticalCount =
    data.filter(item => item.probability >= 80).length;

  const averageProbability =
    data.length > 0
      ? Math.round(
          data.reduce(
            (sum, item) => sum + item.probability,
            0
          ) / data.length
        )
      : 0;

  const getColor = (probability) => {

    if (probability >= 80)
      return "bg-red-500";

    if (probability >= 60)
      return "bg-orange-500";

    if (probability >= 40)
      return "bg-yellow-500";

    return "bg-green-500";
  };

  const getTextColor = (probability) => {

    if (probability >= 80)
      return "text-red-400";

    if (probability >= 60)
      return "text-orange-400";

    if (probability >= 40)
      return "text-yellow-400";

    return "text-green-400";
  };

  return (

    <div className="p-10 text-white">

      <h1 className="text-4xl font-bold text-red-400 mb-8">
        Failure Forecast
      </h1>

      {/* Summary Cards */}

      <div className="grid md:grid-cols-3 gap-5 mb-8">

        <div className="bg-slate-900 p-5 rounded-xl border border-cyan-700">

          <div className="text-slate-400">
            Forecasted Assets
          </div>

          <div className="text-4xl font-bold text-cyan-400">
            {data.length}
          </div>

        </div>

        <div className="bg-slate-900 p-5 rounded-xl border border-red-700">

          <div className="text-slate-400">
            Critical Risk Assets
          </div>

          <div className="text-4xl font-bold text-red-400">
            {criticalCount}
          </div>

        </div>

        <div className="bg-slate-900 p-5 rounded-xl border border-yellow-700">

          <div className="text-slate-400">
            Avg Failure Risk
          </div>

          <div className="text-4xl font-bold text-yellow-400">
            {averageProbability}%
          </div>

        </div>

      </div>

      {/* Forecast Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {data.map((item, index) => (

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

            <div className="text-xl font-bold text-cyan-300 mb-3">
              {item.asset}
            </div>

            <div className="flex justify-between mb-2">

              <span className="text-slate-400">
                Failure Probability
              </span>

              <span
                className={`font-bold ${getTextColor(item.probability)}`}
              >
                {item.probability}%
              </span>

            </div>

            <div className="w-full bg-slate-700 rounded-full h-3">

              <div
                className={`${getColor(item.probability)} h-3 rounded-full`}
                style={{
                  width: `${item.probability}%`
                }}
              />

            </div>

            <div className="mt-4">

              <div className="text-slate-400 text-sm">
                Remaining Useful Life
              </div>

              <div className="font-bold text-lg">
                {item.rul}
              </div>

            </div>

            <div className="mt-4">

              <div className="text-slate-400 text-sm">
                Recommended Action
              </div>

              <div className="text-cyan-300">
                {item.action}
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}