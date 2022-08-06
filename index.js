import express from 'express';
import bodyparser from 'body-parser';
import myRoutes from './router.js';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyparser.json());




app.use('/',myRoutes);
app.get('/',(req,res) => {res.send('Welome to Dairy Milk Application')})

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

app.listen(PORT, () => console.log(`Server running , today's date is : ${date}`))

