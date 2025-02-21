import { useFormik } from 'formik';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { signUpSchema } from '../src/schemas';

const Contact = () => {
  const form = useRef();

  const initialValues = {
    user_name: "",
    user_email: "",
    message: "",
  }

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {

      emailjs
        .sendForm('service_92c5kp4', 'template_xvinx6g', form.current, {
          publicKey: 'bLsGA6ocCUv47fHTw',
        })
        .then(
          () => {
            toast.success('SUBMITED SUCCESSFULLY!')
            action.resetForm();
          },
          (error) => {
            console.log('FAILED...', error.text);
            toast("FAILED... ");
          },
        );
    }
  });

  return (
    <div className="container">
      <div className="contact-wrapper">


        <div className="headingContact">
          <h1>Contact Us</h1>
        </div>
        <div className="card bg-blue-box">

          <form ref={form} onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                name="user_name"
                placeholder="Enter Your Name"
                autoComplete="off"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.user_name && touched.user_name ? <p>{errors.user_name}</p> : null}

            </div>

            <div className="input-container">
              <input
                type="email"
                name="user_email"
                placeholder="Enter Your Email"
                autoComplete="off"
                value={values.user_email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.user_email && touched.user_email ? <p>{errors.user_email}</p> : null}
            </div>


            <div className="input-container">
              <textarea
                name="message"
                className="message"
                cols={50}
                rows={10}
                autoComplete="off"
                placeholder="Enter Your Message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.message && touched.message ? <p>{errors.message}</p> : null}
            </div>

            <button
              type="submit"
              value="SEND"
              className="send-btn">
              SEND
            </button>

          </form>
        </div>
      </div>

    </div>
  )
}
export default Contact