import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Query {
    students: [Student]
    student(id: Int!): Student
  }

  type Student {
    id: Int
    name: String
    age: Int
    enroll: Boolean
  }
`;

const students = [
  { id: 1, name: 'Jordin', age: 20, enroll: true },
  { id: 2, name: 'Francisco', age: 25, enroll: false },
  { id: 3, name: 'Jorge', age: 30, enroll: false },
];

const resolvers = {
  Query: {
    students: () => students,
    student: (parent, args) => students.find(student => student.id === args.id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
