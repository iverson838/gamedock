import CategoryItem from "../Components/CategoryItem";
import "../Category.scss";

const directory = [
  {
    id: 1,
    title: "Computers",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "Laptops",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 3,
    title: "Consoles",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 4,
    title: "Components",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 5,
    title: "Acessories",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
];
const Home = () => {
  return (
    <div className="categories-container">
      {directory.map((props) => (
        <CategoryItem key={props.id} category={props} />
      ))}
    </div>
  );
};

export default Home;
