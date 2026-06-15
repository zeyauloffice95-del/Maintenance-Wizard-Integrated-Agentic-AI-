import { useState } from "react";
import axios from "axios";

export default function Analysis() {

  const EQUIPMENT_DATA = {

    "CCM Segment Bearing": {

      fault_message:
        "High vibration alarm generated",

      delay_log:
        "Caster stopped for 18 minutes",

      sensor_summary:
        "Vibration=12.5 mm/s, Temperature=82°C",

      anomaly_alert:
        "Bearing vibration threshold exceeded",

      symptoms:
        "Abnormal noise, high vibration, overheating",

      engineer_query:
        "Why is the bearing failing repeatedly?",

      knowledge_docs: [
        "bearing_replacement.pdf",
        "Continuous Caster Roll Change SOP.pdf"
      ]
    },

    "HSM Gearbox": {

      fault_message:
        "Gearbox temperature alarm",

      delay_log:
        "Rolling mill delay 12 minutes",

      sensor_summary:
        "Oil Temp=95°C",

      anomaly_alert:
        "Lubrication degradation detected",

      symptoms:
        "Gear noise and high temperature",

      engineer_query:
        "What is the root cause?",

      knowledge_docs: [
        "gearbox_manual.pdf",
        "Gearbox Alignment SOP.pdf"
      ]
    },

    "Blast Furnace Motor": {

      fault_message:
        "Motor overload trip",

      delay_log:
        "Production loss 25 minutes",

      sensor_summary:
        "Current=420A",

      anomaly_alert:
        "Motor current exceeded limit",

      symptoms:
        "Overheating and current spike",

      engineer_query:
        "Can the motor fail within a week?",

      knowledge_docs: [
        "Motor Inspection SOP.pdf",
        "Motor Overheating Investigation.pdf"
      ]
    }

  };

  const [equipment, setEquipment] =
    useState("");

  const [symptoms, setSymptoms] =
    useState("");

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

  const [relatedDocs, setRelatedDocs] =
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

      <div className="
      bg-slate-900
      p-6
      rounded-2xl
      border
      border-cyan-700
      mb-8
      ">

        <h2 className="text-2xl text-cyan-400 font-bold mb-4">

          Supported Input Types

        </h2>

        <div className="grid grid-cols-2 gap-2">

          <div>✓ Equipment Delay Logs</div>
          <div>✓ Fault/Error Messages</div>

          <div>✓ Failure Reports</div>
          <div>✓ Incident Records</div>

          <div>✓ Sensor Summaries</div>
          <div>✓ Anomaly Alerts</div>

          <div>✓ Equipment Manuals</div>
          <div>✓ Maintenance SOPs</div>

          <div>✓ Historical Maintenance Records</div>
          <div>✓ Spare Parts Information</div>

          <div>✓ Natural Language Queries</div>
          <div>✓ Multi-turn Troubleshooting</div>

        </div>

      </div>

      {/* Inputs */}

      <div className="space-y-4 mb-8">

        <select

          value={equipment}

          onChange={(e)=>{

            const selected =
              e.target.value;

            setEquipment(selected);

            const data =
              EQUIPMENT_DATA[selected];

            if(data){

              setFaultMessage(
                data.fault_message
              );

              setDelayLog(
                data.delay_log
              );

              setSensorSummary(
                data.sensor_summary
              );

              setAnomalyAlert(
                data.anomaly_alert
              );

              setSymptoms(
                data.symptoms
              );

              setEngineerQuery(
                data.engineer_query
              );

              setRelatedDocs(
                data.knowledge_docs
              );

            }

          }}

          className="
          w-full
          bg-slate-800
          border
          border-slate-700
          p-3
          rounded-xl
          "
        >

          <option value="">
            Select Equipment
          </option>

          {
            Object.keys(EQUIPMENT_DATA).map(
              equipment => (

                <option
                  key={equipment}
                  value={equipment}
                >
                  {equipment}
                </option>

              )
            )
          }

        </select>

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

        <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-800">
          {
            relatedDocs.length > 0 && (

              <div className="mt-4">

                <div className="text-green-400 font-bold mb-2">

                  AI Recommended Knowledge Sources

                </div>

                {
                  relatedDocs.map(
                    (doc,index)=>(

                      <div
                        key={index}
                        className="
                        bg-slate-800
                        p-2
                        rounded
                        mb-2
                        "
                      >

                        📄 {doc}

                      </div>

                    )
                  )
                }

              </div>

            )
          }

          <h2 className="text-xl font-bold text-cyan-400 mb-4">

            Knowledge Documents

          </h2>

          <p className="text-slate-400 mb-4">

            Upload Manuals, SOPs, Failure Reports,
            Maintenance Records and Spare Information

          </p>

          <input
            type="file"
            multiple
            onChange={handleFiles}
            className="
            w-full
            bg-slate-800
            p-3
            rounded-xl
            "
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

      <div className="flex gap-4 mb-8">

        <button
          onClick={analyzeEquipment}
          disabled={loading}
          className="
          bg-cyan-600
          hover:bg-cyan-500
          px-8
          py-3
          rounded-xl
          font-bold
          "
        >

          {loading
            ? "Analyzing..."
            : "Run AI Analysis"}

        </button>

        <button
          onClick={downloadReport}
          className="
          bg-green-600
          hover:bg-green-500
          px-8
          py-3
          rounded-xl
          font-bold
          "
        >

          Download Report

        </button>

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
