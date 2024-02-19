

/* How to update ---------------
_12_ - controller_X_ 
------------------------------- */

import express from 'express'
import {getItemById, getItemByUUID, getAllItems, createItem} from '../controllers/cart_controller.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

// Standard routes for all items 
router.route('/').get(getAllItems)
router.route('/id/:s1').get(getItemById)
router.route('/uuid/:s1').get(getItemByUUID)

router.route('/create').post(createItem)

export default router