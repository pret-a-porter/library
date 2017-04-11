import { fromJS } from 'immutable'
import {types} from '../actions/books'

const initialState = fromJS({
  selectedBook: 1,
  books: [{
    id: 1,
    title: 'book1',
    takenBy: 2
  }, {
    id: 2,
    title: 'book2'
  }],
  readers: [{
    id: 1,
    name: 'name1'
  }, {
    id: 2,
    name: 'name2'
  }],
  bookHistory: {
    '1': [{
      readerId: 1,
      date: '20-02-2016'
    }]
  }
})

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SELECT_BOOK: return state.set('selectedBook', action.id)
    default:
      return state
  }
}
