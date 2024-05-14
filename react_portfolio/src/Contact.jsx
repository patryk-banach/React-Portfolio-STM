function Contact() {
    
    return (
      <div className="contact">
        <form>
          <h1 className="rubric">Say Hello!</h1>
          <label htmlFor="email">Your e-mail</label><br />
          <input type="text" id="email" name="email" /><br />
          <label htmlFor="subject">Subject</label><br />
          <input type="text" id="subject" name="subject" /><br />
          <label htmlFor="message">Message</label><br />
          <input type="text" id="message" name="message" />
        </form>
      </div>
    );
  }
  
  export default Contact;