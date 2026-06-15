import { useEffect, useState } from "react";
import axios from "axios";

export default function Planner() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    axios
      .get("https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/planner/")
      .then(res => setTasks(res.data))
      .catch(console.error);

  }, []);

  const highCount =
    tasks.filter(t => t.priority === "HIGH").length;

  const mediumCount =
    tasks.filter(t => t.priority === "MEDIUM").length;

  const lowCount =
    tasks.filter(t => t.priority === "LOW").length;

  const getPriorityColor = (priority) => {

    if (priority === "HIGH")
      return "bg-red-500";

    if (priority === "MEDIUM")
      return "bg-yellow-500";

    return "bg-green-500";
  };

  return (

    <div className="p-10 text-white">

      <h1 className="text-4xl font-bold text-amber-400 mb-8">
        Maintenance Planner
      </h1>

      {/* Summary Cards */}

      <div className="grid md:grid-cols-4 gap-5 mb-8">

        <div className="bg-slate-900 rounded-xl p-5 border border-cyan-700">
          <div className="text-slate-400">
            Total Tasks
          </div>
          <div className="text-4xl font-bold text-cyan-400">
            {tasks.length}
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl p-5 border border-red-700">
          <div className="text-slate-400">
            High Priority
          </div>
          <div className="text-4xl font-bold text-red-400">
            {highCount}
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl p-5 border border-yellow-700">
          <div className="text-slate-400">
            Medium Priority
          </div>
          <div className="text-4xl font-bold text-yellow-400">
            {mediumCount}
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl p-5 border border-green-700">
          <div className="text-slate-400">
            Low Priority
          </div>
          <div className="text-4xl font-bold text-green-400">
            {lowCount}
          </div>
        </div>

      </div>

      {/* Task Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {tasks.map((task, index) => (

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

            <div className="flex justify-between items-center mb-4">

              <div
                className={`
                px-3
                py-1
                rounded-full
                text-xs
                font-bold
                text-black
                ${getPriorityColor(task.priority)}
                `}
              >
                {task.priority}
              </div>

              <div className="text-slate-400 text-sm">
                {task.due_date}
              </div>

            </div>

            <div className="text-lg font-bold text-amber-300 mb-3">
              {task.task}
            </div>

            <div className="text-slate-400">
              Area
            </div>

            <div className="text-cyan-300 font-semibold">
              {task.area}
            </div>

          </div>

        ))}

      </div>

    </div>

  );
}