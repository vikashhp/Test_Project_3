import MedicineShow from "./MedicineShow";

const Candy = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <MedicineShow
        medicineName={item.medicineName}
        medicineDescription={item.medicineDescription}
        medicinePrice={item.medicinePrice}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Candy;
