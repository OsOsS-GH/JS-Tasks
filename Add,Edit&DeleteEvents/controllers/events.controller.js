const Event = require('../models/event');
function showEvents(req , res) { 
    // const events = [
    //     {_id : 1 , title : "Node.js Event" , price : 1200 , description : "Hello Node.js"},
    //     {_id : 2 , title : "Asp.net Core Event" , price : 2000 , description : "Hello Asp.net Core"}
    // ]


    Event.find()
   .then(events => res.render('pages/events.ejs' , {events}))
   .catch(err => console.log(err.message))
}


function showSingleEvent(req , res) {
    const id = req.params.id;
    Event.findById(id)
    .then(event => res.render('pages/single.ejs' , {event}))
    .catch(err => console.log(err.message)) 
}

function create(req , res) {
    res.render('pages/create.ejs');
 }

function store(req , res) {
    // Create new event
    const event = new Event({
        title : req.body.title , 
        price : req.body.price , 
        description : req.body.description
    });

    event.save()
    .then(() => res.redirect('/events'));
}


function deleteEvent(req , res) {
    const id = req.params.id
    Event.findByIdAndDelete(id)
    .then(() => res.redirect('/events'))
    .catch((err) => console.log(err.message))

}

function edit(req , res) { 
    const id = req.params.id;
    Event.findById(id)
    .then(event => res.render('pages/edit.ejs' , {event}))
    .catch(err => console.log(err.message)) 
}

function update(req , res) { 
    const id = req.params.id;
    Event.findByIdAndUpdate(id , {
        title : req.body.title, 
        price : req.body.price,
        description : req.body.description
    })
    .then(()=> res.redirect('/events'))
    .catch(err => console.log(err.message))
}


module.exports = {
    showEvents,
    showSingleEvent,
    create ,
    store , 
    deleteEvent,
    edit , 
    update
}