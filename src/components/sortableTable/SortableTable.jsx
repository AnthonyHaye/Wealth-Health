import PropTypes from "prop-types";
import { useSort } from "../../context/SortContext";
export default function SortableTable({ columns, data }) {
  const { sortConfig, handleSort } = useSort();

  return (
    <table className="sortable-table">
      <thead>
        <tr>
          {columns.map(({ label, key }) => (
            <th key={key} onClick={() => handleSort(key)}>
              {label}{" "}
              {sortConfig.key === key &&
                (sortConfig.direction === "asc" ? "↑" : "↓")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item, i) => (
            <tr key={i}>
              {columns.map(({ key }) => (
                <td key={key}>{item[key]}</td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length}>Aucun résultat</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

SortableTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};
