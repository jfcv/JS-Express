getUserId = (req, res) => {
    console.log(req.params.id);
    res.locals.id = req.params.id;
    res.render('usuario_ver');
}

createUser = (req, res) => {
    res.render('usuario_nuevo');
}

logUserInfo = (req, res) => {
    if(req.body) {
        console.log(req.body);
        res.render('usuario_201');
    }
}

module.exports = {
    getUserId,
    createUser,
    logUserInfo
};