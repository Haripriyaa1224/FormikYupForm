import React,{useState} from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";



const FormComponent = () => {
    const [successMessage, setSuccessMessage] = useState(""); 

    const onSubmit=async (values, actions)=>{
        console.log('Submitted');
        await new Promise((resolve) =>setTimeout(resolve,1000));
        setSuccessMessage("Sign Up Successful");
        actions.resetForm();
    }

    setTimeout(() => {
        setSuccessMessage("");
      }, 25000);

  const {values, errors, touched, isSubmitting, isValid, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
    validateOnMount: true,
  });
//   console.log(values);
console.log(errors);
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
        <div>
      <label htmlFor="name">Name</label>
      <input
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        id="name"
        placeholder="Name"
        className={errors.name && touched.name ? 'input-error' : ''}
      />
      {errors.name && touched.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        type="email"
        id="email"
        placeholder="Email"
        className={errors.email && touched.email ? 'input-error' : ''}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        id="password"
        placeholder="Password"
        className={errors.password && touched.password ? 'input-error' : ''}
      />
      {errors.password && touched.password && <p className="error">{errors.password}</p>}
      </div>
      <div>
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        id="confirmPassword"
        placeholder="Confirm Password"
        className={errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''}
      />
      {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <button 
        disabled={!isValid || isSubmitting} 
        type="submit"
      >
        Submit
      </button>
     
    </form>
  );
};

export default FormComponent;
