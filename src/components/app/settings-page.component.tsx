import { Button } from "@/ui/button";
import { signOut } from "@/backend/authentication";
import { UserStatistics as UserStatisticsShape } from "@/types";
import { UserStatistics } from "@/components/app/user-statistics.component";
import { StyleSheet } from "react-native";
import { Page } from "./page.component";

type SettingsPageProps = {
  statistics: UserStatisticsShape;
};

export function SettingsPage({ statistics }: SettingsPageProps): JSX.Element {
  return (
    <Page title="Settings">
      <UserStatistics statistics={statistics} style={styles.statistics} />
      <Button title="Click here to sign out" onPress={signOut} />
    </Page>
  );
}

const styles = StyleSheet.create({
  statistics: {
    marginBottom: 24,
  },
});
