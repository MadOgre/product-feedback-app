import { ReactEventHandler } from "react";

import { ReactComponent as HamburgerIcon } from "assets/shared/mobile/icon-hamburger.svg";

import classes from "./HamburgerButton.module.scss";

interface Props {
  onClick?: ReactEventHandler | undefined;
}

export const HamburgerButton = ({ onClick = undefined }: Props): JSX.Element => (
  <button
    className={classes.hamburgerButton}
    onClick={onClick}
    type="button"
  >
    <HamburgerIcon />
  </button>
);
