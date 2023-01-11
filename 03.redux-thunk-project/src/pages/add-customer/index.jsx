import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { addCustomerAction } from "../../redux/action/customers.actions";

const AddCustomer = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      companyName: "",
      contactTitle: "",
      address: {
        city: "",
        country: "",
      },
    },
    onSubmit: (values) => {
      values.address.city = values.city;
      values.address.country = values.country;
      console.log(values);
      dispatch(addCustomerAction());
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="companyName">Company Name</label>
      <input
        id="companyName"
        name="companyName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.companyName}
      />
      <label htmlFor="contactTitle">Contact Title</label>
      <input
        id="contactTitle"
        name="contactTitle"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.contactTitle}
      />
      <label htmlFor="country">Country</label>
      <input
        id="country"
        name="country"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.country}
      />
      <label htmlFor="city">City</label>
      <input
        id="city"
        name="city"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.city}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddCustomer;
