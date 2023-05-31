import Script from "next/script";

export default function Contact() {
    return <section id="contact" className="page-section">
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>

            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-line"></div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <form action="https://formspree.io/f/mzbqqprk" method="POST" name="sentMessage"
                          className="needs-validation"
                          id="contactForm"
                          noValidate>
                        <div className="control-group">
                            <div className="form-group form-floating mb-3 controls">
                                <input type="text" name="message" className="form-control" placeholder="Name" id="name"
                                       required/>
                                <label htmlFor="name">Name</label>
                                <div className="invalid-feedback">
                                    Please enter your name.
                                </div>
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group form-floating mb-3 controls">
                                <input type="email" name="_replyto" className="form-control" placeholder="Email Address"
                                       id="email" required/>
                                <label htmlFor="email">Email Address</label>
                                <div className="invalid-feedback">
                                    Please enter your email address.
                                </div>
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group form-floating mb-3 controls">
                                <input type="text" name="message" className="form-control" placeholder="Phone number"
                                       id="phone" required
                                />
                                <label htmlFor="phone">Phone number</label>
                                <div className="invalid-feedback">
                                    Please enter your phone number.
                                </div>
                            </div>
                        </div>
                        <div>
                            <input type="hidden" name="_subject" value="New submission!"/>
                            <input type="text" name="_gotcha" style={{'display': 'none'}}/>
                        </div>

                        <div className="control-group">
                            <div className="form-group form-floating mb-3 controls">
                                <textarea rows="5" name="message" className="form-control" placeholder="Message"
                                          id="message" required></textarea>
                                <label htmlFor="message">Message</label>
                                <div className="invalid-feedback">
                                    Please enter a message.
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div id="success"></div>
                        <div className="row">
                            <div className="form-group col-xs-12">
                                <button type="submit" className="btn btn-success btn-lg">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Script strategy="afterInteractive">
            {` 
             (function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
             `}
        </Script>
    </section>


}