import { useState } from "react";
import axios from "axios";

export default function Copilot() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askCopilot = async () => {

    try {

      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/chat/ask",
        {
          question
        }
      );

      const data = response.data;

      if (typeof data.answer === "string") {

        setAnswer(data.answer);

      } else {

        setAnswer(
          JSON.stringify(
            data.answer,
            null,
            2
          )
        );

      }

    } catch (error) {

      console.error(error);

      setAnswer(
        "Failed to get response from Copilot."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-[#020617] text-white p-10">

      <h1 className="text-5xl font-bold mb-8">
        Maintenance Chat Copilot
      </h1>

      <textarea
        rows={6}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="
          w-full
          bg-slate-800
          p-4
          rounded-xl
        "
        placeholder="Ask maintenance related questions..."
      />

      <button
        onClick={askCopilot}
        disabled={loading}
        className="
          mt-4
          bg-cyan-600
          hover:bg-cyan-500
          transition-all
          duration-200
          px-6
          py-3
          rounded-xl
          disabled:opacity-50
        "
      >
        {loading ? "Thinking..." : "Ask Copilot"}
      </button>

      {answer && (

        <div
          className="
            mt-8
            bg-slate-900
            p-6
            rounded-2xl
            border
            border-cyan-700
          "
        >

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Copilot Response
          </h2>

          <pre
            className="
              whitespace-pre-wrap
              text-sm
              leading-7
            "
          >
            {answer}
          </pre>

        </div>

      )}

    </div>

  );

}
