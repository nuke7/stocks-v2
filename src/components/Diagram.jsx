/* eslint-disable no-unused-vars */
import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";

export const Diagram = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});

  const fetchData = async () => {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=VQXHRFJAACVTHD2M`
    );
    if (response) {
      const resp = await response.json();
      console.log(Object.keys(resp["Time Series (Daily)"]).slice(0, 30));
      setData(resp);
    } else {
      setData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let openValues = Object.values(data["Time Series (Daily)"])
    .slice(0, 10)
    .map((val) => val["1. open"]);

  return (
    <div>
      {data !== null ? (
        <Line
          data={{
            labels: Object.keys(data["Time Series (Daily)"]).slice(0, 10),
            datasets: [
              {
                label: "Opening Price",
                data: openValues,
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 0.2)",
              },
            ],
          }}
          height={400}
          width={600}
        />
      ) : (
        "No data yet"
      )}
    </div>
  );
};
