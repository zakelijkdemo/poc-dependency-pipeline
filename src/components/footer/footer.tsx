"use client";
import { DsFooter } from "@cz/cz-react-ui-library";
import { footerData } from "./footer.data";

const props = footerData;

function Footer() {
  return (
    <DsFooter
      quickLinksNavigation={props.quickLinks}
      footerNavigation={props.footerNav}
      userInfo={props.userInfo}
      payOff="Zorg die verder gaat"
      onClick={() => props.onClick}
      brand="cz"
    />
  );
}
export default Footer;
