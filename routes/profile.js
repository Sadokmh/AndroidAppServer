const express = require('express');
const path = require('path');
const router = express.Router();

const personne = require('../models/personne')
const admins = require('../models/admins')

//  storage personne with file into database
router.post('/', (req,res) => {
    const {img} = req.files;
    
    img.mv(path.resolve(__dirname, '..', 'uploads/personne',img.name), (error) => {
        personne.create({
            ...req.body,
            img:`/personne/${img.name}`,
        }, (err, pers) => {
            console.log(pers);
            res.redirect('/');
        })
    })
});

router.post('/p' , (req,res) => {
    personne.create(req.body)
    .then(team => {
        console.log('ok add')
		res.json({
			confirmation:'success',
			data:team
		})
	})
	.catch(err => {
        console.log('not add')

		res.json({
            
			confirmation:'fail',
            message:err.message()
		})
	})

})

//  get personne object from database by id
router.get('/personne/:id', async (req, res) => {
    const per =  await personne.findById(req.params.id);
    console.log(per);
});






//get all personnes 
router.get('/',function(req,res){
    console.log('getting all personnes');
    personne.find({})
    .exec(function(err,pers){
        if (err){
            res.send('error has occured');
        }
        else{
           // console.log(pers);            
            res.json(pers);
        }
    })
});




//  storage admins with file into database
router.post('/admins', (req,res) => {
    const {img} = req.files;
    
    img.mv(path.resolve(__dirname, '..', 'uploads/admins',img.name), (error) => {
        admins.create({
            ...req.body,
            img:`/admins/avatar${Date.now().toString()}${img.name}`,
        }, (err, admn) => {
            console.log(admn);
            res.redirect('/');
        })
    })
});

//  get admins object from database by id
router.get('/admins/:id', async (req, res) => {
    const admn =  await personne.findById(req.params.id);
    console.log(admn);
});



module.exports = router 