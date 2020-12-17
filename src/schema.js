import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './graphql/resolvers/resolvers';
const typeDefs = `
	type Query {
		getUsers: [User]
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
		getUserByID(_id: ID):User
		createUser(input: UserInput): User
		deleteUser(_id: ID): User
		updateUser(_id: ID, input: UserInput): User
	}

`;
export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})
