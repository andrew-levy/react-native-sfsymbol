import { useState } from "react";
import { Animated, Button, StyleSheet, View } from "react-native";
import { SFSymbol } from "react-native-sfsymbol";
import { Image } from "expo-image";

const AnimatedSFSymbol = Animated.createAnimatedComponent(SFSymbol);

export default function App() {
  const [volume, setVolume] = useState(0);

  return (
    <View style={styles.container}>
      <SFSymbol
        name="person.3"
        renderingMode="palette"
        colors={["blue", "green", "red"]}
        scale="large"
        weight="regular"
        size={100}
      />
      <SFSymbol
        name="speaker.3"
        renderingMode="palette"
        colors={["green", "blue", "red"]}
        scale="large"
        variableValue={0.1}
        size={100}
      />
      <SFSymbol
        name="sun.max.fill"
        renderingMode="multicolor"
        scale="large"
        variableValue={0.1}
        size={100}
      />
      <SFSymbol
        name="phone.arrow.up.right"
        renderingMode="palette"
        scale="small"
        colors={["blue", "green"]}
        variableValue={0.1}
        size={100}
        style={{
          backgroundColor: "lightgrey",
          justifyContent: "center",
          alignItems: "center",
          width: 200,
          height: 200,
        }}
      />
      <AnimatedSFSymbol
        weight="light"
        name="speaker.2"
        renderingMode="palette"
        colors={["green", "red", "red"]}
        scale="large"
        variableValue={volume}
        size={100}
      />
      <Button title="Volume up" onPress={() => setVolume(volume + 0.1)} />
      {/* <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={{ width: 200, height: 200 }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
