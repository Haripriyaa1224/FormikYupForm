import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit=()=>{
    console.log('Submitted');
}

const FormComponent = () => {
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit
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
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
