import { ReactNode } from "react";
import classes from "./layout.module.scss";

interface Props {
  readonly children: ReactNode;
  readonly className?: string;
  readonly spacing?: string;
  readonly align?: "bottom" | "center" | "top";
}

const spacings: Record<string, string> = {
  none: "0",
  medium: "1rem",
};

export const Shelf = ({
  children,
  className = "",
  spacing = "none",
  align = "center",
}: Props): JSX.Element => {
  return (
    <div
      className={`${classes.shelf} ${className}`}
      style={{alignItems: align, gap: spacings[spacing]}}
    >
      {children}
    </div>
  );
};
