import { Outlet, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect, useState } from "react";
import SignIn from "../Container/Auth/SignIn";

const PrivateRoutes = (props) => {
  const [isConnected,setConnected] = useState(false);
  return isConnected  ? (
    <Outlet />
  ) : (
    <SignIn />
    // <Navigate to="/signin" />
  );
};

const mapStateToProps = ({  }) => ({
 
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({  }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);
