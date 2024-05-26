import express, { response } from 'express'
import cors from 'cors'
//statement - 2 projeects running in 2 diff projects


const app = express()

app.use(express.json())
const corsOptions = {
    origin: '*', // Allow all origins
    methods: 'GET,POST,PUT,DELETE', // Allow specific HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allow specific headers
    credentials: true, // Enable sending cookies with requests
  };
app.use(cors(corsOptions))

app.post('/user', (request, response) => {
    const { body } = request
    console.log('body recive from 5000', body)
    console.log('Gaetting data from user api')

    response.send({ name: "saif", age: 34 })
})

app.get('/', (req, res)=>{
    res.send({mseeage:'response from 4000 port'})
})


app.listen(4000, () => console.log('App is running on port 4000'))