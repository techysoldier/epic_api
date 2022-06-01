import React, { useContext } from "react";
import {useNavigate} from "react-router-dom"
import useCustomForm from "../../hooks/useCustomForm";
import useAuth from "../../hooks/useAuth";
import axios from "axios";


let initialValues = {
  name:"",
  address: "",
};

const RegisterBusiness = () => {
  const navigate = useNavigate()
  const [formData, handleInputChange, handleSubmit] =useCustomForm(initialValues)

async function postNewBusiness(){
  try{
    let response = await axios.post("http://127.0.0.1:8000/api/epic/post_business/", formData, {

    })
    navigate("/")
  }catch(error){
    console.log(error.message);

  }
}


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

export default RegisterBusiness


// const RegisterBusiness = () => {
//   const { registerBusiness } = useContext(AuthContext);
//   const defaultValues = {
//     name: "",
//     address: "",
//   };
//   const [formData, handleInputChange, handleSubmit] = useCustomForm(
//     defaultValues,
//     registerBusiness
//   );

//   return (
//     <div className="container">
//       <form className="form" onSubmit={handleSubmit}>
//         <label>
//           Name:{" "}
//           <input
//             type="text"
//             name="Business Name"
//             value={formData.Name}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//          Address:{" "}
//           <input
//             type="text"
//             address="Address"
//             value={formData.Address}
//             onChange={handleInputChange}
//           />
//         </label>
//         <p style={{ fontSize: "12px" }}>
//         </p>
//         <button>Register Business!</button>
//       </form>
//     </div>
//   );
// };

// export default RegisterBusiness;
