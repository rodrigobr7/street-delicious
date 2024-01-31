const app = require('./app');

app.set('port', process.env.PORT || 5001);

const server = app.listen(app.get('port'), () => {
    console.log(`Express server running on PORT → ${server.address().port}`);
});