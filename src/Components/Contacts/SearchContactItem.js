import classes from './SearchContactItem.module.css'




const SearchContactItem =(props)=>{
    return(
        <section className ={classes.control}>
        <div className={classes.contacts}>
            <div>
            <h3>Name: {props.name}</h3>
            <p>Number: {props.number}</p>
            </div>
        </div>
    </section>
    )
}

export default SearchContactItem