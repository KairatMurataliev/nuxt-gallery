const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');
const path = require('path');

const config = require('../config');
const auth = require('../middleware/auth');
const User = require('../models/User');
const Photo = require('../models/Photo');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const createRouter = () => {
    const router = express.Router();

    router.get('/', async (req, res) => {
        const photos = await Photo.find().populate('author');

        if(!photos) {
            res.status(500).send({message: 'No photos yet'});
        }

        res.send(photos);
    });

    router.post('/add-photo', [auth, upload.single('photo')], (req, res) => {
        const photoData = req.body;

        if (req.file) {
            photoData.photo = req.file.filename;
        } else {
            photoData.photo = null;
        }

        photoData.author = req.user._id;
        const photo = new Photo(photoData);

        photo.save()
            .then(photo => res.send(photo))
            .catch(error => res.status(400).send(error));
    });

    router.get('/:id', async (req, res) => {
        const id = req.params.id;

        const photos = await Photo.find({author: id});
        const author = await User.findById(id);

        if(!photos) {
            res.status(500).send({message: 'This author has not added photos!'});
        }

        res.send({photos, author});
    });

    router.get('/onePhoto/:id', (req, res) => {
        const id = req.params.id;
        Photo.findOne({_id: id}).then(photo => {
            res.send(photo);
        });
    });


    router.delete('/:id', auth, (req, res) => {
        const id = req.params.id;

        Photo.remove({_id: id})
            .then(result => {
                res.send(result)
            }).catch(error => {
                console.log(error);
        })
    });

    return router;
};

module.exports = createRouter;
