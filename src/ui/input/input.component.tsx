import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { COLORS } from "../../util/colors.const";
import { Text } from "../text";

type InputType = "text" | "password" | "new-password" | "email";

type InputProps = {
  value: string;
  type?: InputType;
  label?: string;
  onChange: (text: string) => void;
  shouldEnableAutoCorrect?: boolean;
};

function getAutocompleteFromType(
  type: InputType,
): TextInputProps["autoComplete"] {
  if (type === "email") return "email";
  if (type === "new-password") return "new-password";
  if (type === "password") return "current-password";
  return "off";
}

function getInputModeFromType(type: InputType): TextInputProps["inputMode"] {
  if (type === "email") return "email";
  return "text";
}

export function Input({
  value,
  label,
  onChange: handleChange,
  type = "text",
  shouldEnableAutoCorrect = false,
}: InputProps): JSX.Element {
  const isSecureTextEntry = type === "password" || type === "new-password";
  const hasLabel = label !== undefined;
  const autoComplete = getAutocompleteFromType(type);
  const inputMode = getInputModeFromType(type);

  return (
    <View>
      {hasLabel && <Text>{label}</Text>}
      <TextInput
        secureTextEntry={isSecureTextEntry}
        style={styles.input}
        onChangeText={handleChange}
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        autoCorrect={shouldEnableAutoCorrect}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: COLORS.secondary,
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderRadius: 4,
  },
});
