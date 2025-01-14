"use client";
import { DsMainMenu } from "@cz/cz-react-ui-library";
import { menuData } from "./menu.data";

const props = menuData;

function Menu() {
  return (
    <DsMainMenu
      currentDomain={"Zakelijk"}
      navDomain={props.navigationDomain}
      navPrimary={props.navigation}
      navAccount={props.navigationAccount}
      {...props}
    />
  );
}
export default Menu;
