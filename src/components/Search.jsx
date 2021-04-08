import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

import SearchIcon from "@material-ui/icons/Search";
import { StockContext } from "../Context";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export const Search = () => {
  const classes = useStyles();
  const { value1, value2, value3 } = useContext(StockContext);
  const [search, setSearch] = value2;
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = value1;
  // eslint-disable-next-line no-unused-vars
  const [stock, setStock] = value3;
  const [freq, setFreq] = useState("daily");

  const fetchData = async () => {
    if (search.length !== 0) {
      setStock(search);
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${search}&apikey=VQXHRFJAACVTHD2M`
      );
      if (response) {
        const resp = await response.json();
        console.log(resp["Error Message"]);
        /* console.log(Object.keys(resp["Time Series (Daily)"]).slice(0, 30)); */
        if (resp["Error Message"]) {
          alert(resp["Error Message"]);
          setSearch("");
          setData(null);
        } else {
          setData(resp);
          setSearch("");
        }
      } else {
        setData(null);
        setSearch("");
      }
    } else {
      setSearch("");
      alert("cant search with an empty search bar");
    }
  };

  return (
    <form
      className={classes.root}
      onSubmit={(e) => {
        e.preventDefault();
      }}
      autoComplete="off"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem auto",
      }}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Frequency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={freq}
          onChange={(e) => {
            setFreq(e.target.value);
            console.log(e.target.value);
          }}>
          <MenuItem value={"daily"}>Daily</MenuItem>
          <MenuItem value={"weekly"}>Weekly</MenuItem>
          <MenuItem value={"monthly"}>Monthly</MenuItem>
        </Select>
        <FormHelperText>Select data-point frequency</FormHelperText>
      </FormControl>
      <TextField
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            fetchData();
          }
        }}
        value={search}
        id="standard-search"
        label="Enter Symbol"
        type="search"
        helperText="search for a securities ticker"
      />
      <Button
        onClick={() => {
          console.log(search);

          fetchData();
        }}
        variant="outlined"
        color="primary"
        className={classes.button}
        endIcon={<SearchIcon />}>
        search
      </Button>
    </form>
  );
};
