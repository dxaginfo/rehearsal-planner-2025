const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => res.send('Rehearsal Planner API'));
app.listen(4000,()=>console.log('API running on 4000'));