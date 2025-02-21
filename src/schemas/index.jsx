import * as Yup from "yup";

export const signUpSchema = Yup.object({
  user_name: Yup.string().min(4).max(25).required("Please enter your name "),
  user_email: Yup.string().email().required("Please enter your email "),
  message: Yup.string().min(5).required("please enter eny message"),

})