const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

module.exports = {
    mongodbURI: 'mongodb://' + DB_USERNAME + ':' + DB_PASSWORD + '@cluster0-io4zj.mongodb.net/test?retryWrites=true&w=majority'
};
