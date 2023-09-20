import { StyleSheet, TextInput, View } from "react-native";
import { COLORS } from "@/util/colors.const";
import { Text } from "../text";

type MultilineInputProps = {
  value: string;
  label?: string;
  numberOfLines?: number;
  maxLength?: number;
  onChange: (text: string) => void;
};

export function MultilineInput({
  value,
  label,
  maxLength,
  numberOfLines,
  onChange: handleChange,
}: MultilineInputProps): JSX.Element {
  const hasLabel = label !== undefined;

  return (
    <View style={styles.container}>
      {hasLabel && <Text>{label}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          if (
            numberOfLines !== undefined &&
            text.split("\n").length > numberOfLines
          ) {
            return;
          }

          handleChange(text);
        }}
        value={value}
        maxLength={maxLength}
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  input: {
    borderColor: COLORS.secondary,
    borderWidth: 1,
    width: "100%",
    height: 90,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderRadius: 4,
  },
});
