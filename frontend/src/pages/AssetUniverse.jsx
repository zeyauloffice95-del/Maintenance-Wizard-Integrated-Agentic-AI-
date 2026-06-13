import { useEffect, useState } from "react";
import axios from "axios";

export default function AssetUniverse() {

  const [assets, setAssets] = useState([]);

  

  useEffect(() => {

    axios
      .get("http://127.0.0.1:8000/assets")
      .then((res) => setAssets(res.data))
      .catch(console.error);

  }, []);

  

  return (

    <div className="p-10 text-white">

      <h1 className="text-4xl font-bold text-cyan-400 mb-6">
        Asset Universe
      </h1>

      <table className="w-full">

        <thead>

          <tr className="text-left border-b border-slate-700">
            <th>Name</th>
            <th>Health</th>
            <th>Risk</th>
          </tr>

        </thead>

        <tbody>

          {assets.map((asset,index)=>(
            <tr key={index}>

              <td>{asset.name}</td>
              <td>{asset.health}%</td>
              <td>{asset.risk}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  );
}
