import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import css from './History.css'

export default class History extends PureComponent {
  static get propTypes () {
    return {
      bookHistory: PropTypes.array.isRequired
    }
  }

  componentDidMount () {
    const animationStartEvent = whichAnimationStartEvent()
    const animationEndEvent = whichAnimationEndEvent()

    animationEndEvent && document.addEventListener(animationEndEvent, (e) => {
      console.log('animation end')
      // TODO check event target
      this.list.hidden = false
    })

    animationStartEvent && document.addEventListener(animationStartEvent, (e) => {
      console.log('animation start')
      this.list.hidden = true
    })
  }

  render () {
    return (
      <ul ref={(ref) => { this.list = ref }}>
        {this.props.bookHistory.map(({reader, date}, index) =>
          <li key={index} className={css.item}>
            <span className={css.date}>
              {date}
            </span>
            <span className={css.reader}>
              {reader}
            </span>
          </li>
        )}
      </ul>
    )
  }
}

// TODO move to utils
function whichAnimationEndEvent () {
  const el = document.createElement('fakeelement')
  let t

  const animations = {
    'animation': 'animationend',
    'OAnimation': 'oanimationend',
    'MozAnimation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd'
  }

  for (t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t]
    }
  }
}

function whichAnimationStartEvent () {
  const el = document.createElement('fakeelement')
  let t

  const animations = {
    'animation': 'animationstart',
    'OAnimation': 'oanimationstart',
    'MozAnimation': 'animationstart',
    'WebkitAnimation': 'webkitAnimationStart'
  }

  for (t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t]
    }
  }
}