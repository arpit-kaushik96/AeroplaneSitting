import { React, useRef } from "react";
import "../styles.css";
import { connect } from "react-redux";
import { updateInput } from "../Redux/actions.js";

const Input = (props) => {
  const inputRef = useRef(null);

  /*
  This function will update the entered input in store by dispatching updateInput action.
  */
  const buttonPress = () => {
    let enteredValue = inputRef.current.value;
    if (Number(enteredValue) < 11 || Number(enteredValue) > 200) {
      alert("Enter between 11 and 200");
    } else {
      props.updateInput(enteredValue);
    }
  };

  return (
    <div className="Input">
      <input
        className="input-box"
        placeholder="Number of passengers"
        ref={inputRef}
        type="text"
      />
      <button className="button" onClick={() => buttonPress()} type="button">
        Click here to calculate seating!
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateInput: (data) => dispatch(updateInput(data))
  };
};

const mapStateToProps = (state) => {};
export default connect(mapStateToProps, mapDispatchToProps)(Input);
