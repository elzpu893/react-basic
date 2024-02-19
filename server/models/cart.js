// Collection name: logger

import mongoose from 'mongoose'

const model_cart_Schema = mongoose.Schema({
    uuid:                       {type: String, required: true,  unique: true,  default: ''},
    product_id:                 {type: String, required: true,  unique: false, default: ''},
    product_data:               {type: String, required: true,  unique: false, default: ''},  
    status:                     {type: String, required: true,  unique: false, default: 'ACTIVE'}, 

},
{timestamps: true}) 

const samplecart = mongoose.model('samplecart', model_cart_Schema)
export default samplecart

