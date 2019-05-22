import React from "react";

import Title from "../components/Title";

const Form = () => {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="How can we help you ?" />
          <form className="mt-5" netlify>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="Bes"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="bestech@bestech.com"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="What is the topic ?"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows="10"
                placeholder="What is the message ?"
                required
              />
            </div>

            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
