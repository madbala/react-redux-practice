import React from "react";
import loginImg from "../../assets/images/login.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import "./register.css";

export class Register extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Register in", values);
            setSubmitting(false);
          }, 500);
        }}


        validationSchema={Yup.object().shape({
          username: Yup.string().required("Username Required"),
          email: Yup.string()
            .email()
            .required("Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/(?=.*[0-9])/, "Password must contain a number.")
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          } = props;
          return (


            < form onSubmit={handleSubmit} >
              <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
                <div className="content">
                  <div className="image">
                    <img src={loginImg} />
                  </div>

                  <div className="form">


                    <div className="form-group">

                      <label htmlFor="username">Username</label>
                      <input
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.username && touched.username && "error"}
                      />

                      {errors.username && touched.username && (
                        <div className="input-feedback">{errors.username}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && "error"}
                      />

                      {errors.email && touched.email && (
                        <div className="input-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Password</label>
                      <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password && "error"}
                      />

                      {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="footer">
                  <button type="submit" className="btn" disabled={isSubmitting}>
                    Register
          </button>
                </div>
              </div>

            </form>


          );
        }}
      </Formik >
    );
  }
}

export default Register;