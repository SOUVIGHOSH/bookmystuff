import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faCalendarDay,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useReducer } from "react";
import weekReducer from "../../reducer/weekReducer";
import getWeek from "../../util/dateUtil";

export default function Weekpicker() {
  const [state, dispatch] = useReducer(weekReducer, new Date(), getWeek);
  console.log(state);
  return (
    <div className="weekpicker-main">
      <div className="weekpicker-container">
        <div
          className="bookables-button"
          onClick={() => dispatch({ type: "PREV" })}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Prev</span>
        </div>
        <div
          className="bookables-button"
          onClick={() => dispatch({ type: "TODAY" })}
        >
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>Today</span>
        </div>
        <div
          className="bookables-button"
          onClick={() => dispatch({ type: "NEXT" })}
        >
          <FontAwesomeIcon icon={faChevronRight} />
          <span>Next</span>
        </div>
      </div>
      <div className="weekdetails">{`${state.start.toDateString()} - ${state.end.toDateString()}`}</div>
    </div>
  );
}
