import styles from "./Buttons.module.css";
const ButtonContainer = () => {
  const btns = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {btns.map((btn) => (
        <button className={styles.button}>C</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
