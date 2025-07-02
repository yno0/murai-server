import {Schema, model} from "mongoose";

const preferenceSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    language: {
        type: String,
        enum: ['Taglish', 'English', 'Tagalog']
    },
    whitelistSite:{
        type: [String],
    },
    whitelistTerms:{
        type: [String],
    },
    flagStyle: {
        type: String,
        enum: ['default', 'custom', 'asterisk', 'underline', 'blur', 'highlight', 'none'],
    },
    isHighlighted:{
        type: Boolean,
        default: false,
    },
    color: {
        type: String,
        default: '#FF0000',
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    updatedAt:{
        type: Date,
        default: Date.now,
    }
})

export default model('Preference', preferenceSchema);