export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      return [...state, Object.assign({}, action.courseReducer)];

    default:
      return state;
  }
}