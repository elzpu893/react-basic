
import asyncHandler from 'express-async-handler'
import model from '../models/cart.js' 
import { v4 as uuidv4 } from 'uuid'

// ********************************************************** //
// Standard services                                          //
// ********************************************************** //

// @desc     Fetch a item by _id
// @type     GET
// @route    /api/cix/auditor/id
const getItemById = asyncHandler(async (req, res) => {
    const id = req.params.s1
    const item = await model.find({ _id: id })
    if (item) {
        res.json(item)
    } else {
        res.status(404)
        throw new Error('Record not found')
    }
})

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

    const items = await model.find({})
    if (items) {
        res.json(items)
    } else {
        res.status(404)
        throw new Error('Record not found')
    }
})

// @desc    Create new item
// @type    POST
// @route   /api/cix/auditor/create
const createItem = asyncHandler(async (req, res) => {
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

export { getItemById, getItemByUUID, getAllItems, createItem }
