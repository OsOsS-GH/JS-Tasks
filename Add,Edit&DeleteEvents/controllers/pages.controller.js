module.exports = {
    showHome : (req , res) => {
        res.render('pages/home.ejs')
    },
    showContact : (req , res) => {
        res.render('pages/contact.ejs')
    }
}
