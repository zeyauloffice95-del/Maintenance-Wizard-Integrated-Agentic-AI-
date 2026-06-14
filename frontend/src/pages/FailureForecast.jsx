import { useEffect,useState } from "react";
import api from "../services/api";

export default function FailureForecast() {

  const [data,setData] = useState([]);

  useEffect(()=>{

    api.get("/forecast")
      .then(res => setData(res.data));

  },[]);

  const forecasts = [
    {
      asset: "CCM Segment Bearing",
      probability: "87%",
      rul: "5 Days",
      action: "Replace Bearing"
    },
    {
      asset: "Rolling Mill Gearbox",
      probability: "63%",
      rul: "12 Days",
      action: "Inspect Lubrication"
    },
    {
      asset: "Hydraulic Pump",
      probability: "34%",
      rul: "30 Days",
      action: "Monitor"
    }
  ];

  return(

    <div className="p-10 text-white">

      <h1 className="text-4xl font-bold text-red-400 mb-6">
        Failure Forecast
      </h1>

      {
        data.map((item,index)=>(
          <div
            key={index}
            className="mb-4"
          >

            <div>
              {item.asset}
            </div>

            <div>
              {item.probability}%
            </div>

          </div>
        ))
      }

    </div>

  );

}
