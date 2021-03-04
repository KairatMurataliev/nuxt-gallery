const mongoose = require('mongoose');
const config = require('./config');

const User = require('./models/User');
const Photo = require('./models/Photo');

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;

db.once('open', async () => {
    try {
        await db.dropCollection('photos');
        await db.dropCollection('users');
    } catch (e) {
        console.log('Collections were not present, skipping drop...');
    }

    console.log('collection is dropped');

    const [kairat, user, peterMckinnon] = await User.create({
        username: 'kairat',
        password: '123',
        avatar: 'avatar.jpg'
    }, {
        username: 'user',
        password: '123',
        avatar: 'avatar2.jpg'
    }, {
        username: 'Peter McKinnon',
        password: '123',
        avatar: 'avatar3.jpg'
    });

    console.log('user created');

    await Photo.create({
            author: kairat._id,
            title: 'Landscape',
            photo: 'photo1.jpeg',
        }, {
            author: kairat._id,
            title: 'Landscape 2',
            photo: 'photo2.jpeg',
        }, {
            author: kairat._id,
            title: 'Landscape 3',
            photo: 'photo3.jpeg'
        }, {
            author: peterMckinnon._id,
            title: 'Peter photo',
            photo: 'pm1.jpg'
        }, {
            author: peterMckinnon._id,
            title: 'Peter;s photo 2',
            photo: 'pm2.jpg'
        }, {
            author: peterMckinnon._id,
            title: 'Peters photo 2',
            photo: 'pm3.jpg'
        }, {
            author: user._id,
            title: 'City photo',
            photo: 'city1.jpg'
        }, {
            author: user._id,
            title: 'City photo 2',
            photo: 'city2.jpg'
        }, {
            author: user._id,
            title: 'City photo 3',
            photo: 'city3.jpg'
        }
    );

    console.log('photo creted');

    db.close();
});