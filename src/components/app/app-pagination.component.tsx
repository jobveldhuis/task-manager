import { StyleSheet, View } from "react-native";
import { Text } from "../../ui/text";

type AppPaginationProps = {
  selectedIndex: number;
};

export function AppPagination({
  selectedIndex,
}: AppPaginationProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text variant={selectedIndex === 0 ? "menuSelected" : "menu"}>
        add new
      </Text>
      <Text variant={selectedIndex === 1 ? "menuSelected" : "menu"}>
        to-dos
      </Text>
      <Text variant={selectedIndex === 2 ? "menuSelected" : "menu"}>
        settings
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    bottom: 8,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    paddingBottom: 40,
  },
});
