import { useEffect,useState } from "react";
import axios from "axios";

export default function Reports(){

  const [reports,setReports] =
    useState([]);

  useEffect(()=>{

    axios
      .get("https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/reports")
      .then(res=>setReports(res.data));

  },[]);

  return(

    <div className="p-10 text-white">

      <h1 className="text-4xl text-cyan-400 font-bold mb-6">
        Reports
      </h1>

      {
        reports.map((report,index)=>(
          <div
            key={index}
            className="mb-3"
          >
            {report.name}
          </div>
        ))
      }

    </div>

  );

}
