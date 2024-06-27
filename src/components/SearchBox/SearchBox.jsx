import { useId } from 'react'
import css from './SearchBox.module.css'

export default function SearchBox ({value, onFilter}){

    const filterInputId = useId();  

    return (
        <div className={css.container}>
            <label className={css.formField} htmlFor={filterInputId}>Find contacts by name
                <input type="text" value={value} onChange={e => onFilter(e.target.value)} className={css.input}/>
            </label>
        </div>
    );
}