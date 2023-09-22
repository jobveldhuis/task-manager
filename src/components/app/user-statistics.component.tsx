import { StyleSheet, View, ViewStyle } from "react-native";
import { Text } from "@/ui/text";
import { COLORS } from "@/util/colors.const";
import type { UserStatistics as UserStatisticsShape } from "@/types";
import { FilteredStyleProps } from "@/util/filtered-style-props.type";

type UserStatisticsProps = {
  statistics: UserStatisticsShape;
  style?: FilteredStyleProps<ViewStyle>;
};

export function UserStatistics({
  statistics,
  style,
}: UserStatisticsProps): JSX.Element {
  const hasStatistics = statistics.totalCompleted > 0;

  return (
    <View style={[styles.container, style]}>
      {hasStatistics ? (
        <View style={styles.statistics}>
          <Text>
            {`So far, you have created ${statistics.totalCreated} to-dos and completed ${statistics.totalCompleted}. Way to go!`}
          </Text>
        </View>
      ) : (
        <Text>
          After completing your first to-do, we will show you some statistics
          here.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 16,
  },
  statistics: {
    borderColor: COLORS.secondary,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },
});
