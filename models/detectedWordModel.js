import { Schema, model } from 'mongoose';

const detectedWordSchema = new Schema({
    word: {
        type: String,
        required: true,
    },
    context: {
        type: String,
        required: true,
    },
    sentimentScore: {
        type: Number,
        required: true,
    },
    activityLogId: {
        type: Schema.Types.ObjectId,
        ref: 'UserActivity',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export default model('DetectedWord', detectedWordSchema);