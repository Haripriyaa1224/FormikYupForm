import * as yup from "yup";

export const basicSchema = yup.object({
    name:yup.string().required('Please Enter Your Name').min(2, 'name must be atleast 2 letters'),
    email: yup
    .string()
    .required('Email is Required')
    .test('email-validation', 'Invalid email', (value) => {
      // Check for a valid email structure
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    })
    .test('after-at', 'Email ends with gmail.com', (value) => {
      // Check if email has '@' and ensure domain suggestion
      if (value.includes('@g') && !value.endsWith('@gmail.com')) {
        return false;
      }
      return true;
    })
    .test('final-check', 'Email must be regex@gmail.com', (value) => {
      // Check for the specific email pattern
      const specificEmail = "regex@gmail.com";
      return value === specificEmail;
    }),
    password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Password is Required" })
    .required("Password is Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is Required"),
})