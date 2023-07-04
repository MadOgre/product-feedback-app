import { forwardRef } from "react";

import { Dashboard } from "components/Dashboard";

import classes from "./MobileLayout.module.scss";

export const Sidebar = forwardRef<HTMLDivElement>((_, ref): JSX.Element => {
  return (
    <div className={classes.sidebar} ref={ref}>
      <Dashboard />
    </div>
  );
});

Sidebar.displayName = "Sidebar";
