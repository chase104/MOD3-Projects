const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL_SUPER_SECRET, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});