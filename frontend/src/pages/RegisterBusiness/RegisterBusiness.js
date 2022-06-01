import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

const RegisterBusiness = () => {
  const { registerBusiness } = useContext(AuthContext);
  const defaultValues = {
    name: "",
    address: "",
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerBusiness
  );

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="Business Name"
            value={formData.Name}
            onChange={handleInputChange}
          />
        </label>
        <label>
         Address:{" "}
          <input
            type="text"
            address="Address"
            value={formData.Address}
            onChange={handleInputChange}
          />
        </label>
        <p style={{ fontSize: "12px" }}>
        </p>
        <button>Register Business!</button>
      </form>
    </div>
  );
};

export default RegisterBusiness;
