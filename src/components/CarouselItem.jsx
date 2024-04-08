
const CarouselItem = ({ image }) => {
  return (
    <div>
      <div className="shadow slide-item transition-all">
        <img
          src={image}
          className="object-cover h-48 rounded"
          alt="car" />
      </div>
    </div>
  );
};

export default CarouselItem;
