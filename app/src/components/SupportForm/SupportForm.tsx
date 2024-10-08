"use client";

import React, { useActionState } from 'react'
import { Button } from '../ui/primitives'
import { createQuestion } from '@/actions/createQuestion';
import { useFormState, useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';

const initialState = {
    message: "",
};


const SupportForm = () => {
    const [state, formAction] = useFormState(createQuestion, initialState);
    const t = useTranslations();
    const { pending } = useFormStatus();

    return (
        <form action={formAction} className="support-form">
            <div className="support-form__row">
                <div className="support-form__field">
                    <label htmlFor="name" className='support-form__label'>
                        {t('SupportPage.form.name')}
                    </label>
                    <input type="text" className="support-form__input" name='name' placeholder='Peter' required/>
                </div>
                <div className="support-form__field">
                    <label htmlFor="email" className='support-form__label'>
                        {t('SupportPage.form.email')}
                    </label>
                    <input type="email" className="support-form__input" name='email' placeholder='qwerty@gmail.com' required/>
                </div>
            </div>
            <div className="support-form__row">
                <div className="support-form__field">
                    <label htmlFor="text" className='support-form__label'>
                        {t('SupportPage.form.text')}
                    </label>
                    <textarea className="support-form__input support-form__textarea" name='text' placeholder='Your message...' required/>
                </div>
            </div>
            <div className="support-form__row">
                <Button size='medium' type='submit' className="support-form__button" isDisabled={pending}>{t('SupportPage.form.button')}</Button>
            </div>
            {state?.message && 
                <div className="support-form__row">
                    <div className={`support-form__message ${state?.message != "success" ? "support-form__message--error" : ""}`}>
                        <p>
                            {state?.message === "success" ? t('SupportPage.form.status.success') : t('SupportPage.form.status.error')}
                        </p>
                    </div>
                </div>
            }
        </form>
    )
}

export default SupportForm