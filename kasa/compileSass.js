const sass = require('node-sass');

sass.render({
  file: 'C:/Users/Home/Documents/p8_React/kasa/src/styles/app.scss',
  output: 'C:/Users/Home/Documents/p8_React/kasa/src/styles/styles.css'
}, function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log('Compilation réussie!');
  }
});