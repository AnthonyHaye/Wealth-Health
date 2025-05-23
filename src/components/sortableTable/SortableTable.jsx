import { useMemo } from "react";
import PropTypes from "prop-types";
import { useSort } from "../../context/SortContext";

export default function SortableTable({ columns, data }) {
  const { sortConfig, handleSort } = useSort();

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key]?.toString().toLowerCase();
      const bVal = b[sortConfig.key]?.toString().toLowerCase();
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  return (
    <table className="sortable-table">
      <thead>
        <tr>
          {columns.map(({ label, key }) => (
            <th key={key} onClick={() => handleSort(key)}>
              {label} {sortConfig.key === key && (sortConfig.direction === "asc" ? "↑" : "↓")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.length > 0 ? (
          sortedData.map((item, i) => (
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
