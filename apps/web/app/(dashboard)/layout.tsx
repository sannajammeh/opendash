import React from "react";
import classes from "./app.module.css";
import clsx from "clsx";
import SidePanel from "./components/SidePanel/SidePanel";
import Header from "./components/Header/Header";
import Outlet from "./Outlet";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <>
      <div className={classes.appGrid}>
        <aside
          className={clsx(
            classes.leftPanel,
            "border-r border-radix-slate6 !pt-0"
          )}
        >
          <SidePanel />
        </aside>
        <main className="flex-grow flex flex-col">
          <Header />
          <Outlet>{children}</Outlet>
        </main>
        {/* <aside className={clsx(classes.rightPanel, "")}>
          <div className="h-[46px] border-b border-radix-slate6"></div>
          <div className="p-3"></div>
        </aside> */}
      </div>
    </>
  );
};

export default layout;
