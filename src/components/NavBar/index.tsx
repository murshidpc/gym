import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  setSelectedPage: (value: SelectedPage) => void;
  selectedPage: SelectedPage;
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuOn, setIsMenuOn] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const navBackgroundColor = isTopOfPage ? "" : "bg-primary-100";

  return (
    <nav
      className={`${navBackgroundColor} ${flexBetween} fixed w-full z-30 top-0 py-6`}
    >
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* LEFT */}
          <img src={Logo} alt="Logo" />
          {/* RIGHT */}
          {isAboveMediumScreen ? (
            <div className={`${flexBetween} w-full`}>
              {/* INNER LEFT */}
              <div className={`${flexBetween} text-sm gap-8`}>
                <Link
                  selectedPage={selectedPage}
                  page="Home"
                  setSelectedPage={setSelectedPage}
                  setIsMenuOn={setIsMenuOn}
                />
                <Link
                  selectedPage={selectedPage}
                  page="Benifites"
                  setSelectedPage={setSelectedPage}
                  setIsMenuOn={setIsMenuOn}
                />
                <Link
                  selectedPage={selectedPage}
                  page="Our Classes"
                  setSelectedPage={setSelectedPage}
                  setIsMenuOn={setIsMenuOn}
                />
                <Link
                  selectedPage={selectedPage}
                  page="Contact Us"
                  setSelectedPage={setSelectedPage}
                  setIsMenuOn={setIsMenuOn}
                />
              </div>
              {/* INNER RIGHT */}
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Become a member
                </ActionButton>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuOn(!isMenuOn)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>

      {/* SIDE MENU */}
      {!isAboveMediumScreen && isMenuOn && (
        <div className="fixed right-0 bottom-0 h-full w-[300px] bg-secondary-400 drop-shadow-xl">
          <div
            className="flex justify-end p-12"
            onClick={() => setIsMenuOn(false)}
          >
            <XMarkIcon className="h-6 w-6 text-gray-400" />
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              selectedPage={selectedPage}
              page="Home"
              setSelectedPage={setSelectedPage}
              setIsMenuOn={setIsMenuOn}
            />
            <Link
              selectedPage={selectedPage}
              page="Benifites"
              setSelectedPage={setSelectedPage}
              setIsMenuOn={setIsMenuOn}
            />
            <Link
              selectedPage={selectedPage}
              page="Our Classes"
              setSelectedPage={setSelectedPage}
              setIsMenuOn={setIsMenuOn}
            />
            <Link
              selectedPage={selectedPage}
              page="Contact Us"
              setSelectedPage={setSelectedPage}
              setIsMenuOn={setIsMenuOn}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
