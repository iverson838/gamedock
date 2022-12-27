import "./categories.scss";

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

function App() {
  return (
    <div className="categories-container">
      {directory.map(({ title, id, imageUrl }) => (
        <div key={id} className="category-container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
