module.exports = function(app) {

    // user account page
    app.get('/back-end', function(req, res) {
        res.render('back-end/file', { user: req.user });
    });
}
