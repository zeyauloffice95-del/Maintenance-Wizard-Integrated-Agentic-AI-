import { useEffect, useState } from "react";
import axios from "axios";

const API_URL =
  "https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app";

export default function Reports() {

  const [reports, setReports] = useState([]);

  useEffect(() => {

    axios
      .get(`${API_URL}/reports/`)
      .then(res => setReports(res.data))
      .catch(err => console.error(err));

  }, []);

  return (

    <div className="p-10 text-white">

      <h1 className="text-4xl text-cyan-400 font-bold mb-6">
        Reports
      </h1>

      {
        reports.map((report,index)=>(
          <div
            key={index}
            className="
            bg-slate-900
            p-4
            rounded
            mb-3
            flex
            justify-between
            items-center
            "
          >

            <span>
              {report.name}
            </span>

            <a
              href={`https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/reports/download/${report.name}`}
              target="_blank"
              rel="noreferrer"
              className="
              bg-cyan-600
              hover:bg-cyan-700
              px-4
              py-2
              rounded
              "
            >
              Download
            </a>

          </div>
        ))
      }

    </div>

  );

}