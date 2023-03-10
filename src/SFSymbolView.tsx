import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";
import { processColor, ProcessedColorValue } from "react-native";

import { SFSymbolViewProps } from "./SFSymbol.types";

const NativeView: React.ComponentType<
  Omit<SFSymbolViewProps, "colors"> & {
    colors: (ProcessedColorValue | null | undefined)[] | undefined;
  }
> = requireNativeViewManager("SFSymbol");

export class SFSymbol extends React.PureComponent<SFSymbolViewProps> {
  render() {
    // console.log("Name: ", this.props.name);
    const { colors, style, ...restProps } = this.props;
    return (
      <NativeView
        key={JSON.stringify(this.props)}
        {...restProps}
        style={{
          ...style,
          width: restProps.size || 18,
          height: restProps.size || 18,
        }}
        colors={colors?.map(processColor)}
      />
    );
  }
}
