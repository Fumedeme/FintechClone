import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { useAssets } from "expo-asset";
import { Video } from "expo-av";

const index = () => {
  const [asset] = useAssets([require("@/assets/videos/intro.mp4")]);

  return (
    <View style={styles.container}>
      {asset && (
        <Video
          isMuted
          isLooping
          shouldPlay
          source={{ uri: asset[0].uri }}
          style={styles.video}
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Ready to change the way you money?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  textContainer: {
    marginTop: 80,
    padding: 20,
  },
  text: {
    fontSize: 36,
    color: "white",
    fontWeight: "900",
    textTransform: "uppercase",
  },
});

export default index;
