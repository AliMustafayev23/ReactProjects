import * as Yup from "yup";

export const customerValidationSchema = Yup.object().shape({
  name: Yup.string().required("this field can not be empty").min(4, "max 4"),
  email: Yup.string()
    .required("this field can not be empty")
    .email("Invalid email"),
  phone: Yup.string().required("this field can not be empty").max(8, "max 8"),
  website: Yup.string().required("this field can not be empty"),
  message: Yup.string()
    .required("this field can not be empty")
    .max(40, "max 40 character"),
});
5;
