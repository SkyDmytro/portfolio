import { ReactElement } from "react";
import { HeaderNavigarionMenu } from "./HeaderNavigarionMenu";

export const Header = (): ReactElement => {
  return (
    <header className="bg-blue py-4 absolute w-full">
      <div className="container flex items-center justify-between font-bold">
        <span>Skydan Dmytro</span>
        <HeaderNavigarionMenu />
      </div>
    </header>
  );
};
