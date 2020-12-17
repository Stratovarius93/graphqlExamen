import User from '../../models/user';

export const resolvers = {
	Query: {
		async getUsers() {
			return await User.find()
		},
	},
	Mutation: {
		async getUserByID(_, {_id}) {
			return await User.findById(_id)
		},
		async createUser(_, {input}) {
			const newUser = new User(input)
			await newUser.save();
			return newUser
		},
		async deleteUser(_, {_id}) {
			return await User.findByIdAndDelete(_id)
		},
		async updateUser(_, {id, input}) {
			return await Message.findByIdAndUpdate(_id, input)
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
