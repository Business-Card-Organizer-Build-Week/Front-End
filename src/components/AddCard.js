import React, { useState } from "react";

const AddCard = () => {
  const [input, setInput] = useState({number: null});
    const handleChange = e => {
    console.log(input);
    setInput({...input, [e.target.name]: e.target.value});
  };
  return (
    <>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="number" onChange={handleChange} />
      </form>
    </>
  );
};

export default AddCard;
