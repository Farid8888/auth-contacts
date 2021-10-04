import classes from "./Contacts.module.css";
import { Fragment} from "react";
import ContactsList from "./ContactsList";
import {Link,Route} from 'react-router-dom';
import {useRouteMatch} from 'react-router-dom';



const Contacts = (props) => {
    const match =useRouteMatch()
  return (
    <Fragment>
      <ContactsList contacts={props.contacts}/>
      <Link to ={`${match.url}/new-contact`}>
      <Route path='/contacts' exact>
       <div className={classes.buttons}>
            <button type="button">
              Add Contact
            </button>
          </div>
          </Route>
          </Link>
    </Fragment>
  );
};

export default Contacts;
