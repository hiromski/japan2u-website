import classes from './Modal.module.css'

export function Modal(props) {
    function closeHandler() {
        props.onClose();
    }
    return(
        <div className={classes.modal}>
            <p style={{marginBottom: '30px'}}>
                Thank you for your comment!
            </p>
            <button className={classes.submit} onClick={closeHandler}> Close </button>
        </div>
    )
} 

export default Modal