/* eslint-disable no-unused-vars */
import { Line } from "react-chartjs-2";
import React, { useState, useEffect, useContext } from "react";
import { StockContext } from "../Context";
import Button from "@material-ui/core/Button";

export const Diagram = () => {
  const { value1, value2, value3 } = useContext(StockContext);

  const [data, setData] = value1;
  const [stock, setStock] = value3;
  const [days, setDays] = useState(30);

  return (
    <div>
      {data !== null && <h3>Historical data for {stock}</h3>}
      {data !== null && (
        <Button
          onClick={() => {
            setDays(10);
          }}
          variant="outlined"
          color="primary">
          10 days
        </Button>
      )}
      {data !== null ? (
        <Line
          data={{
            labels: Object.keys(data["Time Series (Daily)"]).slice(0, 20).reverse(),
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
      ) : (
        <div style={{ textAlign: "center" }}>
          <h3>No data to show, yet</h3>
          <span>Search for something above</span>
        </div>
      )}
    </div>
  );
};
