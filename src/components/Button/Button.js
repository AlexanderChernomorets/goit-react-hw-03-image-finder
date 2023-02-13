import { LoadMoreBtn } from './Button.styled';

function Button({ onNextFetch }) {
  return (
    <LoadMoreBtn type="button" onClick={onNextFetch}>
      Load More
    </LoadMoreBtn>
  );
}

export default Button;
