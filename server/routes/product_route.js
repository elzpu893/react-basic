

/* How to update ---------------
_12_ - controller_X_ 
------------------------------- */

import express from 'express'
import {getItemByUUID, getAllItems, createItem} from '../controllers/product_controller.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()


router.route('/all').get(getAllItems)
router.route('/uuid/:s1').get(getItemByUUID)

// Standard routes for all items 
router.route('/save').post(createItem)


export default router