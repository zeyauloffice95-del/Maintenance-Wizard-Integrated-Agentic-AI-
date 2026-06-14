export default function KPIcard({
  title,
  value,
  color,
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <p className="text-zinc-400 text-sm">
        {title}
      </p>

      <h2
        className={`text-4xl font-bold mt-3 ${color}`}
      >
        {value}
      </h2>

    </div>
  );
}
