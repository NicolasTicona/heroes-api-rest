const express = require('express')
const router = express.Router()

// Model Hero
const HeroModel = require('../db/models/heroes.model')

// routes
router.get('/heroes', (req, res) => {

    HeroModel.find({})
        .exec( (err, heroes) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }

            res.json({
                ok: true,
                heroes
            })
        })
    
})

router.post('/heroe', (req,res) => {

    let body = req.body


    HeroModel.create(body, (err, heroSaved) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            hero: heroSaved
        })
    })

})

router.put('/heroe/:id', (req,res) => {
    let id = req.params.id

    let body = req.body

    HeroModel.findByIdAndUpdate(id, body, {new: true}, (err, heroUpdated) => {
        
        if(err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            hero: heroUpdated
        })
    })

})

router.delete('/heroe/:id', (req,res) => {

    let id = req.params.id
    HeroModel.findByIdAndRemove(id, (err, heroRemoved) => {

        if(err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            hero: heroRemoved
        })
    })

})

module.exports = router