const { orderAdd, fetchOrder, deleteUserOrder,deleteAllOrder,fetchAllOrder } = require('../dbController/orderDb')

const orderRoute = require('express').Router()

orderRoute.post('/addorder',orderAdd)
orderRoute.get('/orderuserdetail/:user_id',fetchOrder)
orderRoute.get('/ordersdetail',fetchAllOrder)
orderRoute.get('/orderdelete/:user_id',deleteUserOrder)
orderRoute.get('/orderalldelete',deleteAllOrder)


module.exports = orderRoute