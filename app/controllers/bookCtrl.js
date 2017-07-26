'use strict';

myApp.controller('BookController', function($scope, BookFactory) {
	BookFactory.getBooks()
	.then( (bookData) => {
		$scope.bookList = bookData.data.guides;
	});
});