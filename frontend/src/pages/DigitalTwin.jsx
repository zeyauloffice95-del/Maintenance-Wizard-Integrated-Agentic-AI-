import { useEffect,useState } from "react";
import axios from "axios";

export default function DigitalTwin(){

  const [data,setData] =
    useState({});

  useEffect(()=>{

    axios
      .get("https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/twin")
      .then(res=>setData(res.data));

  },[]);

  return(

    <div className="p-10 text-white">

      <h1 className="text-4xl text-green-400 font-bold mb-6">
        Digital Twin
      </h1>

      {
        Object.entries(data).map(
          ([plant,status])=>(

            <div
              key={plant}
              className="mb-3"
            >
              {plant} : {status}
            </div>

          )
        )
      }

    </div>

  );

}
