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
const userLogin = require('./routes/login');
const userLogout = require('./routes/logout');
const adminRoutes = require('./routes/admin');
const cardRoutes = require('./routes/cards');
const cardApiRoutes = require('./routes/cards-api');
const newCardRoutes = require('./routes/newCard');
const addNewCardRoutes = require('./routes/addNewCard');
const editCardRoutes = require('./routes/editCard');
const deleteCardRoutes = require('./routes/deleteCard');
const updateCardRoutes = require('./routes/updateCard');
const sidebarMessagesRoutes = require('./routes/sidebar-messages')
const messagesRoutes = require('./routes/messages');
const messageRoutes = require('./routes/message');
const sendMessageRoutes = require('./routes/send-message');
const cardsIDRoute = require('./routes/cards_id');
const addCardToFav = require('./routes/addFavCard')
const removeFavCard = require('./routes/removeFavCard')
const indexRoutes = require('./routes/index')
const newMessagesRoutes = require('./routes/newMessage');
const sidebarNewMessagesRoutes = require('./routes/newMessage-sidebar');
const newMessageRoutes = require('./routes/newMessage-frame');
const sendNewMessageRoutes = require('./routes/send-newMessage');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/login', userLogin);
app.use('/logout', userLogout)
app.use('/admin', adminRoutes);
app.use('/cards', cardRoutes);
app.use('/api/cards', cardApiRoutes);
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
app.use('/herocard', cardsIDRoute);// route for /card/:id
app.use('/herocard', addCardToFav);// add to favourites
app.use('/herocard/remove', removeFavCard);// remove from favourites
app.use('/', indexRoutes)
app.use('/messages', newMessagesRoutes);
app.use('/sidebar-messages', sidebarNewMessagesRoutes);
app.use('/new-message', newMessageRoutes);
app.use('/new-message', sendNewMessageRoutes);

// Note: mount other resources here, using the same pattern above

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
