// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();
const cookieSession = require('cookie-session');

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(cookieSession({
  name: 'session',
  keys: ['cardHeroes'],
}));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const cardRoutes = require('./routes/cards');
const cardApiRoutes = require('./routes/cards-api');
const brandApiRoutes = require('./routes/getBrand-api');
const sportApiRoutes = require('./routes/getSport-api');
const userLogin = require('./routes/login');
const userLogout = require('./routes/logout');
const getAllCardsRoutes = require('./routes/getAllCards-api');
const adminRoutes = require('./routes/admin');
const newCardRoutes = require('./routes/newCard');
const addNewCardRoutes = require('./routes/addNewCard');
const editCardRoutes = require('./routes/editCard');
const deleteCardRoutes = require('./routes/deleteCard');
const updateCardRoutes = require('./routes/updateCard');
const sidebarMessagesRoutes = require('./routes/sidebar-messages')
const messagesRoutes = require('./routes/messages');
const messageRoutes = require('./routes/message');
const sendMessageRoutes = require('./routes/send-message');
const indexRoutes = require('./routes/index')
const newMessagesRoutes = require('./routes/newMessage');
const sidebarNewMessagesRoutes = require('./routes/newMessage-sidebar');
const newMessageRoutes = require('./routes/newMessage-frame');
const sendNewMessageRoutes = require('./routes/send-newMessage');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/cards', cardRoutes);
app.use('/api/cards', cardApiRoutes);
app.use('/api/brands', brandApiRoutes);
app.use('/api/sports', sportApiRoutes);
app.use('/login', userLogin);
app.use('/logout', userLogout)
app.use('/admin', adminRoutes);
app.use('/cards/new', newCardRoutes);
app.use('/cards/new', addNewCardRoutes);
app.use('/cards', editCardRoutes);
app.use('/cards', deleteCardRoutes);
app.use('/cards', updateCardRoutes);
app.use('/sidebar-messages', sidebarMessagesRoutes);
app.use('/messages', messagesRoutes);
app.use('/message', messageRoutes);
app.use('/message', sendMessageRoutes);
app.use('/api/cards', getAllCardsRoutes);
app.use('/', indexRoutes)

app.use('/messages', newMessagesRoutes);
app.use('/sidebar-messages', sidebarNewMessagesRoutes);
app.use('/new-message', newMessageRoutes);
app.use('/new-message', sendNewMessageRoutes);


// Note: mount other resources here, using the same pattern above



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
