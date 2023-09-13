import { StyleSheet, View } from "react-native";
import { ReactNode } from "react";
import { BlurView } from "expo-blur";

type ModalProps = {
  children: ReactNode;
};
export function Modal({ children }: ModalProps): JSX.Element {
  return (
    <BlurView intensity={20} tint="light" style={styles.container}>
      <View style={styles.modal}>{children}</View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: "100%",
    paddingHorizontal: 32,
    width: "100%",
  },
  modal: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 4,
    width: "100%",
  },
});
