import React,{useState} from "react";
import loginImg from "../../assets/images/login.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import "./register.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const Login = function(props) {
  const [formValues,doFormValues] = useState({ email: "", password: "" });
  var navigate = useNavigate();
  const doconsole = (values)=>{
    // console.log("log from login",navigate);
    const {email,password} = values;
    axios
      .post("/login", {
        email: email,
        password:password
      }) 
      .then(function (val) {
        alert(val.data.message);
        // window.location.reload();
        // axios.get("/home").then((val)=>{console.log("i m from home")});
        if(val.data.route==='/'){
          window.location.reload();
          return;
        }else{
          navigate(val.data.route);
          return;
        }
        
      }) 
      .catch(function () { 
        alert(val.data.message);
      });
  }



    return (
      <Formik
        initialValues={formValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Login", values);
            doconsole(values);
            setSubmitting(false);
          }, 500);
        }}


        validationSchema={Yup.object().shape({
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
              <div className="base-container" ref={props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                  <div className="image">
                    <img src={loginImg} />
                  </div>

                  <div className="form">


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
                    Login
          </button>
                </div>
              </div>

            </form>


          );
        }}
      </Formik >
    );
}





// export class Login extends React.Component {
//   constructor(props) {
//     super(props);

//   }

//   render() {
//     return (
//       <Formik
//         initialValues={{ username: "", password: "" }}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             console.log("Login", values);
//             setSubmitting(false);
//           }, 500);
//         }}


//         validationSchema={Yup.object().shape({
//           username: Yup.string().required("Username Required"),
//           password: Yup.string()
//             .required("No password provided.")
//             .min(8, "Password is too short - should be 8 chars minimum.")
//             .matches(/(?=.*[0-9])/, "Password must contain a number.")
//         })}
//       >
//         {props => {
//           const {
//             values,
//             touched,
//             errors,
//             isSubmitting,
//             handleChange,
//             handleBlur,
//             handleSubmit
//           } = props;
//           return (


//             < form onSubmit={handleSubmit} >
//               <div className="base-container" ref={this.props.containerRef}>
//                 <div className="header">Login</div>
//                 <div className="content">
//                   <div className="image">
//                     <img src={loginImg} />
//                   </div>

//                   <div className="form">


//                     <div className="form-group">

//                       <label htmlFor="username">Username</label>
//                       <input
//                         name="username"
//                         type="text"
//                         placeholder="Enter your username"
//                         value={values.username}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className={errors.username && touched.username && "error"}
//                       />

//                       {errors.username && touched.username && (
//                         <div className="input-feedback">{errors.username}</div>
//                       )}
//                     </div>

//                     <div className="form-group">
//                       <label htmlFor="email">Password</label>
//                       <input
//                         name="password"
//                         type="password"
//                         placeholder="Enter your password"
//                         value={values.password}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className={errors.password && touched.password && "error"}
//                       />

//                       {errors.password && touched.password && (
//                         <div className="input-feedback">{errors.password}</div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="footer">
//                   <button type="submit" className="btn" disabled={isSubmitting}>
//                     Login
//           </button>
//                 </div>
//               </div>

//             </form>


//           );
//         }}
//       </Formik >

//     );
//   }
// }