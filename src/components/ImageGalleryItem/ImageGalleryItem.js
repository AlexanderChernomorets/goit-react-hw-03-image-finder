import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

function ImageGalleryItem({ key, alt, smallImage, largeImage, openModal }) {
  return (
    <GalleryItem key={key} onClick={openModal}>
      <GalleryImage src={smallImage} alt={alt} data-large={largeImage} />
    </GalleryItem>
  );
}

export default ImageGalleryItem;
