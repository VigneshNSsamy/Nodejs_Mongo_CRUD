const express = require('express')
const router = express.Router()


const Records = require('../model/student_model')
const {generateCrudMethods} = require('../services')
const recordCrud = generateCrudMethods(Records)
const { validateDbId,raiseRecord404Error} = require('../middlewares')
router.get('/test',
(req,res,next) =>{next()},
(req,res) =>{res.send('fo')})

router.get('/',(req,res)=>{
    recordCrud.getAll()
    .then(data => res.send(data)).catch(err => console.log(err))

})

router.get('/:id',validateDbId,(req,res)=>{
    recordCrud.getById(req.params.id)
    .then(data =>{
        if(data)
        res.send(data)
        else
        raiseRecord404Error(req,res)
        
        })
        .catch(err => console.log(err))

})

router.post('/',(req,res)=>{
    recordCrud.create(req.body)
    .then(data => res.status(201).json(data)).catch(err => console.log(err))
})
router.put(':/id',validateDbId, (req,res) =>{
    recordCrud.update(req.params.id,req.body)
    .then(data =>{
        if(data)
        res.send(data)
        else
        raiseRecord404Error(req,res)
        
        })
        .catch(err => next(err))
})
router.delete(':/id',validateDbId, (req,res) => {
    recordCrud.delete(req.params.id)
    .then(data => {
        if(data) res.send(data)
        else raiseRecord404Error(req,res)
    })
    .catch(err => next(err))
})
module.exports = router