import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
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
        size={50}
      />
      <SFSymbol
        name="person.3"
        renderingMode="palette"
        color={["blue", "green", "red"]}
        scale="medium"
        weight="regular"
        size={50}
      />
      <SFSymbol
        name="person.3"
        renderingMode="palette"
        color={["blue", "green", "red"]}
        scale="small"
        weight="regular"
        size={50}
      />
      <SFSymbol
        name="sun.max.fill"
        renderingMode="multicolor"
        variableValue={0.1}
        size={50}
        style={{
          margin: 10,
          backgroundColor: "lightgrey",
          borderWidth: 1,
        }}
      />
      <SFSymbol
        name="phone.arrow.up.right"
        renderingMode="palette"
        scale="small"
        color={["blue", "green"]}
        variableValue={0.1}
        size={50}
        style={{
          margin: 10,
          backgroundColor: "lightgrey",
          borderWidth: 1,
        }}
      />
      <SFSymbol
        name="speaker.wave.3"
        renderingMode="palette"
        color={["green", "red", "red"]}
        scale="small"
        variableValue={volume}
        size={200}
        style={{
          margin: 10,
          backgroundColor: "lightgrey",
          borderWidth: 1,
        }}
      />
      <Button title="Volume up" onPress={() => setVolume(volume + 0.1)} />
      <Button title="Volume down" onPress={() => setVolume(volume - 0.1)} />
      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}
      >
        <SFSymbol
          name="speaker.wave.3"
          renderingMode="palette"
          color={["green", "red", "red"]}
          variableValue={volume}
          size={50}
        />
        <Text style={{ fontSize: 50 }}>{volume.toFixed(2)}</Text>
      </View>
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
