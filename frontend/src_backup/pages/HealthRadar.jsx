import { useEffect, useState } from "react";
import axios from "axios";

export default function HealthRadar() {

  const [data,setData] = useState({});

  useEffect(()=>{

    axios
      .get("https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/health")
      .then(res => setData(res.data));

  },[]);

  return(

    <div className="p-10 text-white">

      <h1 className="text-4xl font-bold text-cyan-400 mb-6">
        Health Radar
      </h1>

      {
        Object.entries(data).map(
          ([key,value]) => (

            <div
              key={key}
              className="mb-4"
            >

              <div>{key}</div>

              <div className="bg-slate-800 h-6 rounded">

                <div
                  className="bg-cyan-500 h-6 rounded"
                  style={{
                    width:`${value}%`
                  }}
                />

              </div>

            </div>

          )
        )
      }

    </div>

  );

}
