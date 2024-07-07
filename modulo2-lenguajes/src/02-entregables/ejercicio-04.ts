//READ BOOKS: Crea función isBookRead que reciba una lista de libros y un título, esta devuelve si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

const title5: string = "ENTREGABLES-READ BOOKS";
console.log(`%c ${title5}`, "font-weight: bold;");

const books: bestSellerlist = [
  { title: "Harry Potter y la piedra filosofal", read: true },
  { title: "Canción de hielo y fuego", read: false },
  { title: "Devastación", read: true },
];

//1 Definir tipo / estructura / configuración de cada libro
type bookType = { title: string; read: boolean };

//2 Definir tipo / estructura / configuración de la lista de libros.
type bestSellerlist = bookType[];

//3 Crear función isBookRead
//Convertir bookName a minúsculas para evitar problemas en la comparacion de strings
const isBookRead = (booklist: bestSellerlist, bookName: string): boolean => {
  const lowerCaseBookName = bookName.toLowerCase();
  const book = booklist.find((item) => item.title.toLowerCase() === lowerCaseBookName);
  return book ? book.read : false;
};

//4
const bookNameInput = "Harry Potter y la piedra filosofal";
const bookreaded = isBookRead(books, bookNameInput);
console.log(`¿El libro "${bookNameInput}" ha sido leído? ${bookreaded}`);
console.log(`------------------------`);
