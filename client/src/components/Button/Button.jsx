import s from "./Button.module.css";

const Button = () => {
  return (
    <button className={s.button} type="button">
      Start the Race!
    </button>
  );
};

export default Button;
