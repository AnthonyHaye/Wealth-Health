import PropTypes from "prop-types";
import "../../styles/main.scss";

export default function Modal({ title, message, onClose, children }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {title && <h2 className="modal-title">{title}</h2>}
        {message && <p className="modal-message">{message}</p>}
        {children}
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};
