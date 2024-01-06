import { View, FlatList, Pressable, StyleSheet } from "react-native";
import tweets from "../../../assets/data/tweets";
import Tweet from "../../../components/Tweet";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function TabOneScreen() {
    return (
        <View style={styles.page}>
            <FlatList
                data={tweets}
                renderItem={({ item }) => <Tweet tweet={item} />}
                keyExtractor={(item) => item.id}
            />

            <Link href="/new-tweet" asChild>
                <Pressable style={styles.floatingButton}>
                    <Entypo name="plus" size={24} color="white" />
                </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "white",
    },
    floatingButton: {
        backgroundColor: "#1C9BF0",
        position: "absolute",
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
});
