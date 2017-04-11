import keyMirror from 'keymirror'

export const types = keyMirror({
  SELECT_BOOK: null
})

export function selectBook (id) {
  return {
    type: types.SELECT_BOOK,
    id
  }
}
