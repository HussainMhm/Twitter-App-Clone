import { createDrawerNavigator } from "@react-navigation/drawer";
import { withLayoutContext } from "expo-router";

import Bookmarks from "./bookmarks";
import TwitterBlue from "./twitter-blue";

const DrawerNavigator = createDrawerNavigator().Navigator;

const Drawer = withLayoutContext(DrawerNavigator);

export default function DrawerLayout() {
    return <Drawer />;
}
