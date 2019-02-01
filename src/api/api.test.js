import api from 'api';

test('Should list all books', async () => {
    const { data: allBooks } = await api.books();
    expect(allBooks).toHaveLength(20);
});

test('Should find book by id', async () => {
    const { data: book } = await api.bookById(5);
    expect(book).toHaveProperty('id');
    expect(book).toHaveProperty('ISBN');
});

test('Should add a new book', async () => {
    const { data: newBook } = await api.createBook({ ISBN : 'some-isbn' });
    const { data: allBooks } = await api.books();
    expect(newBook).toHaveProperty('id');
    expect(newBook.id).toEqual(21);
    expect(allBooks).toHaveLength(21);
});

test('Should update book', async () => {
    const { data: updatedBook } = await api.updateBook({
        id   : 5,
        ISBN : 'new-sbn'
    });

    expect(updatedBook.ISBN).toEqual('new-sbn');
    expect(updatedBook.id).toEqual(5);
});
