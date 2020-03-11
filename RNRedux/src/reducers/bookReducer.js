import uuidV1 from 'uuid/v1';
import {ADD_BOOK, REMOVE_BOOK} from '../actions';

// 초기 상태 만들기
const initialState = {
  books: [{name: 'East of Eden', author: 'John Steinbeck', id: uuidV1()}]
};

// state 인수의 기본 값을 initialState로 지정함
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state.books, action.book]
      };
    case REMOVE_BOOK: {
      const index = state.books.findIndex(book => book.id === action.book.id);
      return {
        books: [...state.books.slice(0, index), ...state.books.slice(index + 1)]
      };
    }
    default:
      return state;
  }
};
export default bookReducer;
