import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";
import { processColor, ProcessedColorValue } from "react-native";

import { SFSymbolViewProps } from "./SFSymbol.types";

type NativeSFSymbolViewProps = Omit<SFSymbolViewProps, "colors"> & {
  colors: (ProcessedColorValue | null | undefined)[] | undefined;
};

const NativeView: React.ComponentType<NativeSFSymbolViewProps> =
  requireNativeViewManager("SFSymbol");

export class SFSymbol extends React.PureComponent<SFSymbolViewProps> {
  render() {
    const { color, style, ...restProps } = this.props;
    const colors =
      typeof color === "string"
        ? [processColor(color)]
        : color?.map(processColor);

    return (
      <NativeView
        key={JSON.stringify(this.props)}
        {...restProps}
        style={{
          ...style,
          width: restProps.size || 18,
          height: restProps.size || 18,
        }}
        colors={colors}
      />
    );
  }
}
