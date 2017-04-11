import React, { PureComponent } from 'react'
import ReactSVG from 'react-svg'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './Book.css'

export default class Book extends PureComponent {
  static get propTypes () {
    return {
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
      onClick: PropTypes.func.isRequired
    }
  }

  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.onClick(this.props.id)
  }

  render () {
    const {
      title,
      selected
    } = this.props

    const className = classNames({
      [css.book]: true,
      [css.selected]: selected
    })

    return (
      <button className={className} onClick={this.handleClick}>
        <span className={css.title}>
          {title}
        </span>
        <ReactSVG className={css.icon} path='/app/components/Book/icon.svg' />
      </button>
    )
  }
}
