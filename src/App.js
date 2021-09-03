import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { incrementAsync, increase } from "./Redux/count/count.action";
import Button from "@material-ui/core/Button";
import { Alert } from '@material-ui/lab';
import { Grid, Tooltip, CircularProgress } from "@material-ui/core";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <Grid container justifyContent="center" direction="column" alignItems="center">
        {
          count.loading ? <CircularProgress /> : <Alert severity="success">Counter : {count.count}</Alert>
        }
        <Grid item>

          <Grid item container justifyContent="center" alignItems="center">

            <Grid item style={{ margin: "20px" }}>
              <Tooltip title="Count">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => dispatch(incrementAsync())}
                >
                  asynchronous increase
                </Button>
              </Tooltip>
            </Grid>

            <Grid item style={{ margin: "20px" }}>
              <Tooltip title="Count">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => dispatch(increase(10, false))}
                >
                  synchronous increase
                </Button>
              </Tooltip>
            </Grid>

          </Grid>

        </Grid>
      </Grid>
    </>
  );
}

export default App;
