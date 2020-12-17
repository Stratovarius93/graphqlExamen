import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema from './schema';
import {connect} from './database';
const app = express();
connect()
app.use('/graphql', graphqlHTTP({
	graphiql: true,
	schema: schema
}));
app.get('/', (req, res) => {
	res.json({
		message: 'Examen GraphQl'
	})
})
app.listen(4000, () => {console.log("Connected...")})
