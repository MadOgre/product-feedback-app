import classes from "./HelloHell.module.scss";

export const HelloHell = (): JSX.Element => {
  return (
    <>
      <h1 className={classes["headers-suck"]}>Hell. I am in HEEEEEllll. Hello!!!!</h1>
      <p>THis is the most annoying thing in the world.</p>
    </>
  );
};
