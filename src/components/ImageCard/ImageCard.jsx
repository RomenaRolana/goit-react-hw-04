import css from "./ImageCard.module.css";
const ImageCard = ({ image, onClick }) => {
  return (
    <div>
      <img
        src={image.cover_photo.urls.small}
        alt={image.alt_description}
        className={css.galleryImg}
        onClick={() => onClick(image)}
      />
    </div>
  );
};

export default ImageCard;
