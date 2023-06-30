import { Shelf, Spacer, Stack } from "components/common/layout";
import {
  FeedbackBoardMobileText,
  FrontendMentorMobileText,
} from "components/common/typography";

import { HamburgerButton } from "components/HamburgerButton";

import classes from "./LogoArea.module.scss";

export const LogoArea = (): JSX.Element => {
  return (
    <Shelf className={classes.logoArea}>
      <Stack
        align="left"
        spacing="none"
      >
        <FrontendMentorMobileText color="white">Frontend Mentor</FrontendMentorMobileText>
        <FeedbackBoardMobileText color="white">Feedback Board</FeedbackBoardMobileText>
      </Stack>
      <Spacer />
      <HamburgerButton onClick={(e): void => alert("works")} />
      {/* <button type="button"><HamburgerIcon /></button> */}
    </Shelf>
  );
};
