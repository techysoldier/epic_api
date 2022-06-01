import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

const RegisterBusiness = () => {
  const { RegisterBusiness } = useContext(AuthContext);
  const defaultValues = {
    name: "",
    address: "",
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    RegisterBusiness
  );

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="Business Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
         address:{" "}
          <input
            type="text"
            name="Address"
            value={formData.address}
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
