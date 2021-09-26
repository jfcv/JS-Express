getUserId = (req, res) => {
    console.log(req.params.id);
    res.locals.id = req.params.id;
    res.render('usuario_ver');
}

module.exports = {
    getUserId
};