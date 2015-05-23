module.exports = function (app) {

    // home page
    app.get('/', function (req, res) {
        res.render('index', { title: 'Home Page.  ' })
    });

    // chat area
    app.get('/chat', function (req, res) {
        res.render('chat', { title: 'Chat with Me!  ' })
    });

    // about page
    app.get('/about', function (req, res) {
        res.render('about', { title: 'About Me.  ' })
    });

    // chat area
    app.get('/adm', function (req, res) {
        res.render('adm', { title: 'Chat with Me!  ' })
    });

    // about page
    app.get('/about', function (req, res) {
        res.render('about', { title: 'About Me.  ' })
    });

    // about page
    app.get('/fraim', function (req, res) {
        res.render('fraim', { title: 'About Me.  ' })
    });

    // about page
    app.get('/path', function (req, res) {
        res.render('path', { title: 'About Me.  ' })
    });

}
