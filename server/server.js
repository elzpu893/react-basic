import express from 'express';
import path from 'path';
import dotenv from 'dotenv'
import connecDB from './config/mongodbconfig.js'
import colors from 'colors' 
import cors from 'cors'

import cart from './routes/cart_route.js'
import product from './routes/product_route.js'


console.log(`*****************************************************************`.magenta.bold);

dotenv.config()
connecDB()

const app = express();
app.use(express.json())

// Allow localhost:3050 to access the server
// Otherwise no one can access the server
const options = {
  origin: 'http://localhost:3050',
  }
app.use(cors(options))

// Stop black-listed ips/domains and allows ONLY the ones are white-listed
app.use((req, res, next) => {
  console.log(`Incoming request from ${req.ip}/${req.hostname}`.blue)
  next()
})


// ------------------------------------------------------------------//
// This will enable to call self signed SSL certificates by ignoring it
// https://github.com/shanalikhan/code-settings-sync/issues/776
// Insecure, but works for testing needs
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
// ------------------------------------------------------------------//

// For production details
const __dirname = path.resolve() 

if(process.env.SERVER === 'production'){
  console.log(`Node.js logging microserice is running on production`.green.bold);

  app.use(express.static(path.join(__dirname, '/frontend/build')))
  app.get('*', (req,res) => 
      // res.set('Access-Control-Allow-Origin', '*'),
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
}else{
  console.log(`Node.js logging microserice is running on nodemon`.green.bold);
  app.get('/', (req, res) => {
      // res.set('Access-Control-Allow-Origin', '*'),
      res.send('&#9829; - API is running on nodemon - &#9829;')  
  })
}

console.log('sss')
//***** Services ****** //
app.use('/v1/api/cart/', cart)
app.use('/v1/api/products/', product)

const PORT   = process.env.PORT || 50006
app.listen(PORT, console.log(`*Server is running on port ${PORT} on '${process.env.SERVER}' server`.green.bold))


