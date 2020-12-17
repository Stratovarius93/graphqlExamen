import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './graphql/resolvers/resolvers';
const typeDefs = `
	type Query {
		user: [User]
	}
	type User {
		_id: ID
		name: String,
		email: String,
		age: Int,
		address: String,
		phone: String
	}
	input UserInput {
		name: String,
		email: String,
		age: Int,
		address: String,
		phone: String
	}

	type Mutation {
		createUser(input: UserInput): User
	}

`;
export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})
