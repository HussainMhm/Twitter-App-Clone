import {
    DrawerContentScrollView,
    DrawerItemList,
    createDrawerNavigator,
} from "@react-navigation/drawer";
import { withLayoutContext } from "expo-router";
import { Text } from "react-native";

const DrawerNavigator = createDrawerNavigator().Navigator;

const Drawer = withLayoutContext(DrawerNavigator);

export const unstable_settings = {
    initialRouteName: "(tabs)",
};

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <Text style={{ alignSelf: "center", fontSize: 20, marginVertical: 20 }}>
                Hi, Hussain!
            </Text>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

export default function DrawerLayout() {
    return (
        <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="(tabs)" options={{ headerShown: false, title: "Home" }} />
            <Drawer.Screen name="bookmarks" options={{ headerShown: false, title: "Bookmarks" }} />
            <Drawer.Screen
                name="twitter-blue"
                options={{ headerShown: false, title: "Twitter Blue" }}
            />
        </Drawer>
    );
}
