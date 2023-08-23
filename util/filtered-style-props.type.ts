import { ViewStyle } from "react-native";

type PickedProps = "marginBottom";

export type FilteredStyleProps<T extends ViewStyle> = Pick<T, PickedProps>;
