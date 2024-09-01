import mongoose, { Schema, Types, model } from 'mongoose';
import { PaymentSchema } from './Payment'
import { ReferalSchema } from './Referal';

// Schema
const schema = new Schema({
    externalId: { type: String, required: true },
    coins: { type: Number, required: true, default: 0 },
    dollars: { type: Number, required: true, default: 0 },
    referalString: { type: String, required: true },
    payments: [PaymentSchema],
    referals: [ReferalSchema]
});

// `UserModel` will have `name: string`, etc.
const User = mongoose.models.User || mongoose.model('User', schema);

export default User;