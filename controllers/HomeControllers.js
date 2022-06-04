module.exports.home = (req, res) => {
    res.render('home', { title: 'Dashboard' });
}
// module.exports.login = (req, res) => {
//     res.render('login', { title: 'Login' });
// }

module.exports.user = (req, res) => {
    res.render('user', { title: 'Dashboard - User' });
}

module.exports.control = (req, res) => {
    res.render('control', { title: 'Dashboard - Control' });
}

module.exports.post = (req, res) => {
    res.render('post', { title: 'Post' });
}

module.exports.report = (req, res) => {
    res.render('report', { title: 'Report' });
}

module.exports.cs = (req, res) => {
    res.render('cs', { title: 'Cyber Security' });
}

module.exports.backup = (req, res) => {
    res.render('backup', { title: 'Backup' });
}

module.exports.api = (req, res) => {
    res.render('api', { title: 'Api Developer' });
}

