import { React, useEffect } from "react";
import "../styles.css";
import { connect } from "react-redux";

/* 
This component will render column name with the grid view of seats.Every grid(seat)
is aligned with its correct seat number according to problem statement. When the 
passengers count gets updated, itreation happens acc. to the count and place the passengers
to their correct seat nuber.
*/

const SittingColumn = (props) => {
  useEffect(() => {
    resetPassengers();
    arrangePassengers(props.passengersCount);
  });

  /* 
This function will reset innerhtml of all grids after any re-render of this component.
*/
  const resetPassengers = () => {
    for (let i = 1; i <= 200; i++) {
      document.getElementById(i).innerHTML = "";
    }
  };

  /* 
This function will set innerhtml of grid according to seat no.
*/
  const arrangePassengers = (count) => {
    for (let i = 1; i <= count; i++) {
      document.getElementById(i).innerHTML = i;
    }
  };

  return (
    <div className="SittingColumn">
      <div className="ColumnContainer">{props.columnName}</div>
      {props.columnName === "Column A" ? (
        <div className="grid-container-column3">
          {[...Array(60)].map((item, index) => {
            return (
              <div
                id={
                  index % 3 === 0
                    ? (index / 3) * 10 + 5
                    : index % 3 === 1
                    ? ((index - 1) / 3) * 10 + 1
                    : ((index - 2) / 3) * 10 + 7
                }
                style={{
                  backgroundColor:
                    index % 3 === 0
                      ? "skyblue"
                      : index % 3 === 1
                      ? "tan"
                      : "lightgreen"
                }}
                className="grid-item"
              ></div>
            );
          })}
        </div>
      ) : props.columnName === "Column B" ? (
        <div className="grid-container-column4">
          {[...Array(80)].map((item, index) => {
            return (
              <div
                id={
                  index % 4 === 0
                    ? (index / 4) * 10 + 8
                    : index % 4 === 1
                    ? ((index - 1) / 4) * 10 + 2
                    : index % 4 === 2
                    ? ((index - 2) / 4) * 10 + 3
                    : ((index - 3) / 4) * 10 + 9
                }
                style={{
                  backgroundColor:
                    index % 4 === 0
                      ? "lightgreen"
                      : index % 4 === 1 || index % 4 === 2
                      ? "tan"
                      : "lightgreen"
                }}
                class="grid-item"
              ></div>
            );
          })}
        </div>
      ) : (
        <div className="grid-container-column3">
          {[...Array(60)].map((item, index) => {
            return (
              <div
                id={
                  index % 3 === 0
                    ? (index / 3) * 10 + 10
                    : index % 3 === 1
                    ? ((index - 1) / 3) * 10 + 4
                    : ((index - 2) / 3) * 10 + 6
                }
                style={{
                  backgroundColor:
                    index % 3 === 0
                      ? "lightgreen"
                      : index % 3 === 1
                      ? "tan"
                      : "skyblue"
                }}
                class="grid-item"
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => ({
  passengersCount: state.mainReducer.numberOfPassengers
});
export default connect(mapStateToProps, mapDispatchToProps)(SittingColumn);
