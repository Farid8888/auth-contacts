import ContactsForm from "../Components/Contacts/ContactsForm"
import useHttp from "../hooks/use-http"
import { addContact } from "../Components/lib/api"
import {useHistory} from 'react-router-dom'
import AuthContext from "../store/auth-context"
import {useEffect,useContext} from 'react'


const NewContactPage =()=>{
    const history = useHistory()
    const authLoggedIn = useContext(AuthContext).isLoggedIn
    const {sendRequest,error,status} = useHttp(addContact)
    useEffect(()=>{
        if(status === 'completed' && !error && authLoggedIn){
            history.push('/contacts')
        }
    },[history,status,error,authLoggedIn])

    const addContactHandler =(contactData)=>{
        sendRequest(contactData)
    }
    return(
      <ContactsForm addContact={addContactHandler}/>
    )
}

export default NewContactPage