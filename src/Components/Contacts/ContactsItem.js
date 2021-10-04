import classes from './ContactsItem.module.css';
import useHttp from '../../hooks/use-http';
import { removeContact } from '../lib/api';
import {useHistory} from 'react-router-dom';
import {useEffect,useContext} from 'react';
import AuthContext from '../../store/auth-context';
import SearchContact from './SearchContact';


const ContactsItem = (props)=>{
    const {sendRequest,status} = useHttp(removeContact)
    const changeEffect = useContext(AuthContext).changeEffect
    const effect = useContext(AuthContext).effect
  const onRemove =()=>{
   sendRequest(props.id)
  } 

  useEffect(()=>{
   if(status === 'completed'){
       changeEffect()
   }
  },[status])
    return(
        <section className ={classes.control}>
        <div className={classes.contacts}>
            <div>
            <h3>Name: {props.name}</h3>
            <p>Number: {props.number}</p>
            </div>
            <div className={classes.btn}>
            <button type='button' onClick={onRemove}>Remove</button>
            </div>    
        </div>
    </section>
    )
}

export default ContactsItem