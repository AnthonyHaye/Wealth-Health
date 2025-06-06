import PropTypes from "prop-types";
import { useState } from "react";



export default function SelectInput({ id, label, value, onChange, options, searchable = false }) {
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleInputChange = (e) => {
    const input = e.target.value;
    onChange(e);
    if (searchable) {
      const filtered = options.filter(option =>
        option.toLowerCase().startsWith(input.toLowerCase())
      );
      setFilteredOptions(filtered.length ? filtered : options);
    }
  };

  return (
        <div className="form-group">
          <label htmlFor={id}>{label}</label>
          {searchable ? (
            <>
              <input
                id={id}
                name={id}
                type="text"
                value={value}
                onChange={handleInputChange}
                list={`${id}-list`}
                required
              />
              <datalist id={`${id}-list`}>
                {filteredOptions.map((option) => (
                  <option key={option} value={option} />
                ))}
              </datalist>
            </>
          ) : (
            <select id={id} name={id} value={value} onChange={onChange} required>
              <option value="">Select {label}</option>
              {options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          )}
        </div>
      );
    }

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  searchable: PropTypes.bool,
};


