import react from "react";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const EmptyComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No Data Here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        color: 'black',
        fontSize: 20,
        alignSelf: "center",
    }
})

export default EmptyComponent