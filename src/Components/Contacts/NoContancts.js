import classes from './NoContacts.module.css'
import {useRouteMatch,useHistory} from 'react-router-dom'



const NoContacts =()=>{
    const match = useRouteMatch()
    const history =useHistory()
const onReplace =()=>{
history.push(`${match.url}/new-contact`)
}
    return(
     <div className={classes.noContacts}>
         <h1>No contacts added yet</h1>
         <button type='button' onClick={onReplace}>Add Contact</button>
     </div>
    )
}

export default NoContacts



