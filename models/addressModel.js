import {Schema, model}  from "mongoose";

const addressSchema = new Schema({
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        addressLine1: {
            type: String,
            required: true
        },
        country:{
            type: String,
            required: true
        },
        region:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        postalCode:{
            type: String,
            required: true
        },
        createAt: {
            type: Date,
            default: Date.now,
        },
        updateAt: {
            type: Date,
            default: Date.now,
        }
})

export default model('Address', addressSchema);