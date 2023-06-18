import { useState } from "react";
import data from "../../data/static.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const { bookables } = data;
export default function BookablesPage() {
  const [bookableIndex, setBookableIndex] = useState(0);
  const [group, setGroup] = useState("Kit");
  const [filteredBookables, setFilteredBookables] = useState(
    bookables.filter((b) => b.group === group)
  );
  const onNext = () => {
    setBookableIndex((prev) => (prev + 1) % filteredBookables.length);
  };

  const groupChangeHandler = (newValue) => {
    setBookableIndex(0);
    setGroup(newValue);
    setFilteredBookables(bookables.filter((b) => b.group !== group));
  };
  return (
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
          onClick={() => setBookableIndex(id)}
        >
          {b.title}
        </li>
      ))}
      <li className="bookables-next" onClick={onNext}>
        <FontAwesomeIcon icon={faArrowRight} />
        <span>Next</span>
      </li>
    </ul>
  );
}
