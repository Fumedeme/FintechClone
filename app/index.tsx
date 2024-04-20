import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const index = () => {
  const [asset] = useAssets([require("@/assets/videos/intro.mp4")]);

  return (
    <View style={styles.container}>
      {asset && (
        <Video
          resizeMode={ResizeMode.COVER}
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

      <View style={styles.buttons}>
        <Link
          href={"/login"}
          asChild
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: Colors.dark },
          ]}
        >
          <TouchableOpacity>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "500" }}>
              Log in
            </Text>
          </TouchableOpacity>
        </Link>
        <Link
          href={"/signup"}
          asChild
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: "#fff" },
          ]}
        >
          <TouchableOpacity>
            <Text style={{ fontSize: 22, fontWeight: "500" }}>Sign up</Text>
          </TouchableOpacity>
        </Link>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
});

export default index;
