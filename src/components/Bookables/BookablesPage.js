import { useReducer } from "react";
import data from "../../data/static.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import reducer from "../../reducer/reducer";

const { bookables } = data;
export default function BookablesPage() {
  const initialState = {
    bookableIndex: 0,
    group: "Kit",
    filteredBookables: bookables.filter((b) => b.group === "Kit"),
    showDetails: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { bookableIndex, group, filteredBookables, showDetails } = state;
  // const [bookableIndex, setBookableIndex] = useState(0);
  // const [group, setGroup] = useState("Kit");
  // const [filteredBookables, setFilteredBookables] = useState(
  //   bookables.filter((b) => b.group === group)
  // );
  // const [showDetails, setShowDetails] = useState(false);
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const onNext = () => {
    dispatch({
      type: "SET_NEXT_BOOKABLE_INDEX",
    });
    //setBookableIndex((prev) => (prev + 1) % filteredBookables.length);
  };

  const groupChangeHandler = (newValue) => {
    dispatch({
      type: "CHANGE_GROUP",
      payload: { group: newValue },
    });
    // setBookableIndex(0);
    // setGroup(newValue);
    // setFilteredBookables(bookables.filter((b) => b.group !== group));
    // setShowDetails(false);
  };
  return (
    <div className="bookables-container">
      <ul className="bookables">
        <select
          defaultValue={group}
          onChange={(event) => groupChangeHandler(event.target.value)}
        >
          {[...new Set(bookables.map((item) => item.group))].map((group) => (
            <option value={group}>{group}</option>
          ))}
        </select>
        {filteredBookables.map((b, id) => (
          <li
            key={id}
            className={id === bookableIndex ? "selected" : null}
            onClick={() =>
              dispatch({
                type: "SET_BOOKABLE_INDEX",
                payload: { id },
              })
            }
          >
            {b.title}
          </li>
        ))}
        <li className="bookables-button" onClick={onNext}>
          <FontAwesomeIcon icon={faArrowRight} />
          <span>Next</span>
        </li>
      </ul>
      <div className="bookable-details">
        <div className="bookable-details__header">
          {filteredBookables[bookableIndex].title}
          <div>
            <input
              type="checkbox"
              checked={showDetails}
              name="showDetails"
              id="showDetails"
              onChange={() => dispatch({ type: "TOGGLE_SHOW_DETAILS" })}
            />
            <label for="showDetails">Show details</label>
          </div>
        </div>
        <div className="bookable-details__description">
          <div>{filteredBookables[bookableIndex].notes}</div>
          {showDetails && (
            <div className="bookable-details__details">
              <h2>Availability</h2>
              <ul>
                <p>
                  {" "}
                  {filteredBookables[bookableIndex].days.map((day) => (
                    <li>{weekdays[day]}</li>
                  ))}{" "}
                </p>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
