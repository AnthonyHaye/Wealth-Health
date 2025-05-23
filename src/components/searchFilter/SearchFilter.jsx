import PropTypes from "prop-types";
import { useState } from "react";
import "./searchFilter.scss";

export default function SearchFilter({ columns, onChange }) {
  const [text, setText] = useState("");
  const [column, setColumn] = useState("");

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onChange({ text: newText, column });
  };

  const handleColumnChange = (e) => {
    const newCol = e.target.value;
    setColumn(newCol);
    onChange({ text, column: newCol });
  };

  const handleReset = () => {
    setText("");
    setColumn("");
    onChange({ text: "", column: "" });
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Rechercher..."
        value={text}
        onChange={handleTextChange}
      />
      <select value={column} onChange={handleColumnChange}>
        <option value="">Toutes les colonnes</option>
        {columns.map(({ label, key }) => (
          <option key={key} value={key}>{label}</option>
        ))}
      </select>
      <button onClick={handleReset}>Réinitialiser</button>
    </div>
  );
}

SearchFilter.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};
