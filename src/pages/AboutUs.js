import Introduction from "../components/pageComponents/Introduction";
import ContactForm from "../components/pageComponents/ContactForm";


function AboutUs() {

  function sendContactHandler(formData) {
    fetch(
      "https://japan2u-contactform-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }
  return (
    <div>
      <Introduction />
      <hr />
      <ContactForm onSubmit={sendContactHandler} />
    </div>
  );
}

export default AboutUs;
