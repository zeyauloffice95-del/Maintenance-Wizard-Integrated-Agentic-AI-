import { useState } from "react";
import axios from "axios";

export default function Analysis() {

  const [equipment, setEquipment] =
    useState("CCM Segment Bearing");

  const [symptoms, setSymptoms] =
    useState("High vibration, increasing temperature, abnormal noise");

  const [faultMessage, setFaultMessage] =
    useState("");

  const [delayLog, setDelayLog] =
    useState("");

  const [sensorSummary, setSensorSummary] =
    useState("");

  const [anomalyAlert, setAnomalyAlert] =
    useState("");

  const [engineerQuery, setEngineerQuery] =
    useState("");

  const [uploadedFiles, setUploadedFiles] =
    useState([]);

  const [result, setResult] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [rating, setRating] =
    useState(5);

  const [comment, setComment] =
    useState("");

  const [feedbackStatus, setFeedbackStatus] =
    useState("");

  const handleFiles = (e) => {

    const files =
      Array.from(e.target.files);

    setUploadedFiles(files);

  };

  const analyzeEquipment = async () => {

    try {

      setLoading(true);

      const response = await axios.post(
        "https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/maintenance/analyze",
        {
          equipment,

          symptoms,

          fault_message:
            faultMessage,

          delay_log:
            delayLog,

          sensor_summary:
            sensorSummary,

          anomaly_alert:
            anomalyAlert,

          engineer_query:
            engineerQuery,

          uploaded_documents:
            uploadedFiles.map(
              file => file.name
            )
        }
      );
      console.log(
          "API RESPONSE:",
          response.data
      );

      setResult(response.data);

      await axios.post(
        "https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/dashboard/update",
        response.data
      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  const downloadReport = async () => {

    try {

      const response = await fetch(
        "https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/report/download",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            equipment,
            symptoms
          })
        }
      );

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");

      a.href = url;

      a.download = "Maintenance_Report.pdf";

      document.body.appendChild(a);

      a.click();

      a.remove();

      window.URL.revokeObjectURL(url);

    } catch (error) {

      console.error("PDF Download Error:", error);

    }

  };

  const submitFeedback = async () => {

    try {

      await axios.post(
        "https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app/feedback/submit",
        {
          equipment,
          diagnosis: result?.diagnosis,
          rating,
          comment
        }
      );

      setFeedbackStatus(
        "Feedback Saved Successfully ✅"
      );

    } catch (error) {

      console.error(error);

      setFeedbackStatus(
        "Failed to Save Feedback ❌"
      );
    }
  };

  const renderList = (items) => {

    if (!items || !Array.isArray(items)) return null;

    return (
      <ul className="list-disc pl-6 space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white p-10">

      {/* Header */}

      <h1 className="text-5xl font-bold mb-8">
        Equipment Analysis
      </h1>

      {/* Inputs */}

      <div className="space-y-4 mb-8">

        <input
          className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl"
          placeholder="Equipment Name"
          value={equipment}
          onChange={(e)=>setEquipment(e.target.value)}
        />

        <textarea
          rows={3}
          className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl"
          placeholder="Fault/Error Message"
          value={faultMessage}
          onChange={(e)=>setFaultMessage(e.target.value)}
        />

        <textarea
          rows={3}
          className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl"
          placeholder="Equipment Delay Log"
          value={delayLog}
          onChange={(e)=>setDelayLog(e.target.value)}
        />

        <textarea
          rows={3}
          className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl"
          placeholder="Sensor Data Summary"
          value={sensorSummary}
          onChange={(e)=>setSensorSummary(e.target.value)}
        />

        <textarea
          rows={3}
          className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl"
          placeholder="Anomaly Alert"
          value={anomalyAlert}
          onChange={(e)=>setAnomalyAlert(e.target.value)}
        />

        <textarea
          rows={4}
          className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl"
          placeholder="Symptoms"
          value={symptoms}
          onChange={(e)=>setSymptoms(e.target.value)}
        />

        <textarea
          rows={3}
          className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl"
          placeholder="Natural Language Query"
          value={engineerQuery}
          onChange={(e)=>setEngineerQuery(e.target.value)}
        />

        <div className="bg-slate-900 p-4 rounded-xl">

          <div className="mb-2 text-cyan-400">
            Upload Knowledge Documents
          </div>

          <input
            type="file"
            multiple
            onChange={handleFiles}
          />

        </div>

        {
          uploadedFiles.length > 0 && (

            <div className="bg-slate-900 p-4 rounded-xl">

              <div className="text-green-400 mb-2">
                Uploaded Files
              </div>

              {
                uploadedFiles.map((file,index)=>(
                  <div key={index}>
                    📄 {file.name}
                  </div>
                ))
              }

            </div>

          )
        }

      </div>

      {/* Results */}

      {result && (

        <div className="space-y-6">

          {/* Executive Summary */}

          <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-800">

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Executive Summary
            </h2>

            <p>{result.executive_summary}</p>

          </div>

          {/* Diagnosis + Root Cause */}

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

              <h2 className="text-xl font-bold text-cyan-400 mb-3">
                Diagnosis
              </h2>

              <p>{result.diagnosis}</p>

            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

              <h2 className="text-xl font-bold text-orange-400 mb-3">
                Root Cause
              </h2>

              <p>{result.root_cause}</p>

            </div>

          </div>

          {/* Risk */}

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-slate-900 p-6 rounded-2xl">

              <h2 className="text-xl font-bold text-red-400 mb-3">
                Risk Level
              </h2>

              <p>{result.risk_level}</p>

            </div>

            <div className="bg-slate-900 p-6 rounded-2xl">

              <h2 className="text-xl font-bold text-yellow-400 mb-3">
                Failure Probability
              </h2>

              <p>{result.failure_probability}</p>

            </div>

          </div>

          {/* RUL */}

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-slate-900 p-6 rounded-2xl">

              <h2 className="text-xl font-bold text-green-400 mb-3">
                Remaining Useful Life
              </h2>

              <p>{result.remaining_useful_life}</p>

            </div>

            <div className="bg-slate-900 p-6 rounded-2xl">

              <h2 className="text-xl font-bold text-red-500 mb-3">
                Catastrophic Risk
              </h2>

              <p>{result.catastrophic_risk}</p>

            </div>

          </div>

          {/* Immediate Actions */}

          <div className="bg-slate-900 p-6 rounded-2xl">

            <h2 className="text-2xl font-bold text-red-400 mb-4">
              Immediate Actions
            </h2>

            {renderList(result.immediate_actions)}

          </div>

          {/* Short Term */}

          <div className="bg-slate-900 p-6 rounded-2xl">

            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Short Term Actions
            </h2>

            {renderList(result.short_term_actions)}

          </div>

          {/* Long Term */}

          <div className="bg-slate-900 p-6 rounded-2xl">

            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Long Term Actions
            </h2>

            {renderList(result.long_term_actions)}

          </div>

          {/* Spare Procurement */}

          <div className="bg-slate-900 p-6 rounded-2xl">

            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Spare Procurement Strategy
            </h2>

            {renderList(result.spare_procurement)}

          </div>

          {/* Recommendation */}

          <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-700">

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Maintenance Recommendation
            </h2>

            <p>{result.maintenance_recommendation}</p>

          </div>

          {/* Conclusion */}

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">

            <h2 className="text-2xl font-bold text-white mb-4">
              Conclusion
            </h2>

            <p>{result.conclusion}</p>

          </div>

          {/* Feedback Learning */}

          <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-700">

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Feedback Learning
            </h2>

            <div className="mb-4">

              <label className="block mb-2">
                Engineer Rating
              </label>

              <select
                className="
                bg-slate-800
                border border-slate-700
                p-2
                rounded-lg
                "
                value={rating}
                onChange={(e) =>
                  setRating(e.target.value)
                }
              >

                <option value="1">⭐ 1</option>
                <option value="2">⭐⭐ 2</option>
                <option value="3">⭐⭐⭐ 3</option>
                <option value="4">⭐⭐⭐⭐ 4</option>
                <option value="5">⭐⭐⭐⭐⭐ 5</option>

              </select>

            </div>

            <textarea

              rows={4}

              placeholder="Engineer Comments"

              className="
              w-full
              bg-slate-800
              border border-slate-700
              p-3
              rounded-xl
              mb-4
              "

              value={comment}

              onChange={(e) =>
                setComment(e.target.value)
              }

            />

            <button

              onClick={submitFeedback}

              className="
              bg-green-600
              hover:bg-green-500
              hover:scale-105
              transition-all
              duration-200
              px-6
              py-3
              rounded-xl
              font-semibold
              shadow-lg
              shadow-green-900/50
              "

            >

              Submit Feedback

            </button>

            {feedbackStatus && (

              <p className="mt-4 text-green-400">

                {feedbackStatus}

              </p>

            )}

          </div>

        </div>

      )}

    </div>
  );
}
