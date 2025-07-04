import { useState } from "react";
import "./pagination.scss";

export default function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [showJumpLeft, setShowJumpLeft] = useState(false);
  const [showJumpRight, setShowJumpRight] = useState(false);
  const [jumpInput, setJumpInput] = useState("");

  const visiblePages = () => {
    const pages = [];
    const maxVisible = 7;
    let start = Math.max(0, currentPage - 3);
    let end = Math.min(totalPages, start + maxVisible);

    if (end - start < maxVisible) {
      start = Math.max(0, end - maxVisible);
    }

    for (let i = start; i < end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handleJump = () => {
    const pageNum = parseInt(jumpInput, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      onPageChange(pageNum - 1);
      setShowJumpLeft(false);
      setShowJumpRight(false);
      setJumpInput("");
    }
  };

  return (
    <div className="pagination-wrapper">
      <span>Page {currentPage + 1} sur {totalPages}</span>

      {currentPage > 3 && (
        <button onClick={() => onPageChange(0)}>« Début</button>
      )}

      {currentPage > 3 && !showJumpLeft && (
        <button onClick={() => setShowJumpLeft(true)}>…</button>
      )}

      {showJumpLeft && (
        <span className="jump-form">
          <input
            type="number"
            placeholder="N°"
            value={jumpInput}
            onChange={(e) => setJumpInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleJump()}
          />
          <button onClick={handleJump}>OK</button>
        </span>
      )}

      {visiblePages().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page + 1}
        </button>
      ))}

      {currentPage < totalPages - 4 && !showJumpRight && (
        <button onClick={() => setShowJumpRight(true)}>…</button>
      )}

      {showJumpRight && (
        <span className="jump-form">
          <input
            type="number"
            placeholder="N°"
            value={jumpInput}
            onChange={(e) => setJumpInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleJump()}
          />
          <button onClick={handleJump}>OK</button>
        </span>
      )}

      {currentPage < totalPages - 4 && (
        <button onClick={() => onPageChange(totalPages - 1)}>Fin »</button>
      )}
    </div>
  );
}
