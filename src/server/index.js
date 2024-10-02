const express = require('express');
const path = require('path');
const userRouter = require('./routes/user');
const app = express();
const port = 4000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRouter);
const fullPath = path.join(__dirname, '..', 'resource/views');
app.set('view engine', 'pug');
app.set('views', fullPath);
// routes
app.get('/', (request, response) => response.render('home'));
// app.get('/users', (request, response) => {
//   response.render('users/index', { users: users });
// });

// app.get('/users/search', (request, response) => {
//   // get search value
//   const searchName = request.query.name;
//   // login search
//   const result = users.filter(
//     (user) =>
//       user.name.toLocaleLowerCase().indexOf(searchName.toLocaleLowerCase()) !==
//       -1
//   );
//   // render result
//   response.render('users/index', {
//     users: result, // render lại trang users/index với biến users bây giờ chỉ bao gồm các kết quả phù hợp
//   });
// });

// app.get('/users/create', (request, response) => {
//   response.render('users/create');
// });
// app.post('/users/create', (request, response) => {
//   const pushData = request.body;

//   users.push(pushData);
//   response.redirect('/users');
// });

// app.get('/users/:id', (request, response) => {
//   const findUser = parseInt(request.params.id);
//   const user = users.find((user) => user.id == findUser);

//   response.render('users/show', {
//     user: user,
//   });
// });
//
app.listen(port, () => console.log('Server running at ' + port));
