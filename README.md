# mongoose-crud


List of Book Routes:
===
|Route |HTTP |Header(s)|Body   |Description |
|------|:---:|:-------:|:-----|:-----------|
|`/books`|GET|`none`|`none`|Get all the books info|
|`/books/search`|GET|`none`|`none`|search books by query|
|`/books`|POST |`none`|`isbn:String`(**Required**) , `title:String`(**Required**), `author:String`(**Required**),`category:String`(**Required**),`stock:Number`(**Required**)| Create a new book
|`/books/:id`|DELETE|`none`|`none`| Delete a book
|`/books/:id`|PUT|`none`|`isbn:String` , `title:String`, `author:String`,`category:String`,`stock:Number`| Update a book with new info|
|`/books/:id`|PATCH|`none`|`isbn:String` , `title:String`, `author:String`,`category:String`,`stock:Number`|Update a single field info to book

List of Member Routes:
===
|Route |HTTP |Header(s)|Body   |Description |
|------|:---:|:-------:|:-----|:-----------|
|`/members`|GET|`none`|`none`|Get all the members info|
|`/member`|POST |`none`|`name:String`(**Required**) , `address:String`(**Required**), `zipcode:String`(**Required**),`email:String`(**Required**),`phone:String`(**Required**)| Create a new member
|`/members/:id`|DELETE|`none`|`none`| Delete a book
|`/members/:id`|PUT|`none`|`name:String` , `address:String`, `zipcode:String`,`email:String`,`phone:String`| Update member with new info|
|`/members/:id`|PATCH|`none`|`name:String` , `address:String`, `zipcode:String`,`email:String`,`phone:String`|Update a single field info to member

List of Transaction Routes:
===
|Route |HTTP |Header(s)|Body   |Description |
|------|:---:|:-------:|:-----|:-----------|
|`/transactions`|GET|`none`|`none`|Get all the transactions info|
|`/transactions/search`|GET|`none`|`none`|search transaction by query|
|`/transactions`|POST |`none`|`member:String`(**Required**) , `in_date:Date`(**Required**), `out_date:Date`(**Required**),`due_date:Date`(**Required**),`fine:Number`(**Required**)| Create a new transaction
|`/transactions/:id`|DELETE|`none`|`none`| Delete a transaction
|`/transactions/:id`|PUT|`none`|`member:String` , `in_date:Date`, `out_date:Date`,`due_date:Date`,`booklist:String`| Update transaction with new info|
|`/transactions/:id`|PATCH|`none`|`member:String` , `in_date:Date`, `out_date:Date`,`due_date:Date`,`booklist:String`|Update a single field info to transaction

## Usage
```javascript
npm install
```