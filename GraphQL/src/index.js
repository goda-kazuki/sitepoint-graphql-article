import express from 'express';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();
app.use(cors());

app.use('/', (req, res) => {
  graphqlHTTP({
    schema: schema,
    pretty: true,
    graphiql: true,
    rootValue: {},
  })(req, res);
});

const port = process.env.NODE_ENV ? 80 : 5000;

app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
