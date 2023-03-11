import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { SFSymbol } from "react-native-sfsymbol";

export default function App() {
  const [volume, setVolume] = useState(0);

  return (
    <View style={styles.container}>
      <SFSymbol
        name="person.3"
        renderingMode="palette"
        color={["blue", "green", "red"]}
        scale="large"
        weight="regular"
        size={100}
      />
      <SFSymbol
        name="speaker.wave.3"
        renderingMode="palette"
        color={["green", "blue", "red"]}
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
        color={["blue", "green"]}
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
      <SFSymbol
        weight="light"
        name="speaker.wave.3"
        renderingMode="palette"
        color={["green", "red", "red"]}
        scale="large"
        variableValue={volume}
        size={100}
      />
      <Button title="Volume up" onPress={() => setVolume(volume + 0.1)} />
      <Button title="Volume down" onPress={() => setVolume(volume - 0.1)} />
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
