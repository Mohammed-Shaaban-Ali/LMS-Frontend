import { AiFillStar } from "react-icons/ai";

type Props = {
  rating: number;
};

function Ratings({ rating }: Props) {
  const stars = [];
  // rating=5
  for (let i = 1; i <= 5; i++) {
    const starProps = {
      key: i,
      size: i === Math.ceil(rating) && !Number.isInteger(rating) ? 17 : 20,
      color: "#f6b100",
      className: "mr-2 cursor-pointer"
    };

    stars.push(<AiFillStar {...starProps} />);
  }

  return <div className="flex mt-1 ml-2 800px:mt-0 800px:ml-0">{stars}</div>;
}

export default Ratings;
