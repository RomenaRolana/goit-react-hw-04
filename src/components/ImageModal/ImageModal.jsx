import Modal from "react-modal";
import css from "./ImageModal.module.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
};

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      className={css.Modal}
      isOpen={!!image}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel='Image Modal'
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      shouldReturnFocusAfterClose={false}
    >
      <div className={css.containerImg}>
        {/* <button onClick={onClose}>X</button> */}
        <img
          className={css.imgModal}
          src={image.cover_photo.urls.regular}
          alt={image.cover_photo.alt_description}
        />
        <p>{image.cover_photo.alt_description}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
