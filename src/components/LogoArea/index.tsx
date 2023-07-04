import cn from "classnames";
import { useEffect, useState } from "react";

import { Shelf, Spacer, Stack } from "components/common/layout";
import {
  FeedbackBoardMobileText,
  FrontendMentorMobileText,
} from "components/common/typography";
import { HamburgerButton } from "components/HamburgerButton";

import classes from "./LogoArea.module.scss";

interface LogoAreaProps {
  onClick: () => void;
  isOpen: boolean;
}

export const LogoArea = ({ onClick, isOpen }: LogoAreaProps): JSX.Element => {
  const [logoAreaHidden, setLogoAreaHidden] = useState(false);

  // this makes makes the logo area appear and disappear based on the direction of scroll
  useEffect(() => {
    let scrollPosition = window.scrollY;

    const scrollHandler = (): void => {
      setLogoAreaHidden(scrollPosition < window.scrollY);
      scrollPosition = window.scrollY;
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const classnames = cn({[classes.logoArea]: true, [classes.hidden]: logoAreaHidden});

  return (
    <Shelf className={classnames}>
      <Stack
        align="left"
        spacing="none"
      >
        <FrontendMentorMobileText color="white">Frontend Mentor</FrontendMentorMobileText>
        <FeedbackBoardMobileText color="white">Feedback Board</FeedbackBoardMobileText>
      </Stack>
      <Spacer />
      <HamburgerButton isOpen={isOpen} onClick={onClick} />
    </Shelf>
  );
};
