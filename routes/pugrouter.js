exports.showLocationGallary = function(req, res) {
    if (req.query.loc == 'goa') {
        res.render('jade/goa', {});
    } else {
        res.render('jade/nandiHill', {});
    }
};

exports.welcomePage = function(req, res) {
    res.render('jade/welcome', {});
}