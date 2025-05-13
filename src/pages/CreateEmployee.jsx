import { useContext, useState } from "react";
import "../styles/main.scss";
import TextInput from "../components/input/textInput/TextInput";
import DateInput from "../components/input/dateInput/DateInput";
import SelectInput, { DEPARTEMENTS, US_STATES } from "../components/input/selectInput/SelectInput";
import { WealthContext } from "../context/WealthContext";

export default function CreateEmployee() {
  const { addEmployee } = useContext(WealthContext);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "Sales",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id || e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(formData);
    console.log("Saved employee:", formData);
    setShowModal(true);
  };

  return (
    <div>
      <div className="form-container">
        <h1 className="form-title">HRnet – Create Employee</h1>

        <form onSubmit={handleSubmit} className="employee-form">
          <div className="form-row">
            <div className="form-group">              
              <TextInput id="firstName" label="First Name" value={formData.firstName} onChange={handleChange} type="text"/>
              <TextInput id="lastName" label="Last Name" value={formData.lastName} onChange={handleChange} type="text"/>
            </div>            
          </div>

          <div className="form-row">
            <div className="form-group">
              <DateInput id="dateOfBirth" label="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} />
              <DateInput id="startDate" label="Start Date" value={formData.startDate} onChange={handleChange} />  
            </div>
          </div>

          <fieldset className="form-fieldset">
            <legend className="fieldset-title">Address</legend>
            <div className="form-row">
              <div className="form-group">
                <TextInput id="street" label="Street" value={formData.street} onChange={handleChange} type="text"/>
                <TextInput id="city" label="City" value={formData.city} onChange={handleChange} type="text"/>
                <SelectInput id="state" label="State" value={formData.state} onChange={handleChange} options={ US_STATES} searchable={true} />
                <TextInput id="zipCode" label="Zip Code" value={formData.zipCode} onChange={handleChange} type="number" />
                <SelectInput id="department" label="Department" value={formData.department} onChange={handleChange} options={DEPARTEMENTS} />
             </div>   
            </div>
          </fieldset>

          <button type="submit" className="submit-button">
            Save Employee
          </button>
        </form>
      </div>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2 className="modal-title">Employee Created!</h2>
            <button onClick={() => setShowModal(false)} className="modal-close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
