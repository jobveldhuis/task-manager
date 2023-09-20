import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { ReactNode } from "react";
import { BlurView } from "expo-blur";

type ModalProps = {
  children: ReactNode;
  onBackgroundPress?: (event: GestureResponderEvent) => void;
};
export function Modal({
  children,
  onBackgroundPress: handleBackgroundPress,
}: ModalProps): JSX.Element {
  return (
    <BlurView
      intensity={20}
      tint="light"
      style={styles.container}
      onTouchEnd={handleBackgroundPress}
    >
      <View
        style={styles.modal}
        onStartShouldSetResponder={() => true}
        onTouchEnd={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </View>
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
    position: "absolute",
    top: "25%",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 32,
    borderRadius: 16,
    width: "100%",
  },
});
