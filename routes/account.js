
module.exports = function(app) {

    // user account page
    app.get('/account', function(req, res) {
        res.render('account/account', { user: req.user });
    });

    // logout
    app.get('/logout', function(req, res) {
        res.redirect('/');
    });

    // adm
    app.get('/adm', function(req, res) {
        res.redirect('account/adm');
    });
}

