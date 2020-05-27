export const books = [
  {
    id: '1',
    title: "The Da Vinci Code",
    price: "10$",
  },
  {
    id: '2',
    title: "Origin",
    price: "70$",
  },
  {
    id: '3',
    title: "The Lost Symbol",
    price: "40$",
  }
];

export const getBookById = (id, bookList, price = null) => {
  return bookList.find(book => {
    if (price) return book.id === id && book.price === `${price}$`;
    return book.id === id;
  });
};
