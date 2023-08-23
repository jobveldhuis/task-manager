import { BackgroundView } from "@/ui/background-view";
import { Text } from "@/ui/text";
import { Title } from "@/ui/title";

export default function Login() {
  return (
    <BackgroundView>
      <Title variant="inline">Welcome back,</Title>
      <Text>
        Time to get back on track? All your saved to-dos will be waiting on the
        other side.
      </Text>
    </BackgroundView>
  );
}
