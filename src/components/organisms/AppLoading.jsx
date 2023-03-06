import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function AppLoading(props) {
  return (
    <div className="center">
      <CircularProgress color="inherit" size={96} />
      {props.message && <p>{props.message}</p>}
    </div>
  );
}
