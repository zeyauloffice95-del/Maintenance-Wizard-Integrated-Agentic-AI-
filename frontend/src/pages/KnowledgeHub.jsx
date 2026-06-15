import { useState, useEffect } from "react";
import axios from "axios";

export default function KnowledgeHub() {

  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [docsLoaded, setDocsLoaded] = useState(0);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {

    loadDocuments();

  }, []);

  const loadDocuments = async () => {

    try {

      const res = await axios.get(
        "https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/knowledge/"
      );

      setDocsLoaded(
        res.data.docs_loaded || 0
      );

      setDocuments(
        res.data.documents || []
      );

    } catch (err) {

      console.error(err);

    }

  };

  const searchKnowledge = async (
    searchTerm = query
  ) => {

    if (!searchTerm.trim()) return;

    try {

      const res = await axios.get(
        `https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/knowledge/${encodeURIComponent(searchTerm)}`
      );

      setAnswer(
        res.data.result ||
        "No relevant information found."
      );

      setQuery(searchTerm);

    } catch (error) {

      console.error(error);

      setAnswer(
        "Knowledge search failed"
      );

    }

  };

  return (

    <div className="p-10 text-white min-h-screen">

      <h1 className="text-5xl font-bold text-purple-400 mb-8">
        Industrial Knowledge Hub
      </h1>

      {/* Statistics */}

      <div className="grid grid-cols-4 gap-6 mb-8">

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div className="text-slate-400">
            Knowledge Documents
          </div>

          <div className="text-3xl font-bold text-cyan-400">
            {docsLoaded}
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div className="text-slate-400">
            SOP Documents
          </div>

          <div className="text-3xl font-bold text-green-400">
            5
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div className="text-slate-400">
            Manuals
          </div>

          <div className="text-3xl font-bold text-yellow-400">
            6
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div className="text-slate-400">
            Failure Reports
          </div>

          <div className="text-3xl font-bold text-red-400">
            5
          </div>
        </div>

      </div>

      {/* Search Bar */}

      <div className="flex gap-3 mb-6">

        <input
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          placeholder="Search bearing, motor, gearbox, hydraulic, vibration..."
          className="
          flex-1
          bg-slate-800
          p-4
          rounded-xl
          outline-none
          "
        />

        <button
          onClick={() => searchKnowledge()}
          className="
          bg-purple-600
          hover:bg-purple-700
          px-6
          rounded-xl
          "
        >
          Search
        </button>

      </div>

      {/* Quick Search */}

      <div className="flex flex-wrap gap-2 mb-8">

        {[
          "bearing",
          "gearbox",
          "motor",
          "hydraulic",
          "pump",
          "lubrication",
          "compressor",
          "cooling water",
          "caster",
          "vibration"
        ].map((item) => (

          <button
            key={item}
            onClick={() => searchKnowledge(item)}
            className="
            bg-slate-800
            hover:bg-cyan-700
            px-3
            py-2
            rounded-lg
            "
          >
            {item}
          </button>

        ))}

      </div>

      {/* Documents */}

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        Available Knowledge Documents
      </h2>

      <div className="grid grid-cols-3 gap-4 mb-10">

        {documents.map((doc, index) => (

          <div
            key={index}
            onClick={() =>
              searchKnowledge(
                doc
                  .replace(".pdf", "")
                  .replaceAll("_", " ")
              )
            }
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            p-4
            cursor-pointer
            hover:border-cyan-400
            hover:scale-105
            transition
            "
          >

            <div className="font-semibold">
              📘 {doc}
            </div>

            <div className="text-xs text-slate-400 mt-2">
              Click to search contents
            </div>

          </div>

        ))}

      </div>

      {/* Search Results */}

      <div
        className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
        "
      >

        <h2 className="text-2xl font-bold text-green-400 mb-4">
          Search Results
        </h2>

        <div
          className="
          whitespace-pre-wrap
          text-slate-200
          leading-relaxed
          "
        >

          {answer ||
            "Select a document, click a quick-search keyword, or enter your own search term."}

        </div>

      </div>

    </div>

  );

}