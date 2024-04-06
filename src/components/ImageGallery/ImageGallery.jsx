import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.galleryList}>
      {Array.isArray(images) &&
        images.map((image, index) => {
          return (
            <li key={index} className={css.galleryListItem}>
              <ImageCard image={image} onClick={onClick} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
