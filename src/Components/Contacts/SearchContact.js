import classes from './SearchContact.module.css'
import {useRef,useEffect,Fragment,useContext} from 'react'
import { getAllContacts } from '../lib/api'
import useHttp from '../../hooks/use-http'
import SearchContactItem from './SearchContactItem'
import AuthContext from '../../store/auth-context'

const SearchContact =()=>{
    const {sendRequest,data} = useHttp(getAllContacts)
    const name = useContext(AuthContext).name
    const changeName = useContext(AuthContext).setNameFunction
   const searchRef = useRef()
   const changeHandler =(event)=>{
    changeName(event.target.value)
   }  
   
   useEffect(()=>{
       if(searchRef.current.value===name){
        sendRequest()
       }
   },[sendRequest,searchRef,name])

   const filteredValue = data.filter(value=>{
       return value.name.includes(searchRef.current.value)
   })

   let content = filteredValue.map(value=>{
       return <SearchContactItem key={value.id} name={value.name} number={value.number}/>
   })
    return(
        <Fragment>
         <div className={classes.search}>
             <label htmlFor='search'>Search UserName</label>
             <input id='search' type='search' ref={searchRef} onChange={changeHandler}/>
         </div>
         {name.length >0 && content}
         </Fragment>
    )
}

export default SearchContact