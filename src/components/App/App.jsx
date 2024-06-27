import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import initialValuesContacts from '/src/initialValuesContacts.json';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import css from './App.module.css'


export default function App (){
    const [valuesContacts, setValuesContacts] = useState(() => {
        const localStorageData = localStorage.getItem("valuesContacts")
        if (localStorageData !== null) {
            return JSON.parse(localStorageData)
        }
        return (initialValuesContacts)
    });

    useEffect(() => {
        localStorage.setItem("valuesContacts", JSON.stringify(valuesContacts))
    }, [valuesContacts]);

    const [filter, setFilter] = useState ('');


    const addContact = (newContact) => {
        setValuesContacts((prevContacts) => {
            return [...prevContacts, newContact];
        });
    };


    const deleteContact = (contactId) => {
        setValuesContacts(prevContacts => {
            return (prevContacts.filter((contact) => contact.id !== contactId))
        })
    }

    const visibleContacts = valuesContacts.filter(contact => 
        contact.name.toLowerCase().includes(filter.toLowerCase()));


    return (
        <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm onAdd={addContact}/>
            <SearchBox value={filter} onFilter={setFilter} />
            <ContactList valuesContacts={visibleContacts} onDelete={deleteContact}/>
        </div>
    );
}