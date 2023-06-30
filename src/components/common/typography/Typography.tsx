import { ReactNode } from "react";
import classes from "./typography.module.scss";
import colors from "colors.module.scss";

interface Props {
  readonly children: ReactNode;
  color?: "standard-blue" | "white";
}

type TypographyComponent = (props: Props) => JSX.Element;

const payload: Record<string, TypographyComponent> = {};

const componentNames = [
  "FrontendMentorMobileText",
  "NoFeedbackMobileText",
  "FeedbackBoardMobileText",
];

componentNames.forEach((item) => {
  payload[item] = ({children, color = "standard-blue"}: Props): JSX.Element => {
    return (
      <div
        className={classes[item]}
        style={{color: colors[color]}}
      >
        {children}
      </div>
    );
  };
});

export default payload;
