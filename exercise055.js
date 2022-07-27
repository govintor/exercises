const express = require('express') // Requires the express package
const app = express() // Init's that express package
const MongoClient = require('mongodb').MongoClient // Requires MongoDB
const PORT = 2121 // Sets port to execute
require('dotenv').config() // Holds secret variables like mongoDB keys or tokens, exists outside of code (ignored in gitignore)

let db, // Establish some vars
    dbConnectionStr = process.env.DB_STRING, // Secret db string to coneect to it
    dbName = 'todo' // Name of db

// Mongo API code to connect to MongoDB
MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }) 
// Unified Topology = keeps open watch on the connection to make sure the data is ready. More efficient but not as stable yet. Mom has a pants.
    .then(client => { // after connecting, then...
        console.log(`Connected to ${dbName} Database`) // log that we're connected
        db = client.db(dbName) // take client, connect to database, set it to this var
    })
    
app.set('view engine', 'ejs') // set the settings for the express app we assigned earlier
app.use(express.static('public')) // middleware - look in public folder for routes we call up later, btwn call/response
app.use(express.urlencoded({ extended: true })) // setting
app.use(express.json()) // setting

// NOTE: The async makes sure the response ONLY sends when the response actually exists 
app.get('/',async (request, response)=>{ // app.get = when the client requests something. code executed below sends a response.
    const todoItems = await db.collection('todos').find().toArray() // get todo items from db in array form
    const itemsLeft = await db.collection('todos').countDocuments({completed: false}) // get count of items in todos that have the completed status of "false" 
    response.render('index.ejs', { items: todoItems, left: itemsLeft }) // create a response that contains the above two vars
    // db.collection('todos').find().toArray()  -> more efficient, one DB connection, and filters out completed:false items b/c you already got them
    // .then(data => {
    //     db.collection('todos').countDocuments({completed: false})
    //     .then(itemsLeft => {
    //         response.render('index.ejs', { items: data, left: itemsLeft })
    //     })
    // })
    // .catch(error => console.error(error)) // Catches any errors, just in case
})

app.post('/addTodo', (request, response) => { // .post, update or create stuff
    db.collection('todos').insertOne({thing: request.body.todoItem, completed: false}) // open connection, insert a thing. NOTE: this is bad b/c no validation
    .then(result => {
        console.log('Todo Added') // let us know that we successfully added a todo
        response.redirect('/') // go back to the route screen
    })
    .catch(error => console.error(error))
})

app.put('/markComplete', (request, response) => { // UPDATE parts of DATABASE
    db.collection('todos').updateOne({thing: request.body.itemFromJS},{ // change the todos, update one to be true
        $set: {
            completed: true
          }
    },{
        sort: {_id: -1}, // sorts them in descending (biggest to lowest) order by id, e.g. newest one 
        upsert: false // DON'T update and insert and same time
    })
    .then(result => {
        console.log('Marked Complete') // let us know it worked
        response.json('Marked Complete') // let the client know it worked
    })
    .catch(error => console.error(error)) // catch errors

})

app.put('/markUnComplete', (request, response) => {  // update our docs in the DB round 2
    db.collection('todos').updateOne({thing: request.body.itemFromJS},{ // change one item
        $set: {
            completed: false // set as not completed
          }
    },{
        sort: {_id: -1}, // sort by id: this guy goes last
        upsert: false // don't update/insert at same time, don't add a double
    })
    .then(result => {
        console.log('Marked Uncomplete') // let us know it worked // TYPO: Should be uncomplete
        response.json('Marked Uncomplete') // let the client know it worked
    })
    .catch(error => console.error(error)) // catch errors

})

app.delete('/deleteItem', (request, response) => { // Deletes an item
    db.collection('todos').deleteOne({thing: request.body.itemFromJS}) // delete one item from todos
    .then(result => {
        console.log('Todo Deleted') // print result like before, catch error, etc
        response.json('Todo Deleted')
    })
    .catch(error => console.error(error))

})

app.listen(process.env.PORT || PORT, ()=>{ // listen on this port, first one is for haroku. second is for the one declared.
    console.log(`Server running on port ${PORT}`) // log that we are listening when this executes.
})