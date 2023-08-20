import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "./UserAction";
import "./SignIn.css";
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    console.log(values);

    // Simulate async sign-in process
    setTimeout(() => {
      login(values);
      alert("Sign-in successful");
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        props.login({
          ...values,
        });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="w-full h-fit p-16 bg-teal-500">
          <div className="login">
            <div className="form">
              <Form>
                {/* <div>
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Sign In
          </button> */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Login</button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ user }) => ({
  logging: user.logging,
  loginError: user.loginError,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      login,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
