import { connect } from "react-redux";
import {
  incrementAction,
  decrementAction,
  incrementAsyncAction,
} from "../redux/count_action";
import App from "../App";

/* const mapStateToProps = (state) => {
  return { count: state };
  };
  
// mapDispatchToProps是方法
const mapDispatchToProps = (dispatch) => {
  return {
    jia: (data) => dispatch(incrementAction(data)),
    jian: (data) => dispatch(decrementAction(data)),
    jiaAsync: (data, time) => dispatch(incrementAsyncAction(data, time)),
  };
}; */

// mapDispatchToProps简写
export default connect((state) => ({ count: state }), {
  jia: incrementAction,
  jian: decrementAction,
  jiaAsync: incrementAsyncAction,
})(App);
