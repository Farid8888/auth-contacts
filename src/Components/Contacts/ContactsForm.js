import classes from './ContactsForm.module.css';
import {useRef} from 'react';



const ContactsForm = (props)=>{
    
const nameRef = useRef()
const numberRef =useRef()
const onSubmitHandler =(event)=>{
event.preventDefault()
const contactsData={
    name:nameRef.current.value,
    number:numberRef.current.value
}
props.addContact(contactsData)
}
    return(
       <form className={classes.form} onSubmit={onSubmitHandler}>
           <div className={classes.control}>
           <label htmlFor='name'>Name</label>
           <input type='text' required ref={nameRef}/>
           </div>
           <div className={classes.control}>
           <label htmlFor='number'>Number</label>
           <input type='text' required ref={numberRef}/>
           </div>
           <div className={classes.btn}>
               <button type='submit'>Add</button>
           </div>
       </form>
    )
}

export default ContactsForm