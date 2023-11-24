import style from '../styles/Search.module.scss';
import React from 'react';
import {useForm} from 'react-hook-form';

interface Props {
    onSubmit: (t: string) => void
    lastSearched: string
}

export default function Search({onSubmit, lastSearched}: Props) {
    const {register, handleSubmit} = useForm();

    return (
        <form className={style.form} onSubmit={handleSubmit(({text}) => onSubmit(text.trim()))}>
            <input {...register('text')} placeholder={lastSearched}/>
            <button type="submit">Поиск</button>
        </form>
    );
}
