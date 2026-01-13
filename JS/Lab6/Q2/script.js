let nameRegex = /^[a-zA-Z ]+$/;
class Books {
    #title;
    #numofChapters;
    #author;
    #numofPages;
    #publisher;
    #numofCopies;
    #type;

    constructor(title, numofChapters, author, numofPages, publisher, numofCopies,type) {
        if(!title || !numofChapters || !author || !numofPages || !publisher || !numofCopies || !type){
            throw new Error("All fields are required");
        }
        if (isNaN(numofChapters) || isNaN(numofPages) || isNaN(numofCopies)) {
            throw new Error("You must enter a number for chapters, pages, and copies");
        } else if (numofChapters < 1 || numofPages < 1 || numofCopies < 1) {
            throw new Error("You must enter positive numbers for chapters, pages, and copies");
        }
        if (!author.match(nameRegex)) {
            throw new Error("Invalid Author Name");
        }
        if (!type.match(nameRegex)) {
            throw new Error("Invalid Type");
        }
        

        this.#title = title;
        this.#numofChapters = numofChapters;
        this.#author = author;
        this.#numofPages = numofPages;
        this.#publisher = publisher;
        this.#numofCopies = numofCopies;
        this.#type = type;
    }
    set title(val) {
        this.#title = val;
    }

    set numofChapters(val) {
        this.#numofChapters = val;
    }

    set author(val) {
        this.#author = val;
    }

    set numofPages(val) {
        this.#numofPages = val;
    }

    set publisher(val) {
        this.#publisher = val;
    }

    set numofCopies(val) {
        this.#numofCopies = val;
    }
    set type(val) {
        this.#type = val;
    }

    get title() {
        return this.#title;
    }

    get numofChapters() {
        return this.#numofChapters;
    }

    get author() {
        return this.#author;
    }

    get numofPages() {
        return this.#numofPages;
    }

    get publisher() {
        return this.#publisher;
    }

    get numofCopies() {
        return this.#numofCopies;
    }
    get type() {
        return this.#type;
    }
    toString() {
        return `Book Details:
        Title: ${this.#title}
        Author: ${this.#author}
        Publisher: ${this.#publisher}
        Number of Chapters: ${this.#numofChapters}
        Number of Pages: ${this.#numofPages}
        Number of Copies: ${this.#numofCopies}\n`;
    }
}
class Box{
    #height;
    #width
    #length;
    #numofBooks;
    #vloume;
    #material;
    #contents = [];
    static #totalBook = 0;
    
    constructor(height, width, length, material){
        if(!height || !width || !length || !material){
            throw new Error("All fields are required");
        }
        if (isNaN(height) || isNaN(width) || isNaN(length)) {
            throw new Error("You must enter a number for height, width, and length");
        } else if (height < 1 || width < 1 || length < 1) {
            throw new Error("You must enter positive numbers for height, width, and length");
        }
        if (!material.match(nameRegex)) {
            throw new Error("Invalid Material Name");
        }
        
        this.#height = height;
        this.#width = width;
        this.#length = length;
        this.#material = material;
        this.#numofBooks = 0;
        this.#vloume = this.#height * this.#width * this.#length;
    }
    set height(val){
        this.#height = val;
    }
    
    set width(val){
        this.#width = val;
    }

    set length(val){
        this.#length = val;
    }
    set material(val){
        this.#material = val;
    }
    get totalBooks(){
      return Box.#totalBook;
    }
    get height(){
        return this.#height;
    }

    get width(){
        return this.#width;
    }

    get length(){
        return this.#length;
    } 
    get material(){
        return this.#material;
    }
    get numofBooks(){
        return this.#numofBooks;
    }
    get vloume(){
        return this.#vloume;
    }
    get contents(){
        return this.#contents;
    } 

    addBook(book){
      this.#contents.push(book);
      this.#numofBooks++;
      Box.#totalBook++;
    }

    deleteBook(input){
      let targetIndex=this.#contents.findIndex((book)=> book.title === input || book.type === input);
      let removed =this.#contents.splice(targetIndex,1);
      this.#numofBooks--;
      Box.#totalBook--;
      return removed;
    }
    toString(){
      let messaage="Box contains: \n";
      this.#contents.forEach((book)=> messaage+=book.toString());
      return messaage;
    }
    valueof(){
      return Box.#totalBook;
    }

}

let book1 = new Books("JavaScript Basics", 10, "John Doe", 300, "Tech Publishers", 5, "Programming");
let book2 = new Books("Advanced CSS", 8, "Jane Smith", 250, "Web Publishers", 3, "Design");

let box1 = new Box(30, 20, 15, "Cardboard");
box1.addBook(book1);
box1.addBook(book2);

console.log(box1.toString());
console.log("Number of books in the box: " + box1.numofBooks);


let removedBooks = box1.deleteBook("JavaScript Basics");
console.log("Removed Books: ");
console.log(removedBooks[0].toString());
console.log("Number of books in the box after removal: " + box1.numofBooks);

let box2 = new Box(40, 25, 20, "Wooden");
let book3 = new Books("HTML5 Guide", 12, "Alice Johnson", 350, "Web Publishers", 4, "Web Development");
box2.addBook(book3);

console.log(box2.toString());
console.log("Total number of books across all boxes: " + box1.valueof());

