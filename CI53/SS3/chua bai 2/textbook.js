import Book from "./book.js";

export default class TextBook extends Book{
    subject;
    grade;

    constructor(name,price,publishedDate,subject,grade){
        super(name,price,publishedDate);
        this.subject = subject;
        this.grade = grade;
    }

}