import React from "react";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from "./axiosWithAuth";

const EditCardForm = () => {
  return (
    <div className="edit-form">
      <Form>
        <h2>Edit Your Card</h2>
        <label>
          First Name:
          <Field type="text" name="fname" />
        </label>
        <label>
          Last Name:
          <Field type="text" name="lname" />
        </label>
        <label>
          Title:
          <Field type="text" name="title" />
        </label>
        <label>
          Company:
          <Field type="text" name="busname" />
        </label>
        <label>
          Phone:
          <Field type="tel" name="userphone" />
        </label>
        <label>
          Email:
          <Field type="email" name="useremail" />
        </label>
        <label>
          Address:
          <Field type="text" name="useraddress" />
        </label>
        <label>
          City:
          <Field type="text" name="usercity" />
        </label>
        <label>
          State:
          <Field type="text" name="userState" />
        </label>
        <label>
          Zip Code:
          <Field type="text" name="userzip" />
        </label>
        <button type='submit'>Submit</button> <button>Cancel</button>
      </Form>
    </div>
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
