import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { incrementAsync } from "./Redux/count/count.action";
import Button from "@material-ui/core/Button";
import { Grid, Tooltip, CircularProgress } from "@material-ui/core";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Alert severity="success">This is a success alert — check it out!</Alert>
        <Grid item>
          <CircularProgress />
          <Tooltip title="Count">
            <Button
              variant="contained"
              color="primary"
              onClick={() => dispatch(incrementAsync())}
            >
              {count.count}
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
