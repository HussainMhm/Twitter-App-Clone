import { Image, StyleSheet, Text, View, TextInput, Pressable, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";

const user = {
    id: "987654321",
    name: "Zuck",
    username: "zuck",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
};

export default function newTweet() {
    const [text, setText] = useState("");
    const router = useRouter();

    const onTweetPress = () => {
        console.warn("Tweeted");
        setText("");

        router.back();
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Link href="../" style={{ fontSize: 18 }}>
                        Cancel
                    </Link>

                    <Pressable onPress={onTweetPress} style={styles.button}>
                        <Text style={styles.buttonText}>Tweet</Text>
                    </Pressable>
                </View>

                <View style={styles.inputContainer}>
                    <Image source={{ uri: user.image }} style={styles.image} />
                    <TextInput
                        value={text}
                        onChangeText={(value) => setText(value)}
                        // Same as above
                        // onChangeText={setText}
                        multiline
                        numberOfLines={3}
                        style={{ flex: 1, marginHorizontal: 10 }}
                        placeholder={"What's happening?"}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    buttonContainer: {
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "space-between",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#1C9BF0",
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: "row",
    },
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
        marginRight: 10,
    },
});
