export default class BookShelf
{
    name;
    owner;
    dateModified;
    books;

    constructor(name,owner,dateModified){
        this.name = name;
        this.owner = owner;
        this.dateModified = dateModified;
        this.books = [];
    }

    addBook(book){
        if(book instanceof Book){
            this.books.push(book);
        }
    }
    updateBook(id,data){
        /*for( let book of this.books){
            if( book.id === id){
                book.update(data);
                break;
            }*/
        // find cua array: nếu tìm được 1 phần tử thỏa mãn thì find sẽ trả về phần tử đó
        let book = this.books.find(function(item){
            return item.id === id;
        });
        
        if(book != null){book.update(data)};
        }
    deleteBook(id){
        // c2:findIndex() cua array: neu tim duoc phan tu thoa man => index>=0. Nguoc lai -> -1
            let bookIndex = this.books.findIndex(item => item.id === id);
            if(bookIndex > -1){this.books.splice(bookIndex,1)};
        }
    showBook(){
            console.log(this.books);
        }
    findBook(name){
            // fillter() cua array tra ve 1 mang moi gom nhung phan tu thoa man dieu kien
            return this.books.filter(item => item.name === name);
        }
}

