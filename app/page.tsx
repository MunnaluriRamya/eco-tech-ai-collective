"use client";

import { useState } from "react";

export default function Home() {
  const [electricity, setElectricity] = useState("");
  const [travel, setTravel] = useState("");
  const [fuel, setFuel] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [level, setLevel] = useState<"Low" | "Medium" | "High" | null>(null);
  const [tips, setTips] = useState<string[]>([]);

  const calculateFootprint = () => {
    const total =
      Number(electricity) * 0.82 +
      Number(travel) * 0.21 +
      Number(fuel) * 2.31;

    setResult(total);

    if (total < 100) {
      setLevel("Low");
      setTips([
        "Excellent eco-friendly lifestyle 🌿",
        "Continue using energy-efficient appliances",
        "Encourage others to follow sustainable habits",
      ]);
    } else if (total < 200) {
      setLevel("Medium");
      setTips([
        "Reduce unnecessary electricity usage",
        "Prefer public or shared transport",
        "Switch to LED bulbs and save energy",
      ]);
    } else {
      setLevel("High");
      setTips([
        "Reduce fuel-based travel where possible",
        "Use energy-efficient appliances",
        "Consider renewable energy sources like solar",
      ]);
    }
  };

  return (
    <main className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="bg-white max-w-xl w-full p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <h1 className="text-3xl font-bold text-green-700 text-center">
          🌱 ECO TECH AI COLLECTIVE
        </h1>
        <p className="text-center text-gray-600 mt-2 mb-6">
          Carbon Footprint Awareness Tool
        </p>

        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <label className="font-medium">
              Monthly Electricity Usage (units)
            </label>
            <input
              type="number"
              value={electricity}
              onChange={(e) => setElectricity(e.target.value)}
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div>
            <label className="font-medium">
              Weekly Travel Distance (km)
            </label>
            <input
              type="number"
              value={travel}
              onChange={(e) => setTravel(e.target.value)}
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div>
            <label className="font-medium">
              Monthly Fuel Consumption (liters)
            </label>
            <input
              type="number"
              value={fuel}
              onChange={(e) => setFuel(e.target.value)}
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <button
            onClick={calculateFootprint}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Calculate Environmental Impact
          </button>
        </div>

        {/* Result + Tips */}
        {result !== null && level && (
          <div className="mt-6 p-5 rounded-lg border">
            <p className="text-center font-semibold text-gray-700">
              Estimated Monthly Carbon Emissions
            </p>

            <p className="text-center text-2xl font-bold text-green-700 mt-2">
              {result.toFixed(2)} kg CO₂
            </p>

            <p className="text-center mt-2">
              Impact Level:{" "}
              <span
                className={`font-semibold ${
                  level === "Low"
                    ? "text-green-600"
                    : level === "Medium"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {level}
              </span>
            </p>

            <div className="mt-4">
              <p className="font-semibold text-gray-700 mb-2">
                🌍 Recommended Eco-Friendly Tips
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                {tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-6 text-center">
          This tool helps individuals understand how daily lifestyle choices
          impact the environment and promotes sustainable living.
        </p>
      </div>
    </main>
  );
}

