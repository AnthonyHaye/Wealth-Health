import PropTypes from "prop-types";
// import "../styles/main.scss";

export default function DateInput({ id, label, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={"date"}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

DateInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
