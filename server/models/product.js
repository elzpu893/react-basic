// Collection name: logger

import mongoose from 'mongoose'

const model_sampleproduct_Schema = mongoose.Schema({
    uuid:                       {type: String, required: true,  unique: true,  default: ''},
    product_id:                 {type: String, required: true,  unique: false, default: ''},
    product_name:               {type: String, required: true,  unique: false, default: ''},  
    price:                      {type: Number, required: true,  unique: false, default: 0},  
    qty:                        {type: Number, required: true,  unique: false, default: 0},  
    status:                     {type: String, required: true,  unique: false, default: 'ACTIVE'}, 

},
{timestamps: true}) 

const sampleproduct = mongoose.model('sampleproduct', model_sampleproduct_Schema)
export default sampleproduct

