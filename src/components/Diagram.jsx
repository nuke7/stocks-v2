/* eslint-disable no-unused-vars */
import { Line } from "react-chartjs-2";
import React, { useState, useContext } from "react";
import { StockContext } from "../Context";
import Button from "@material-ui/core/Button";

export const Diagram = () => {
  const { value1, value2, value3, value4, value5 } = useContext(StockContext);

  const [data, setData] = value1;
  const [stock, setStock] = value3;
  const [days, setDays] = useState(30);
  const [freq, setFreq] = value4;
  const [loading, setLoading] = value5;

  return (
    <div>
      {data !== null && !loading && <h3>Historical data for {stock}</h3>}
      {data !== null && !loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly" /* flexWrap: "wrap" */,
            marginBottom: "1rem",
          }}>
          <Button
            onClick={() => {
              setDays(10);
            }}
            variant="outlined"
            color="primary">
            Latest 10 datapoints
          </Button>
          <Button
            onClick={() => {
              setDays(20);
            }}
            variant="outlined"
            color="primary">
            Latest 20 datapoints
          </Button>
          <Button
            onClick={() => {
              setDays(30);
            }}
            variant="outlined"
            color="primary">
            Latest 30 datapoints
          </Button>
        </div>
      )}
      {data !== null && !loading && freq === "daily" ? (
        <Line
          data={{
            labels: Object.keys(data["Time Series (Daily)"]).slice(0, days).reverse(),
            datasets: [
              {
                label: "Opening Price",
                data: Object.values(data["Time Series (Daily)"])
                  .slice(0, days)
                  .map((val) => val["1. open"])
                  .reverse(),
                fill: false,
                backgroundColor: "rgb(148, 236, 236)",
                borderColor: "rgb(75, 192, 192)",
              },
              {
                label: "Closing Price",
                data: Object.values(data["Time Series (Daily)"])
                  .slice(0, days)
                  .map((val) => val["4. close"])
                  .reverse(),
                fill: false,
                backgroundColor: "rgb(253, 54, 97)",
                borderColor: "rgb(241, 126, 151)",
              },
              {
                label: "Daily Lowest Price",
                data: Object.values(data["Time Series (Daily)"])
                  .slice(0, days)
                  .map((val) => val["3. low"])
                  .reverse(),
                fill: false,
                backgroundColor: "rgb(54, 67, 253)",
                borderColor: "rgb(159, 165, 247)",
              },
              {
                label: "Daily Highest Price",
                data: Object.values(data["Time Series (Daily)"])
                  .slice(0, days)
                  .map((val) => val["2. high"])
                  .reverse(),
                fill: false,
                backgroundColor: "rgb(248, 214, 21)",
                borderColor: "rgb(255, 221, 29)",
              },
            ],
          }}
          options={{
            maintainAspectRatio: true,
          }}
          height={400}
          width={600}
        />
      ) : data !== null && !loading && freq === "weekly" ? (
        <Line
          data={{
            labels: Object.keys(data["Weekly Time Series"]).slice(0, days).reverse(),
            datasets: [
              {
                label: "Opening Price",
                data: Object.values(data["Weekly Time Series"])
                  .slice(0, days)
                  .map((val) => val["1. open"])
                  .reverse(),
                fill: false,
                backgroundColor: "rgb(148, 236, 236)",
                borderColor: "rgb(75, 192, 192)",
              },
              {
                label: "Closing Price",
                data: Object.values(data["Weekly Time Series"])
                  .slice(0, days)
                  .map((val) => val["4. close"])
                  .reverse(),
                fill: false,
                backgroundColor: "rgb(253, 54, 97)",
                borderColor: "rgb(241, 126, 151)",
              },
              {
                label: "Daily Lowest Price",
                data: Object.values(data["Weekly Time Series"])
                  .slice(0, days)
                  .map((val) => val["3. low"])
                  .reverse(),
                fill: false,
                backgroundColor: "rgb(54, 67, 253)",
                borderColor: "rgb(159, 165, 247)",
              },
              {
                label: "Daily Highest Price",
                data: Object.values(data["Weekly Time Series"])
                  .slice(0, days)
                  .map((val) => val["2. high"])
                  .reverse(),
                fill: false,
                backgroundColor: "rgb(248, 214, 21)",
                borderColor: "rgb(255, 221, 29)",
              },
            ],
          }}
          options={{
            maintainAspectRatio: true,
          }}
          height={400}
          width={600}
        />
      ) : data !== null && !loading && freq === "monthly" ? (
        <Line
          data={{
            labels: Object.keys(data["Monthly Time Series"]).slice(0, days).reverse(),
            datasets: [
              {
                label: "Opening Price",
                data: Object.values(data["Monthly Time Series"])
                  .slice(0, days)
                  .map((val) => val["1. open"])
                  .reverse(),
                fill: false,
                backgroundColor: "rgb(148, 236, 236)",
                borderColor: "rgb(75, 192, 192)",
              },
              {
                label: "Closing Price",
                data: Object.values(data["Monthly Time Series"])
                  .slice(0, days)
                  .map((val) => val["4. close"])
                  .reverse(),
                fill: false,
                backgroundColor: "rgb(253, 54, 97)",
                borderColor: "rgb(241, 126, 151)",
              },
              {
                label: "Daily Lowest Price",
                data: Object.values(data["Monthly Time Series"])
                  .slice(0, days)
                  .map((val) => val["3. low"])
                  .reverse(),
                fill: false,
                backgroundColor: "rgb(54, 67, 253)",
                borderColor: "rgb(159, 165, 247)",
              },
              {
                label: "Daily Highest Price",
                data: Object.values(data["Monthly Time Series"])
                  .slice(0, days)
                  .map((val) => val["2. high"])
                  .reverse(),
                fill: false,
                backgroundColor: "rgb(248, 214, 21)",
                borderColor: "rgb(255, 221, 29)",
              },
            ],
          }}
          options={{
            maintainAspectRatio: true,
          }}
          height={400}
          width={600}
        />
      ) : !loading ? (
        <div style={{ textAlign: "center" }}>
          <h3>No data to show, yet</h3>
          <span>Search for something above</span>
        </div>
      ) : (
        <h3> hold on, loading data...</h3>
      )}
    </div>
  );
};
