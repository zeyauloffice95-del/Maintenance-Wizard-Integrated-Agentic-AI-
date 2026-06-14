import { useEffect,useState } from "react";
import api from "../services/api";

export default function AIAgents(){

  const [agents,setAgents] =
    useState([]);

  useEffect(()=>{

    api.get("/agents")
      .then(res=>setAgents(res.data));

  },[]);

  

  return(

    <div className="p-10 text-white">

      <h1 className="text-4xl text-cyan-400 font-bold mb-6">
        AI Agents
      </h1>

      {
        agents.map((agent,index)=>(

          <div
            key={index}
            className="mb-3"
          >

            🟢 {agent.name}

          </div>

        ))
      }

    </div>

  );

}
