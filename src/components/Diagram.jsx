/* eslint-disable no-unused-vars */
import { Line } from "react-chartjs-2";
import React, { useState, useEffect, useContext } from "react";
import { StockContext } from "../Context";

export const Diagram = () => {
  const { value1, value2 } = useContext(StockContext);
  const [search, setSearch] = value2;
  const [data, setData] = value1;

  /*   const fetchData = async () => {
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
  }, []); */

  /*   let openValues = Object.values(data["Time Series (Daily)"])
    .slice(0, 10)
    .map((val) => val["1. open"]); */

  return (
    <div>
      {data !== null ? (
        <Line
          data={{
            labels: Object.keys(data["Time Series (Daily)"]).slice(0, 20).reverse(),
            datasets: [
              {
                label: "Opening Price",
                data: Object.values(data["Time Series (Daily)"])
                  .slice(0, 20)
                  .map((val) => val["1. open"])
                  .reverse(),
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
        <div style={{ textAlign: "center" }}>
          <h3>No data to show, yet</h3>
          <span>Search for something above</span>
        </div>
      )}
    </div>
  );
};
