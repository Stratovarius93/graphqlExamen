import mongoose from 'mongoose';

export async  function connect() {
	try {
	await mongoose.connect('mongodb://localhost:27017/admin', {useNewUrlParser: true});
console.log('>>> MongoDB is connected ...')
	
	} catch (error) {
		/* handle error */
		console.log('Error: ')
		console.log(error)
	}
}
