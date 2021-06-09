import React from 'react';

function BookDetails({book}){

return(
    <div>
        <label>
            {book.bookId}
        </label>
        <label>
            {book.size}
        </label>
        <label>
            {book.format}
        </label>
        <label>
            {book.numOfPages}
        </label>
        <label>
            {book.paperType}
        </label>
        <label>
            {book.color}
        </label>
        <label>
            {book.binding}
        </label>
        <label>
            {book.onBinding}
        </label>
        <label>
            {book.adds}
        </label>
        <label>
            {book.numOfBooks}
        </label>
        <label>
            {book.deadLine}
        </label>
    </div>
)

}

export default BookDetails;