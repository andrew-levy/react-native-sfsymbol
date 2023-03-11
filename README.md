# react-native-sfsymbol

> **_NOTE:_** This library is under development, so the API may change until it hits v1.0.0.

[SF Symbols](https://developer.apple.com/design/human-interface-guidelines/foundations/sf-symbols) are a set of over 2,500 consistent, highly configurable symbols you can use in your app. SF Symbols are designed to integrate seamlessly with the San Francisco system font, so the symbols automatically ensure optical vertical alignment with text for all weights and sizes.

## Highlights

- :smiley: Built with [Expo's Module API](https://docs.expo.dev/modules/module-api/)
- :art: Support for all [rendering modes](https://developer.apple.com/design/human-interface-guidelines/foundations/sf-symbols#rendering-modes)
- :loud_sound: Support for [variable color values](https://developer.apple.com/design/human-interface-guidelines/foundations/sf-symbols#variable-color)
- :apple: iOS only ([see why](https://developer.apple.com/design/human-interface-guidelines/foundations/sf-symbols#custom-symbols))

## Installation

Add the package as a dependency

```console
yarn add react-native-sfsymbol
```

Then run

```
npx pod-install
```

> **_NOTE:_** This library works with bare React Native and Expo managed apps. It will not work with Expo Go.

## Usage

```tsx
import { SFSymbol } from "react-native-sfsymbol";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Monochrome rendering mode (one color) */}
      <SFSymbol
        name="heart"
        color="#FF3B30FF"
        weight="bold"
        size={100}
        scale="small"
      />
      {/* Hierarchical rendering mode (one color with opacities), with a varaible value */}
      <SFSymbol
        name="speaker.wave.3"
        renderingMode="hierarchical"
        scale="small"
        variableValue={0.1}
        size={100}
      />
      {/* Palette rendering mode (multiple custom colors) */}
      <SFSymbol
        name="person.2"
        renderingMode="palette"
        color={["#FF3B30FF", "#007AFFFF"]}
        size={100}
      />
      {/* Multicolor rendering mode (pre-determined system colors) */}
      <SFSymbol
        name="phone.arrow.up.right"
        renderingMode="multicolor"
        size={100}
      />
    </View>
  );
}
```

## API

### `<SFSymbol />`

| Prop            | Type                                                                                                     | Description                       | Required                 | Default        |
| --------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------------------ | -------------- | ----------- |
| `name`          | [`SystemName`](https://github.com/andrew-levy/react-native-sfsymbol/blob/main/src/SFSymbol.types.ts#L23) | The name of the symbol.           | Yes                      | `questionmark` |
| `color`         | `string                                                                                                  | string[]`                         | The color of the symbol. | No             | `#007AFFFF` |
| `weight`        | `string`                                                                                                 | The weight of the symbol.         | No                       | `regular`      |
| `scale`         | `number`                                                                                                 | The scale of the symbol.          | No                       | `medium`       |
| `renderingMode` | `string`                                                                                                 | The rendering mode of the symbol. | No                       | `monochrome`   |
| `variableValue` | `number`                                                                                                 | The variable value of the symbol. | No                       | `1.0`          |
| `style`         | `object`                                                                                                 | The style of the symbol.          | No                       | `undefined`    |
