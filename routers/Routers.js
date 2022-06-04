const express = require('express')
const Router = express.Router();
const bodyParser = require('body-parser');
var request = require('request');

const HomeControllers = require('../controllers/HomeControllers');
const ErrorControllers = require('../controllers/ErrorControllers');
const { redirect } = require('express/lib/response');
Router.use(express.static(__dirname + '/public'));
Router.use(express.static('static'));

const menu = [
    {
        name: 'Home',
        icon: 'material-symbols-outlined',
        nameIcon: 'space_dashboard',
        url: '/'
    },
    {
        name: 'User',
        icon: 'material-symbols-outlined',
        nameIcon: 'person',
        url: '/user'
    },
    {
        name: 'Post',
        icon: 'material-symbols-outlined',
        nameIcon: 'list_alt',
        url: '/post'
    },
    {
        name: 'Report',
        icon: 'material-symbols-outlined',
        nameIcon: 'report',
        url: '/report'
    },
    {
        name: 'Cyber Security',
        icon: 'material-symbols-outlined',
        nameIcon: 'security',
        url: '/cs'
    },
    {
        name: 'Control',
        icon: 'material-symbols-outlined',
        nameIcon: 'nest_remote',
        url: '/control'
    },
    {
        name: 'Backup',
        icon: 'material-symbols-outlined',
        nameIcon: 'database',
        url: '/Backup'
    },
    {
        name: 'Api Developer',
        icon: 'material-symbols-outlined',
        nameIcon: 'hub',
        url: '/api'
    },
    {
        name: 'Logout',
        icon: 'material-symbols-outlined',
        nameIcon: 'logout',
        url: '/logout'
    }
]

Router.use(bodyParser.json());

Router.get('/', function(request, response) {
    let data = {
        title: 'Home',
        url: request.url,
        menu: menu
    }

    response.render( 'home', data )
});
Router.get('/user', function(request, response) {
    let data = {
        title: 'User',
        url: request.url,
        menu: menu
    }

    response.render( 'user', data )
});
Router.get('/post', function(request, response) {
    let data = {
        title: 'Post',
        url: request.url,
        menu: menu
    }

    response.render( 'post', data )
});
Router.get('/report', function(request, response) {
    let data = {
        title: 'Report',
        url: request.url,
        menu: menu
    }

    response.render( 'report', data )
});
Router.get('/cs', function(request, response) {
    let data = {
        title: 'Cyber Security',
        url: request.url,
        menu: menu
    }

    response.render( 'cs', data )
});
Router.get('/backup', function(request, response) {
    let data = {
        title: 'Backup',
        url: request.url,
        menu: menu
    }

    response.render( 'backup', data )
});
Router.get('/api', function(request, response) {
    let data = {
        title: 'Api Developer',
        url: request.url,
        menu: menu
    }

    response.render( 'api', data )
});
Router.get('/control', function(request, response) {
    let data = {
        title: 'Control',
        url: request.url,
        menu: menu
    }

    response.render( 'control', data )
});

Router.get("/login", function (req, res) {
    res.render("login");
});

Router.post("/login", function (req, res) {
    res.redirect("/");
});


// Router.post('/login', async(req, res) => {
//     var options = {
//         'method': 'POST',
//         'url': 'http://localhost:4002/api/auth/login',
//         'headers': {
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjliNTlmYmEtNjBkMS01Y2U4LWEzNDktYzk2ZDNhZTFmYjM3IiwiaWF0IjoxNjUyOTI3NDk3LCJleHAiOjE2NTMwMTM4OTd9.MzQh3REtzKu3DKhuB03O2_k79W-kkE5GFVbXWKhSNCU',
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//         "usernameOrEmail": "admin@gmail.com",
//         "password": "Stech@123456Aa"
//         })
    
//     };
//     request(options, function (error, data) {
//         if (error) throw new Error(error);
//         const user = JSON.parse(data.body)
//         console.log(user.data.user.username, "user")
        
// // if a callback is specified, the rendered HTML string has to be sent explicitly
//     res.redirect('/', function (err, html) {
//         res.render('for-dashboard/right.ejs', {user: user.data.user.username})
//     })
//     });
    
// })

Router.get('/logout', function(req, res, next) {
    // remove the req.user property and clear the login session
    req.logout();
  
    // destroy session data
    req.session = null;
  
    // redirect to homepage
    res.redirect('/');
  });

module.exports = Router