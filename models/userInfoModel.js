import  { Schema, model } from "mongoose";


const UserInfoSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            unique:true
        },
        addressId: {
            type: Schema.Types.ObjectId,
            ref: 'Address',
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
        },
        gender:{
            type: String,
            enum: ['male', 'female', 'other']

        },
        phoneNumber: {
            type: String,
            required: true,
        },
        profilePicture: {
            type: String,
        },
        dateOfBirth: {
            type: Date,
            required: true,
        },
        createAt: {
            type: Date,
            default: Date.now,
        },
        updateAt: {
            type: Date,
            default: Date.now,
        }

    }
)

export default model('UserInfo', UserInfoSchema);