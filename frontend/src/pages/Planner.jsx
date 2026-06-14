import { useEffect,useState } from "react";
import api from "../services/api";

export default function Planner(){

  const [tasks,setTasks] =
    useState([]);

  useEffect(()=>{

    api.get("/planner")
      .then(res=>setTasks(res.data));

  },[]);

  return(

    <div className="p-10 text-white">

      <h1 className="text-4xl font-bold text-amber-400 mb-6">
        Maintenance Planner
      </h1>

      {
        tasks.map((task,index)=>(
          <div
            key={index}
            className="
            bg-slate-900
            p-4
            rounded
            mb-3
            "
          >
            {task.task}
            <br/>
            {task.priority}
          </div>
        ))
      }

    </div>

  );

}
