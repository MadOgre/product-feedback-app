import { Shelf, Spacer, Stack } from "components/common/layout";
import {
  FrontendMentorMobileText,
  FeedbackBoardMobileText,
} from "components/common/typography";

import { HamburgerButton } from "components/HamburgerButton";
// import { ReactComponent as HamburgerIcon } from "assets/shared/mobile/icon-hamburger.svg";

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
