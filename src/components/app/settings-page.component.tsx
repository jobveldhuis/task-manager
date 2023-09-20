import { StyleSheet, View } from "react-native";
import { Page } from "./page.component";
import { Button } from "../../ui/button";
import { Text } from "../../ui/text";
import { signOut } from "../../backend/authentication";

export function SettingsPage(): JSX.Element {
  return (
    <Page title="Settings">
      <View style={styles.intro}>
        <Text>
          This screen will be updated in the future, so you can change the
          appearance of the application - get rid of the background or apply a
          different theme.
        </Text>
        <Text>At this moment, it is only used to sign you out. Sorry.</Text>
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
});
