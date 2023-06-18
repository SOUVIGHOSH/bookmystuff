import getWeek, { addDays } from "../util/dateUtil";

export default function weekReducer(state, action) {
  switch (action.type) {
    case "TODAY":
      return getWeek(new Date());
    case "PREV":
      return getWeek(addDays(state.date, -7));
    case "NEXT":
      return getWeek(addDays(state.date, 7));
    default:
      return {};
  }
}
