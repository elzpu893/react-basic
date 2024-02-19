
import asyncHandler from 'express-async-handler'
import model from '../models/product.js' 
import { v4 as uuidv4 } from 'uuid'

// ********************************************************** //
// Standard services                                          //
// ********************************************************** //

// @desc     Fetch a item by uuid
// @type     GET
// @route    /api/cix/auditor/uuid
const getItemByUUID = asyncHandler(async (req, res) => {
    const _uuid = req.params.s1
    const item = await model.find({ uuid: _uuid })
    if (item) {
        res.json(item)
    } else {
        res.status(404)
        throw new Error('Record not found')
    }
})

// @desc     Fetch all items 
// @type     GET
const getAllItems = asyncHandler(async (req, res) => {

    console.log('getAllItems')
    const items = await model.find({})
    console.log(items)
     
    if (items) {
        res.status(201).json(items)
    } else {
        res.status(404)
        throw new Error('Record not found')
    }
})

// @desc    Create new item
// @type    POST
// @route   /api/cix/auditor/create
const createItem = asyncHandler(async (req, res) => {
    console.log('cretaeItem')

    try{
        const item = JSON.parse(JSON.stringify(req.body))
        item.uuid = uuidv4()
        await model.create(item)
        console.log('Success'.green)
        res.json('Success')
    }catch(err){
        console.log('Error at action logging'.red)
        res.status(404)
        throw new Error('Record not found')
    }
})

export { getItemByUUID, getAllItems, createItem }
