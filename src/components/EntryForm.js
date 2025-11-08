import React, { useState } from "react";

const EntryForm = () => {
  const [form, setForm] = useState({
    streetName: "",
    houseNumber: "",
    utilitiesMarked: {
      gas: "",
      electric: "",
      water: "",
      telecom: "",
      sewer: ""
    },
    utilitiesUnmarked: {
      manuallyLocated: false,
      enviro: false
    },
    miscConcerns: [],
    comments: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Later: send to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="streetName" placeholder="Street Name" onChange={handleChange} />
      <input name="houseNumber" placeholder="House Number" onChange={handleChange} />
      {/* Repeat for utilitiesMarked */}
      <textarea name="comments" placeholder="Comments" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EntryForm;
