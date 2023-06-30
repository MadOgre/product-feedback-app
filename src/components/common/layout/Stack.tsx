import { ReactNode } from "react";
import classes from "./layout.module.scss";

interface Props {
  readonly children: ReactNode;
  readonly className?: string;
  readonly spacing?: string;
  readonly align?: "center" | "left" | "right";
}

const spacings: Record<string, string> = {
  none: "0",
  medium: "1rem",
};

export const Stack = ({
  children,
  className = "",
  spacing = "medium",
  align = "center",
}: Props): JSX.Element => {
  return (
    <div
      className={`${classes.stack} ${className}`}
      style={{alignItems: align, gap: spacings[spacing]}}
    >
      {children}
    </div>
  );
};
