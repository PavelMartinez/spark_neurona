import { PaymentDone } from '@/typescript/enums/AccountTable/PaymentDone';
import mongoose, { Schema, Types, model } from 'mongoose';

export const ReferalSchema = new Schema({
    email: { type: String, required: true },
    value: { type: Number, required: true },
}, { timestamps: true });

export const Referal = mongoose.models.Referal || mongoose.model('Referal', ReferalSchema);