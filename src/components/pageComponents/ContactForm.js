import Poster from "../ui/Poster";
import classes from "./ContactForm.module.css";
import Modal from '../ui/Modal'

import { useRef, useState } from 'react' 
import Backdrop from "../ui/BackDrop";

function ContactForm(props) {
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const commentRef = useRef()

    const [modalisOpen, setModalisOpen] = useState(false)

    function submitHandler(event) {
        event.preventDefault();

        const enteredFirstName = firstNameRef.current.value
        const enteredLastName = lastNameRef.current.value
        const enteredEmail = emailRef.current.value
        const enteredComment = commentRef.current.value
        
        const contactForm = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
            email: enteredEmail,
            comment: enteredComment
        }

        props.onSubmit(contactForm)
        setModalisOpen(true)
    }

    function CloseModalHandler() {
        setModalisOpen(false)
        window.location.reload();
    }
  return (
    <Poster>
      <form onSubmit={submitHandler}>
        <h1 style={{ paddingLeft: "30px" }}>Contact Form</h1>
        <ul style={{ listStyle: "none" }}>
          <li>
            <h2>Name</h2>
            <input placeholder="First Name" className={classes.inputText} ref={firstNameRef} required id='firstName' />
            <input placeholder="Last Name" className={classes.inputText} ref={lastNameRef} required id='lastName'/>
          </li>
          <li>
            <h2>Email</h2>
            <input className={classes.inputText} style={{ width: "510px" }} ref={emailRef} required id='email'/>
          </li>
          <li>
            <h2>Comments</h2>
            <textarea className={classes.inputArea} ref={commentRef} required id='comment'/>
          </li>
          <li>
            <button className={classes.submit}>Submit</button>
          </li>
        </ul>
      </form>
       {modalisOpen && <Modal onClose={CloseModalHandler}/>}
       {modalisOpen && <Backdrop onClose={CloseModalHandler} />}
    </Poster>
  );
}

export default ContactForm;
