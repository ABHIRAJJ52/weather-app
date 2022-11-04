import React from "react";
import { useState } from "react";
import Weather from "./components/Weather";

export default function Home() {
  const [wData, setWData] = useState();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${e.target.city.value},&${e.target.country.value}&appId=a8cd6eb1c3f1355b090db1fe37eacfb2`
    );
    const result = await res.json();
    console.log(result);
    setWData(result);
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-black bg-opacity-50">
      <div className="md:w-[600px] w-[90%] border bg-opacity-25 backdrop-filter backdrop-blur-lg rounded-xl p-3">
        <p className="text-3xl text-white font-extrabold text-center mb-5">
          Weather App
        </p>
        <form
          className="w-full grid gap-6 mb-6 md:grid-cols-2"
          onSubmit={onSubmit}
        >
          <div>
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-bold text-gray-200"
            >
              City name
            </label>
            <input
              type="text"
              id="city"
              className="bg-transparent border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="enter the city name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block mb-2 text-sm font-bold text-gray-200"
            >
              Country name
            </label>
            <input
              type="text"
              id="country"
              className="bg-transparent border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="enter the country name"
              required
            />
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <button
              type="submit"
              className={`inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-white rounded-md shadow bg-orange-500 hover:bg-orange-800 ${
                loading ??
                "cursor-not-allowed transition duration-150 ease-in-out"
              }`}
            >
              {loading && (
                <svg
                  className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {loading ? "Loading..." : "Search Now"}
            </button>
          </div>
        </form>
      </div>
      <Weather wData={wData} />
    </div>
  );
}
