import { View, FlatList } from "react-native";
import tweets from "../../assets/data/tweets";
import Tweet from "../../components/Tweet";

export default function TabOneScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <FlatList
                data={tweets}
                renderItem={({ item }) => <Tweet tweet={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
