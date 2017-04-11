import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectBook } from '../../actions/books'
import Book from '../../components/Book'
import History from '../../components/History'
import css from './Root.css'

function Root (props) {
  const {
    books,
    selectedBook,
    bookHistory
  } = props

  return (
    <main className={css.main}>
      <div className={css.left}>
        {books.map(({id, title}) => <Book key={id} id={id} selected={id === selectedBook} title={title} onClick={props.selectBook} />)}
      </div>
      <div>
        <History bookHistory={bookHistory} />
      </div>
    </main>
  )
}

Root.propTypes = {
  books: PropTypes.array.isRequired,
  selectBook: PropTypes.func.isRequired,
  selectedBook: PropTypes.number.isRequired,
  bookHistory: PropTypes.array.isRequired
}

function mapStateToProps (state) {
  state = state.toJS()
  const {
    books,
    selectedBook,
    bookHistory,
    readers
  } = state

  return {
    books,
    selectedBook,
    bookHistory: getBookHistory(selectedBook, bookHistory, readers)
  }
}

function getBookHistory (bookId, allBooksHistory, readers) {
  const bookHistory = allBooksHistory[bookId]
  const result = []

  if (bookHistory) {
    Object.values(bookHistory).forEach(({readerId, date}) => {
      const reader = readers.find(({id}) => id === readerId)

      if (reader) {
        result.push({
          reader: reader.name,
          date
        })
      }
    })
  }

  return result
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
