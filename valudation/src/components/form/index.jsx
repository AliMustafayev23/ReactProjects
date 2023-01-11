import React from "react";
import { useFormik } from "formik";
import { customerValidationSchema } from "./schema";
import axios from "axios";
import "./index.scss";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
const Form = () => {
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      },
      validationSchema: customerValidationSchema,
      onSubmit: (values) => {
        axios.post("https://northwind.vercel.app/api/customers", values);
        resetForm();
      },
    });

  return (
    <div className="form">
      <form id="product-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="left">
            <p>
              <label htmlFor="name" className="m-2">
                Name*
              </label>
            </p>
            <input
              id="name"
              name="name"
              type="text"
              onChange={handleChange}
              value={values.name}
            />
            {errors.name && touched.name && (
              <div style={{ color: "red", fontSize: "16px" }}>
                {errors.name}
              </div>
            )}
            <p>
              <label htmlFor="phone" className="m-2">
                Phone*
              </label>
            </p>
            <input
              id="phone"
              name="phone"
              type="number"
              onChange={handleChange}
              value={values.phone}
            />
            {errors.phone && touched.phone && (
              <div style={{ color: "red", fontSize: "16px" }}>
                {errors.phone}
              </div>
            )}
          </div>
          <div className="right">
            <p>
              <label htmlFor="email" className="m-2">
                Email*
              </label>
            </p>
            <input
              id="email"
              name="email"
              type="text"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && touched.email && (
              <div style={{ color: "red", fontSize: "16px" }}>
                {errors.email}
              </div>
            )}

            <p>
              {" "}
              <label htmlFor="website" className="m-2">
                Website*
              </label>
            </p>
            <input
              id="website"
              name="website"
              type="website"
              onChange={handleChange}
              value={values.website}
            />
            {errors.website && touched.website && (
              <div style={{ color: "red", fontSize: "16px" }}>
                {errors.website}
              </div>
            )}
          </div>
        </div>
        <div className="footer">
          <div>
            <p>
              <label htmlFor="message">Message*</label>
            </p>
            <textarea
              name="message"
              id="message"
              cols="50"
              rows="4"
              onChange={handleChange}
              value={values.message}
            ></textarea>

            {errors.message && touched.message && (
              <div style={{ color: "red", fontSize: "16px" }}>
                {errors.message}
              </div>
            )}
          </div>
        </div>
        <div className="btn">
          <button type="submit" className="btn btn-success mt-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
