import countType from "./count.type";
const init = {
  count: 0,
  loading: false,
};

const countReducer = (count = init, action) => {
  switch (action.type) {
    case countType.INCREASE: {
      return {
        loading: action.payload.loading,
        count: count.count + action.payload.count,
      };
    }

    default:
      return count;
  }
};

export default countReducer;
