import countType from "./count.type";
import axios from "axios";

const increase = (val, loading) => {
  return {
    type: countType.INCREASE,
    payload: { count: val, loading: loading },
  };
};

let num = 0;

function incrementAsync() {
  return async (dispatch, getState) => {
    const { count } = getState();
    dispatch(increase(+num, true));
    await axios
      .get("https://fakestoreapi.com/users")
      .then((data) => (num = data.data[0].address.number))
      .catch((e) => {
        console.log(e.message);
      });
    dispatch(increase(+num, false));
  };
}

export { incrementAsync, increase };
