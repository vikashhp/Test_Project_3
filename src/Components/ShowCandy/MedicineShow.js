const MedicineShow = (props) => {
  return (
    <div>
      <li>
        <h2>Medicine Name-{props.medicineName}' '</h2>
        <h2>Medicine Description-{props.medicineDescription}' '</h2>
        <h2>Medicine Price-{props.medicinePrice}</h2>
      </li>
    </div>
  );
};

export default MedicineShow;
