import React from "react";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from "./axiosWithAuth";

const EditCardForm = () => {
  return (
    <div className='edit-background'>
    <div className="edit-form">
    <Form>
    <div className='edit-form-header'>
    <h2>Edit Your Card</h2>
    </div>
    <div className='edit-form-body'><label>
    First Name:
    <Field className='fields' type="text" name="fname" />
    </label>
    <label>
    Last Name:
    <Field  className='fields' type="text" name="lname" />
    </label>
    <label>
    Title:
    <Field className='fields' type="text" name="title" />
    </label>
    <label>
    Company:
    <Field className='fields' type="text" name="busname" />
    </label>
    <label>
    Phone:
    <Field className='fields' type="tel" name="userphone" />
    </label>
    <label>
    Email:
    <Field className='fields' type="email" name="useremail" />
    </label>
    <label>
    Address:
    <Field className='fields' type="text" name="useraddress" />
    </label>
    <label>
    City:
    <Field className='fields' type="text" name="usercity" />
    </label>
    <label>
    State:
    <Field className='fields' type="text" name="userState" />
    </label>
    <label>
    Zip Code:
    <Field className='fields' type="text" name="userzip" />
    </label></div>
    <div className='edit-form-footer'>
    <button type='submit'>Submit</button> <button>Cancel</button>
    </div>
    </Form>
    </div></div>
  );
};

const id = localStorage.getItem("CONTACTID");
export const FormikEditForm = withFormik({
  mapPropsToValues({
    fname,
    lname,
    title,
    busname,
    userphone,
    useremail,
    useraddress,
    usercity,
    userState,
    userzip
  }) {
    return {
      fname: fname || "",
      lname: lname || "",
      title: title || "",
      busname: busname || "",
      userphone: userphone || "",
      useremail: useremail || "",
      useraddress: useraddress || "",
      usercity: usercity || "",
      userState: userState || "",
      userzip: userzip || ""
    };
  },
  //========Validation Schema========
  //========End Validation Schema====
  handleSubmit(values, { props }) {
    console.log("values on put", values)
    axiosWithAuth()
      .put(`https://cardorganizer.herokuapp.com/api/contact/${id}`, values)
      .then(res => {
        props.history.push("/home");
      })
      .catch(err => {
        console.log("error putting", err);
      });
  }
})(EditCardForm);
