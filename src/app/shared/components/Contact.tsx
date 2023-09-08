import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="section section-contact">
        <div className="container">
          <div className="contact-wrapper row item-center">
            <div className="contact-description col col-6 col-sm-12">
              <p className="contact-txt">
                Subscribe to our newsletter andreceive exclusive offers every
                week
              </p>
            </div>
            <div className="contact-form col col-6 col-sm-12">
              <form
                action="#"
                className="form-contact d-flex flex-wrap justify-end"
              >
                <input
                  type="email"
                  className="form-contact-input col-lg-12"
                  placeholder="Enter your email"
                  required
                />
                <input
                  className="btn btn-primary btn-subcribe"
                  type="submit"
                  value="SUBSCRIBE"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
