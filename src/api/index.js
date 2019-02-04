import { random, name } from "faker"
import { times, find, propEq, pipe, always, findIndex, merge } from "ramda"

// doBook :: Number -> Object
const doBook = id => ({
  id,
  ISBN: random.uuid(),
  title: name.title(),
  author: name.findName(),
  description: random.words(),
  tags: ["programming", "react", "javascript"],
  year: 2018,
  status: "pending",
  type: "digital"
})

// toResponse :: a -> Promise { data: a }
const toResponse = pipe(
  data => ({ data }),
  data => Promise.resolve(data)
)

const BOOKS = times(i => doBook(i + 1), 20) // STORE

// books :: () -> Promise [Object]
const books = pipe(
  always(BOOKS),
  toResponse
)

// bookById :: (Number) -> Promise Object
const bookById = pipe(
  id => find(propEq("id", id), BOOKS),
  toResponse
)

// createBook :: (Object) -> Promise Object
const createBook = pipe(
  data => {
    const length = BOOKS.length
    const newBook = { ...data, id: length + 1 } // because id start at 1
    BOOKS[length] = newBook
    return newBook
  },
  toResponse
)

// updateBook :: (Object) -> Promise Object
const updateBook = pipe(
  ({ id, ...data }) => {
    const i = findIndex(propEq("id", id), BOOKS)
    const target = BOOKS[i]
    const updated = merge(target, data)
    BOOKS[i] = updated
    return updated
  },
  toResponse
)

const api = {
  books,
  bookById,
  createBook,
  updateBook
}

export default api
