import { ViewStyle } from "react-native/types";

export type SFSymbolViewProps = {
  name: string;
  colors?: string[];
  scale?: "small" | "medium" | "large";
  size?: number;
  weight?:
    | "ultraLight"
    | "thin"
    | "light"
    | "regular"
    | "medium"
    | "semibold"
    | "bold"
    | "heavy"
    | "black";
  style?: ViewStyle;
  variableValue?: number;
  renderingMode?: "multicolor" | "monochrome" | "hierarchical" | "palette";
};
