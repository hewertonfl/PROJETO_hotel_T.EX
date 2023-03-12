import express, { Express, Request, Response, Router } from 'express'

const router: Router = Router()
const roomController = require('../../controllers/admin/RoomController.js')
const upld = require('../../helpers/index.js')

router.post('/room/insert', roomController.writeRoomControl)
router.post(
    '/room/put/',
    upld.uploadImage('UploadImage'),
    roomController.uploadImageControl
)

module.exports = router