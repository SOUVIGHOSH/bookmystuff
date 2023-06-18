import data from "../data/static.json";
const { bookables } = data;

export default function reducer(state, action) {
  switch (action.type) {
    case "SET_NEXT_BOOKABLE_INDEX":
      return {
        ...state,
        bookableIndex:
          (state.bookableIndex + 1) % state.filteredBookables.length,
      };
    case "SET_BOOKABLE_INDEX":
      console.log({
        ...state,
        bookableIndex: action.payload.id,
      });
      return {
        ...state,
        bookableIndex: action.payload.id,
      };
    case "CHANGE_GROUP":
      return {
        ...state,
        bookableIndex: 0,
        group: action.payload.group,
        filteredBookables: bookables.filter(
          (b) => b.group === action.payload.group
        ),
        showDetails: false,
      };
    case "TOGGLE_SHOW_DETAILS":
      return {
        ...state,
        showDetails: !state.showDetails,
      };
    default:
      return {};
  }
}
