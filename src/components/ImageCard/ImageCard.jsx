import css from "./ImageCard.module.css";

 const ImageCard = ({ src, alt, large, onClick }) => {
  const handleClick = () => {
    onClick({ src: large, alt });
  };

  return (
    <div className={css.card} onClick={handleClick}>
      <img src={src} alt={alt} className={css.image} />
    </div>
  );
};
export default ImageCard;
