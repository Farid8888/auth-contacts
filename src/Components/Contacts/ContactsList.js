import ContactsItem from "./ContactsItem"
import {Fragment,useContext} from 'react'
import SearchContact from "./SearchContact"
import AuthContext from "../../store/auth-context"



const ContactsList =(props)=>{
  const name = useContext(AuthContext).name
    let content = props.contacts.map(contact=>{
        return <ContactsItem key ={contact.id} name={contact.name} number={contact.number} id={contact.id} />
    })
    console.log(name.length)
    return(
         <Fragment>
           <SearchContact/> 
           {name.length <=0 && content }
        </Fragment>
    )
}

export default ContactsList