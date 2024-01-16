const myLibrary = [];
const appendedBooks = [];
let indexOfDisplayedBook = 0;


// BOOK CONSTRUCTOR 

function book (title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info = ()=>{
        
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`


    }

}



function addBookToLibrary(book){
    myLibrary.push(book);


}

// DISPLAY THE BOOK TO THE PAGE 

function display(){
    myLibrary.forEach((book)=>{
        // CHECKS IF THE BOOK WAS ALREADY APPENDED 
        const isAppended = appendedBooks.some((element)=>{
            return element.title == book.title;
        })
        if(isAppended == false){
            // appending  book to appended books 
            appendedBooks.push(book);

       

            // SETS THE BOOK IN APPENDED BOOKS TO ENSURE THAT ALL THE BOOKS ARE UNIQUE 
            

       
        // CREATING THE ELEMENTS OF THE BOOK
        const container=document.createElement('div');
        const title=document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const read=document.createElement('button');
        const remove=document.createElement('button');
        
        // ADDING CLASSES TO THEM
        container.classList.add('book-container');
        title.classList.add("title");
        author.classList.add("author");
        pages.classList.add("pages")
        remove.classList.add("remove");
        read.classList.add("read-btn")
        // ADDING THE CONTENT TO THEM
        title.textContent=book.title;
        author.textContent=book.author;
        pages.textContent=(`${book.pages} pages`);
        let text="";
        if(book.read){
            text="read";
            read.classList.add("read");
        }
        else{
            text="not read";
            read.classList.add("not-read");
        }
        read.textContent=text;
        remove.textContent="remove";
        container.appendChild(title);
        container.appendChild(author);
        container.appendChild(pages);
        container.appendChild(read);
        container.appendChild(remove);
        document.querySelector('.books-container').appendChild(container);
    

        
   
    }




        
    })


}






const submit=document.querySelector(`button[type="submit"]`);
const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const erreurLabel=document.querySelector("#error");
    erreurLabel.textContent="";
    const title= document.querySelector('#title').value;
    const author= document.querySelector('#author').value;
    const pages= document.querySelector('#pages').value;
    const read= document.querySelector('#read').checked;
    const newBook= new book(title,author,pages,read);
    const isAlreadyIncluded=myLibrary.some((book)=>{
        return book.title==newBook.title;
    })
    if(isAlreadyIncluded == false){
        addBookToLibrary(newBook);
        display()
        form.reset();
        modal.close();
    }
    else{
        
        erreurLabel.textContent="THE BOOK ALREADY EXISTS";
    }


    
    
})


const newBookButton=document.querySelector("#new-book");
const modal=document.querySelector("#modal");
const body=document.querySelector("body");
newBookButton.addEventListener('click',() => {
    modal.showModal();
    

})


modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close();
    }
});




const booksContainer=document.querySelector(".books-container");
booksContainer.addEventListener("click",(event)=>{
    if ( event.target.classList.contains('read-btn')){
        event.target.classList.toggle("read");
        event.target.classList.toggle("not-read");
    }
    else{
        if(event.target.classList.contains("remove") ){
            (event.target.parentNode).remove();

            }
        
    }

})

const gitHubMark=document.querySelector("#github-mark");
gitHubMark.addEventListener('click',() =>{

    const githubProfileURL = 'https://github.com/Labidi-Ahmed';
    
    // Navigate to the GitHub profile URL
    window.open(githubProfileURL, '_blank');

})