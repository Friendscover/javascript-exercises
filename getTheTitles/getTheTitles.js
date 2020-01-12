const getTheTitles = function(books) {
    let bookArray = [];
    for(i = 0; i < books.length; i++)
    {
        bookArray.push(books[i].title);
    }  
    return bookArray;
}

module.exports = getTheTitles;
