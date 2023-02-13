import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

function ImageGallery({ images, openModal }) {
  return (
    <Gallery>
      {images.map(({ id, smallImage, alt, largeImage }) => (
        <ImageGalleryItem
          key={id}
          alt={alt}
          smallImage={smallImage}
          largeImage={largeImage}
          openModal={openModal}
        />
      ))}
    </Gallery>
  );
}

export default ImageGallery;
