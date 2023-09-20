import { ViewStyle } from "react-native";

type PickedProps = "marginBottom" | "paddingBottom";

export type FilteredStyleProps<T extends ViewStyle> = Pick<T, PickedProps>;
