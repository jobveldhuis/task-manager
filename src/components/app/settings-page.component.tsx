import { StyleSheet, View } from "react-native";
import { Button } from "@/ui/button";
import { Text } from "@/ui/text";
import { signOut } from "@/backend/authentication";
import { UserStatistics } from "@/types";
import { COLORS } from "@/util/colors.const";
import { Page } from "./page.component";

type SettingsPageProps = {
  statistics: UserStatistics;
};

export function SettingsPage({ statistics }: SettingsPageProps): JSX.Element {
  const hasStatistics = statistics.totalCompleted > 0;

  return (
    <Page title="Settings">
      <View style={styles.intro}>
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
        <Text>
          Please note: this screen will be expanded in the future with more
          settings and customization.
        </Text>
      </View>

      <Button title="Click here to sign out" onPress={signOut} />
    </Page>
  );
}

const styles = StyleSheet.create({
  intro: {
    display: "flex",
    gap: 16,
    marginBottom: 32,
  },
  statistics: {
    borderColor: COLORS.secondary,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },
});
