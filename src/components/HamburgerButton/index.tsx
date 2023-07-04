import { MouseEventHandler } from "react";

import { ReactComponent as CloseIcon } from "assets/shared/mobile/icon-close.svg";
import { ReactComponent as HamburgerIcon } from "assets/shared/mobile/icon-hamburger.svg";

import classes from "./HamburgerButton.module.scss";

interface HamburgerButtonProps {
  onClick: MouseEventHandler | undefined;
  isOpen: boolean;
}

export const HamburgerButton = ({ onClick, isOpen }: HamburgerButtonProps): JSX.Element => (
  <button
    className={classes.hamburgerButton}
    onClick={onClick}
    type="button"
  >
    {isOpen ? <CloseIcon /> : <HamburgerIcon />}
  </button>
);
