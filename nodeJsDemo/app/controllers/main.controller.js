function index(req, res) {
    // res.send('<h1>Hello from main.controller  <h1>')
    res.render('pages/index.ejs',
        { title: "Home Page" });
}

function about(req, res) {
    res.render('pages/about.ejs',
        { title: "About Page" });
}

function contact(req, res) {
    res.render('pages/contact.ejs',
        { title: "Contact Page" });
}

function post(req, res) {
    res.render('pages/post.ejs',
        { title: "Sample Post" });
}

module.exports = {
    index,
    about,
    contact,
    post
}