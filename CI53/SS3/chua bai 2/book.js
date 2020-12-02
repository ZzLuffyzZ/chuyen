export default class Book {
    id;
    name;
    price;
    publishedDate;

    constructor(name, price, publishedDate){
        this.name = name;
        this.price = price;
        this.publishedDate = publishedDate;
        this.id = uuid.v4();
    }
    update(data){
        for( let key in data){
            if(this[key] != undefined && this[key] = "id"){
                this[key] = data[key];
            }
        }
    }
}