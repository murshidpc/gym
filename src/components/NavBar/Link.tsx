import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
  setIsMenuOn: (value: boolean) => void;
};

const Link = (props: Props) => {
  const { page, selectedPage, setSelectedPage, setIsMenuOn } = props;
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } hover:text-primary-300 transition duration-500`}
      onClick={() => {
        setIsMenuOn(false);
        setSelectedPage(lowerCasePage);
      }}
      href={`#${lowerCasePage}`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
