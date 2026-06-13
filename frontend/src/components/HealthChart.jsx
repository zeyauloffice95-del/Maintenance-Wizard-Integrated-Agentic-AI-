import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Healthy", value: 75 },
  { name: "Warning", value: 18 },
  { name: "Critical", value: 7 },
];

const COLORS = [
  "#10B981",
  "#F59E0B",
  "#EF4444",
];

export default function HealthChart() {
  return (
    <div className="bg-slate-800 p-5 rounded-xl h-[350px]">
      <h2 className="mb-4 text-lg font-semibold">
        Equipment Health
      </h2>

      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
