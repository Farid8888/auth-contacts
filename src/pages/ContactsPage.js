import Contacts from '../Components/Contacts/Contacts'
import {useContext} from 'react'
import useHttp from '../hooks/use-http'
import { getAllContacts } from '../Components/lib/api'
import NoContacts from '../Components/Contacts/NoContancts'
import { useEffect } from 'react/cjs/react.development'
import AuthContext from '../store/auth-context'
import LoadingSpinner from '../Components/ui/LoadingSpinner'

const ContacsPage =()=>{
    const {sendRequest,data,status} = useHttp(getAllContacts)
    const effect = useContext(AuthContext).effect
    useEffect(()=>{
        sendRequest()
        },[sendRequest,effect])
    
        if(status === 'pending'){
           return <div style={{textAlign:'center',marginTop:'2rem'}}><LoadingSpinner/></div>
        }
        if(data.length <=0){
            return <NoContacts/>
        }
    return <Contacts contacts={data} />
}

export default ContacsPage