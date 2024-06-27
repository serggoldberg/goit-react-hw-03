import React from 'react';
import css from './Contact.module.css'

export default function Contact ({data: { name, number, id }, onDelete}){
    return(
        <div className={css.container}>
            <div className={css.shell}>
                <p>{name}</p>
                <p>{number}</p>
            </div>
            <button onClick={() => onDelete(id)} className={css.button}>
            Delete
            </button>
        </div>
    );
}