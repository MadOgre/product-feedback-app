import { forwardRef } from "react";

import classes from "./MobileLayout.module.scss";

interface ShadowMaskProps {
  onClick: () => void;
}

export const ShadowMask = forwardRef<HTMLDivElement, ShadowMaskProps>(({ onClick }, ref): JSX.Element => {
  return (
    <div className={classes.shadowMask} onClick={onClick} ref={ref} />
  );
});

ShadowMask.displayName = "ShadowMask";
