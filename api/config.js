const path = require('path');

const rootPath = __dirname;

module.exports = {
    rootPath,
    uploadPath: path.join(rootPath, '/public/uploads'),
    db: {
        url: 'mongodb://localhost:27017',
        name: 'PhotoGallery'
    },
    facebook: {
        appId: '644280075904288',
        appSecret: '1141fdfbab0ad6be0f181214223d5b09'
    }
};

