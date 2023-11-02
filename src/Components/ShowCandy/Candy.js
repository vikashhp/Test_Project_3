import ShowCandy from "./ShowCandy";

const Candy = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <ShowCandy
          candyName={item.candyName}
          candyDescription={item.candyDescription}
          candyPrice={item.candyPrice}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Candy;
