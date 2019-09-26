import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

const AddCard = () => {
  const [input, setInput] = useState({ number: null });
  const handleChange = e => {
    console.log(input);
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  console.log("input recheck", input)
  const handleSubmit = e => {
    e.preventDefault();
    const id = localStorage.getItem("USERID");
    axiosWithAuth()
      .post(
        `https://cardorganizer.herokuapp.com/api/users/${id}/contact/${input}`
      )
      .then(res => {
        console.log(res);
      }).catch(err=>{console.log("error adding", err)});
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="number" onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddCard;
