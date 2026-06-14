import { useEffect,useState } from "react";
import axios from "axios";

export default function AIAgents(){

  const [agents,setAgents] =
    useState([]);

  useEffect(()=>{

    axios
      .get("https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/agents/")
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
