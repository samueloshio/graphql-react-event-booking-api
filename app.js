import expres from 'express';
import bodyParser from 'body-parser';

const app = expres();

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.send('Server Running 🚀🚀🚀');
});
// Expose App
app.listen(6065);
