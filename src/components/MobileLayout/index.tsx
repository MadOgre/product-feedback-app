import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { CSSTransition as ReactCSSTransition } from "react-transition-group";

import { LogoArea } from "components/LogoArea";
import { debounce, getTransitionClassnames } from "utils";

import { ShadowMask } from "./ShadowMask";
import { Sidebar } from "./Sidebar";
import classes from "./MobileLayout.module.scss";

interface MobileLayoutProps {
  children: ReactNode;
}

export const MobileLayout = ({ children }: MobileLayoutProps): JSX.Element => {

  // these refs are necessary to deal with deprecation error inside react-transition-group
  const sidebarNodeRef = useRef(null);
  const maskNodeRef = useRef(null);

  const [dashboardOpen, setDashboardOpen] = useState(false);

  const toggleDashboardOpen = useCallback(() => {
    setDashboardOpen((isOpen) => !isOpen);
  }, []);

  const closeDashboard = useCallback(() => {
    setDashboardOpen(false);
  }, []);

  // track whether dashboard is open and disable body scroll as needed
  useEffect(() => {
    if (dashboardOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [dashboardOpen]);

  const toggleDashboardOpenDebounced = debounce(toggleDashboardOpen, 500);

  return (
    <div className={classes.mobileLayoutMain}>

      <LogoArea
        isOpen={dashboardOpen}
        onClick={toggleDashboardOpenDebounced}
      />

      <ReactCSSTransition
        classNames={getTransitionClassnames("sidebar", classes)}
        in={dashboardOpen}
        mountOnEnter
        nodeRef={sidebarNodeRef}
        timeout={500}
        unmountOnExit
      >
        <Sidebar ref={sidebarNodeRef} />
      </ReactCSSTransition>

      <ReactCSSTransition
        classNames={getTransitionClassnames("shadowMask", classes)}
        in={dashboardOpen}
        mountOnEnter
        nodeRef={maskNodeRef}
        timeout={500}
        unmountOnExit
      >
        <ShadowMask onClick={closeDashboard} ref={maskNodeRef} />
      </ReactCSSTransition>

      {children}

    </div>
  );
};
