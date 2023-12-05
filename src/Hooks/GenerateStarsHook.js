const GenerateStarsHook = (ratingAverage) => {
  const stars = [];
  const fullStars = Math.floor(ratingAverage);
  const hasHalfStar = ratingAverage % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="star fas fa-star text-warning mr-1"></i>);
  }

  if (hasHalfStar) {
    stars.push(
      <i
        key={1 + stars.length}
        className="star fa-regular fa-star-half-stroke text-warning mr-1"
      ></i>
    );
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <i key={`empty-${i}`} className="star far fa-star text-warning mr-1"></i>
    );
  }

  return stars;
};

export default GenerateStarsHook;
