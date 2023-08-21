import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getOrders } from "./MainAction";
import SearchAndSelect from "./SearchAndSelect";

function Dashboard(props) {
  const [inputValue, setInputValue] = useState("");
 
  const newData = props.post;
  
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    props.getOrders(inputValue);
  };

  return (
    <>
      <div>
        {/* <input
          type="text"
          name="postcode"
          placeholder="search"
          value={inputValue}
          onChange={handleInputChange}
        /> */}
        <SearchAndSelect />
      </div>
    </>
  );
}

const mapStateToProps = ({ main }) => ({
  post: main.post,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getOrders }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
