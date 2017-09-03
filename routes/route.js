exports.showLocationGallary = function(req, res) {
    if (req.query.loc == 'goa') {
        res.render('goa.ejs', {});
    } else {
        res.render('nandiHill', {});
    }
};

exports.welcomePage = function(req, res) {
    res.render('welcome', {});
}