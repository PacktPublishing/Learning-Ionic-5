const mongoose = require('mongoose');
const schema = mongoose.Schema;
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const userSchema = new schema({
    email: {
        type: String,
        unique: 'Two users cannot share the same email address ({VALUE})'
    },
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
});

// Enable beautifying on this schema
userSchema.plugin(beautifyUnique);

module.exports = mongoose.model('User', userSchema);
