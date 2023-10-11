const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')
const { result } = require('lodash');
const Blog = require('./models/blog');

// Invoking express
const app = express();
 
const dbURI = 'mongodb+srv://udaymishraudu5:test1234@nodetut.fyociy5.mongodb.net/Nodetut?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true }).then((result) => app.listen(3000))
.catch((err) => console.log(err));

// register view engine
app.set('view engine','ejs');
// if we are storing ejs files in folder with some other name instead of views
// app.set('views','folder_namefkggerkg//>jmrk

// listen for requests
// app.listen(3000);

// Middleware and static files
app.use(express.static('public'));
// urlencoded takes all the url encoded data and passes it to object so that we can use on request object
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

// app.use((req,res,next) => {
//   console.log('Hostname:',req.hostname);
//   console.log('Path:',req.path);
//   console.log('Method:',req.method);
//   next();
// })

// mongoose and mongo sandbox routes
// app.get('/add-blog',(req,res) => {
//   const blog = new Blog({
//     title: 'new blog 2',
//     snippet: 'about my new blog',
//     body: 'more about my new blog'
//   });

//   blog.save()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     }) 
// })

// app.get('/all-blogs',(req,res) => {
//   Blog.find()
//   .then((result) => {
//     res.send(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// })

// app.get('/single-blog',(req,res) => {
//   Blog.findById('6511fa4541239b3f912eac95')
//   .then((result) => {
//     res.send(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// })

app.get('/',(req, res)=> {
  // Will automatically set the content type and status code
  // res.send('<h1>Hello, from express</h1>');
//   const blogs = [
//   {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//   {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//   {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
// ];
//   res.render('index', {title: 'Home',blogs});
  res.redirect('/blogs');
});

app.get('/about',(req, res)=> {
  // Will automatically set the content type and status code
  // res.send('<h1>Hello, from express</h1>');

  res.render('about', {title: 'About'});
})

app.get('/update/:id',(req,res) => {
  const id = req.params.id;
  Blog.findById(id)
  .then(result => {
    res.render('blog/update', { blogs: result, title: 'Update Page' });
  })
})

app.post('/update/:id',(req,res) => {
  // console.log(req.body.body);
  const bodyNew = req.body.body;
  const id = req.params.id;
  Blog.findByIdAndUpdate(id, {body: bodyNew})
  .then(result => {
    // console.log('updated');
    res.redirect('/blogs');
  })
  .catch(err => {
    console.log(err);
  })
})

// blog routes
app.use('/blogs',blogRoutes);

// Redirect
// app.get('/about-me',(req,res) =>{
//   res.redirect('about');
// })

// Default case
app.use((req,res) => {
  res.status(404).render('404', {title: '404'});
})