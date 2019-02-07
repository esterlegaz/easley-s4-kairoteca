import { random, name } from "faker"
import {
  times,
  find,
  propEq,
  pipe,
  always,
  findIndex,
  merge,
  take
} from "ramda"

const shuffle = xs => {
  for (let i = xs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[xs[i], xs[j]] = [xs[j], xs[i]]
  }
  return xs
}

const take4Random = pipe(
  shuffle,
  take(6)
)

// doBook :: Number -> Object
const doBook = id => ({
  id,
  ISBN: random.uuid(),
  title: name.title(),
  author: name.findName(),
  description: random.words(),
  tags: take4Random([
    "programming",
    "react",
    "javascript",
    "functional programing",
    "OOP",
    "Design patterns",
    "Reactive programing",
    "Web components",
    "Vue",
    "GIT",
    "Agile",
    "Testing",
    "SOLID"
  ]),
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

// deleteBook :: (Object) -> Promise Object
const deleteBook = pipe(
  id => {
    const i = findIndex(propEq("id", id), BOOKS)
    BOOKS.splice(i, 1)
    return { deleted: true }
  },
  toResponse
)

const api = {
  books,
  bookById,
  createBook,
  updateBook,
  deleteBook
}

export default api
