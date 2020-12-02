import Book from "./book.js";

export default class ScineBook extends Book{
    major;

    constructor(name,price,publishedDate,major){
        super(name,price,publishedDate);
        this.major = major;
    }
}