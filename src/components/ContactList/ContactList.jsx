import React from 'react';
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

export default function ContactList( {valuesContacts, onDelete} ){
    return (
        <ul className={css.list}>
            {valuesContacts.map((valuesContact) => (
            <li key={valuesContact.id}>
                <Contact  data={valuesContact} onDelete={onDelete}/>
            </li>
            ))}
        </ul>
    );
}