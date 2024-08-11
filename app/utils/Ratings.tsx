import { AiFillStar } from "react-icons/ai";

type Props = {
  rating: number;
};

const Ratings: React.FC<Props> = ({ rating }) => {
  // Generate star elements
  const stars = Array.from({ length: 5 }, (_, i) => {
    // Calculate the star size based on the rating
    const isFractional =
      i + 1 === Math.ceil(rating) && !Number.isInteger(rating);
    const starSize = isFractional ? 17 : 20;

    return (
      <AiFillStar
        key={i}
        size={starSize}
        color="#f6b100"
        className="mr-2 cursor-pointer"
      />
    );
  });

  return <div className="flex mt-1 ml-2 800px:mt-0 800px:ml-0">{stars}</div>;
};

export default Ratings;
