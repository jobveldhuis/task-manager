import { ReactNode } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

type KeyboardDismissalViewProps = {
  children: ReactNode;
};
export function KeyboardDismissalView({
  children,
}: KeyboardDismissalViewProps): JSX.Element {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );
}
