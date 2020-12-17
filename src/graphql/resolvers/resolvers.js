import User from '../../models/user';

export const resolvers = {
	Query: {
		async user() {
			return await User.find()
		}
	},
	Mutation: {
		async createUser(_, {input}) {
			const newUser = new User(input)
			await newUser.save();
			return newUser
		}
	}
};
//mutation{
  //createTask(input: {
    //name: "Hola"
    //description: "hola 2"
  //}){
    //_id
    //name
    //description
    //number
  //}
//}
