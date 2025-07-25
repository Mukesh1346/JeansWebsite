"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import chart from "./Franchise.module.css";

const data = [
  { name: "Anibhavi Creations", value: 400000 },
  { name: "Brand A.Trends", value: 3000000 },
  { name: "Brand Styl", value: 2000000 },
  { name: "Brand XYZ", value: 4000000 },
];

const colors = ["url(#gradBlue)", "url(#gradBlue)", "url(#gradBlue)", "url(#gradBlue)"];

export default function FranchiseChart() {
  return (
    <section className={`container ${chart.chartSection}`}>
      {/* Title */}
      <h2 className={chart.badgeTitle}>
        Why Choose <span>Anibhavi Creations</span>{" "}?
      </h2>

      <div className="row align-items-center mt-4">
        {/* Left Info Card */}
        <div className="col-md-4 mb-4">
          <div className={chart.infoCard}>
            <h4>Lowest Industry Investment</h4>
            <p>
Humne entry barrier ko
kam rakha hai taaki har
passionate entrepreneur
apne business ka sapna
poora kar sake. Dusre bade
brands ke muqable hamari
franchise fee kaafi kam
hai.
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="col-md-8">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} layout="vertical" margin={{ left: 60, top: 10, bottom: 10 }}>
              <defs>
                <linearGradient id="gradBlue" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#004aad" />
                  <stop offset="100%" stopColor="#00d4ff" />
                </linearGradient>
              </defs>
              <XAxis type="number" tick={{ fill: "#666", fontSize: 12 }} />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fill: "#222", fontSize: 14, fontWeight: 500 }}
              />
              <Tooltip
                contentStyle={{ borderRadius: 8, fontSize: 14 }}
                labelStyle={{ fontWeight: "bold" }}
              />
              <Bar dataKey="value" radius={[8, 8, 8, 8]}>
                {data.map((_, index) => (
                  <Cell key={index} fill={colors[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
