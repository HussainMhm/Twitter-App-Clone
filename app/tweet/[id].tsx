import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";
import { useGlobalSearchParams } from "expo-router";

export default function TweetScreen() {
    const { id } = useGlobalSearchParams();
    console.log(id);

    const tweet = tweets.find((tweet) => tweet.id === id);

    if (!tweet) {
        return (
            <View>
                <Text>Tweet not found</Text>
            </View>
        );
    }

    return <Tweet tweet={tweet} />;
}

const styles = StyleSheet.create({});
