import { AiFillStar } from "react-icons/ai";

type Props = {
  rating: number;
};

function Ratings({ rating }: Props) {
  const start = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      start.push(
        <AiFillStar
          key={i}
          size={20}
          color="#f6b100"
          className="mr-2 cursor-pointer"
        />
      );
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      start.push(
        <AiFillStar
          key={i}
          size={17}
          color="#f6ba00"
          className="mr-2 cursor-pointer"
        />
      );
    } else {
      start.push(
        <AiFillStar
          key={i}
          size={20}
          color="#f6ba00"
          className="mr-2 cursor-pointer"
        />
      );
    }
  }
  return <div className="flex mt-1 ml-2 800px:mt-0 800px:ml-0">{start}</div>;
}

export default Ratings;
