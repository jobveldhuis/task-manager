import { StyleSheet, View } from "react-native";
import { Text } from "@/ui/text";

type AppPaginationProps = {
  selectedIndex: number;
};

const PAGINATION_ITEMS = ["to-do", "add-new", "settings"];

export function AppPagination({
  selectedIndex,
}: AppPaginationProps): JSX.Element {
  return (
    <View style={styles.container}>
      {PAGINATION_ITEMS.map((title, index) => {
        return (
          <Text variant={index === selectedIndex ? "menuSelected" : "menu"}>
            {title}
          </Text>
        );
      })}
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
  selected: {
    color: "red",
  },
  item: {
    color: "white",
  },
});
