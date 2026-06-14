import { useState } from "react";
import axios from "axios";

export default function KnowledgeHub(){

  const [query,setQuery] =
    useState("");

  const [answer,setAnswer] =
    useState("");

  const searchKnowledge = async () => {

    try {

      const res = await axios.get(
        `https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/knowledge/${query}`
      );

      console.log("Knowledge response:", res.data);

      setAnswer(
        res.data.result || "No result found"
      );

    } catch (error) {

      console.error(error);

      setAnswer(
        "Knowledge search failed"
      );
    }
  };

  return(

    <div className="p-10 text-white">

      <h1 className="text-4xl text-purple-400 font-bold mb-6">
        Knowledge Hub
      </h1>

      <input
        value={query}
        onChange={(e)=>
          setQuery(e.target.value)
        }
        className="
        w-full
        bg-slate-800
        p-3
        rounded
        "
      />

      <button
        onClick={searchKnowledge}
        className="
        bg-purple-600
        px-4
        py-2
        rounded
        mt-3
        "
      >
        Search
      </button>

      <pre className="mt-5 whitespace-pre-wrap">
        {answer}
      </pre>

    </div>

  );

}
