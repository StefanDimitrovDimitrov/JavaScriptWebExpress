const { Schema, model } = require('mongoose');

const schema = new Schema({
    title: {
        type: String, 
        required: [true, 'Title is required'] },
    description: {
        type: String, 
        maxLength:[50, 'Description must be less than 50 charecters long'],
        required: [true, 'Title is required'] },
    imageUrl: {
        type: String, 
        required: [true, 'Title is required'] },
    public: {
        type: Boolean, 
        default: false },
    createdAt: {
        type: Date, 
        default: Date.now },
    userLiked: [{
        type: Schema.Types.ObjectId, 
        ref:'User', 
        default:[] }],
    author: 
    {type: Schema.Types.ObjectId, ref:'User'}


});

module.exports = model('NEW_MODEL', schema)




// const NAME_PATTERN = /^[a-zA-Z0-9 ]+$/;
// const IMAGE_PATTERN = /^https?:\/\//;

// const schema = new Schema({
//     name: {
//         type: String,
//         required: [true, 'Cube name is required'],
//         minLength: [5, 'Cube name must be at least 5 characters long'],
//         match: [NAME_PATTERN, 'Cube name may contain only latin alphanumeric characters']
//     },
//     description: {
//         type: String,
//         required: [true, 'Description is required'],
//         minLength: 20,
//         maxLength: 500,
//         match: NAME_PATTERN
//     },
//     imageUrl: { type: String, required: true, match: IMAGE_PATTERN },
//     difficulty: { type: Number, min: 1, max: 6 },
//     comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
//     accessories: [{ type: Schema.Types.ObjectId, ref: 'Accessory' }],
//     author: { type: Schema.Types.ObjectId, ref: 'User' }
// });

// module.exports = model('Cube', schema);