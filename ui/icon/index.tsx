import ExpoIcon from "@expo/vector-icons/FontAwesome5";

export type IconName =
  | "calendar-alt"
  | "magic"
  | "user-check"
  | "check-double"
  | "flag-checkered"
  | "list"
  | "edit"
  | "long-arrow-alt-right";

type IconProps = {
  name: IconName;
  testID?: string;
};

export function Icon({ name }: IconProps): JSX.Element {
  return <ExpoIcon name={name} style={{ fontSize: 16 }} />;
}
