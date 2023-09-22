import { DateInput, Input, MultilineInput } from "@/ui/input";
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Platform, StyleSheet, View } from "react-native";
import { useState } from "react";
import { AppleDatePicker } from "@/ui/date-picker/apple-date-picker.component";
import { Button } from "@/ui/button";
import { ErrorDialog } from "@/ui/error-dialog/error-dialog.component";
import { Page } from "./page.component";

type CreateTodoPageProps = {
  onCreate: (title: string, date: Date, description: string) => Promise<void>;
};

export function CreateTodoPage({
  onCreate: handleCreate,
}: CreateTodoPageProps): JSX.Element {
  const [title, setTitle] = useState("");
  const [errorCode, setErrorCode] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [shouldShowAppleDatepicker, setShouldShowAppleDatepicker] =
    useState(false);

  const handleDateChange = ({
    type,
    nativeEvent: { timestamp },
  }: DateTimePickerEvent) => {
    if (type !== "set") {
      return;
    }

    setSelectedDate(new Date(timestamp));
    setShouldShowAppleDatepicker(false);
  };

  const handleDateInputPress = () =>
    Platform.OS === "ios"
      ? setShouldShowAppleDatepicker(true)
      : DateTimePickerAndroid.open({
          mode: "date",
          value: selectedDate,
          onChange: handleDateChange,
        });

  const handleCreatePress = async () => {
    setIsLoading(true);
    setErrorCode(null);

    if (title.length < 3) {
      setErrorCode("custom/todo-title-length");
      setIsLoading(false);
      return;
    }

    if (description.length < 3) {
      setErrorCode("custom/todo-description-length");
      setIsLoading(false);
      return;
    }

    await handleCreate(title, selectedDate, description);

    setTitle("");
    setSelectedDate(new Date());
    setDescription("");
    setIsLoading(false);
  };

  const hasError = errorCode !== null;

  return (
    <>
      {shouldShowAppleDatepicker && (
        <AppleDatePicker
          onBackgroundPress={() => setShouldShowAppleDatepicker(false)}
          value={selectedDate}
          onChange={handleDateChange}
          minimumDate={new Date()}
        />
      )}
      <Page title="Add new to-do list item">
        <View style={styles.container}>
          {hasError && <ErrorDialog code={errorCode} />}
          <Input
            value={title}
            type="text"
            onChange={setTitle}
            label="What do you need to do?"
          />
          <DateInput
            label="When do you want to have done it?"
            value={selectedDate}
            onPress={handleDateInputPress}
          />
          <MultilineInput
            value={description}
            label="What will completing this bring you?"
            onChange={setDescription}
            numberOfLines={4}
            maxLength={150}
          />
          <Button
            title="Create"
            isLoading={isLoading}
            onPress={handleCreatePress}
          />
        </View>
      </Page>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 20,
  },
});
