import { BackgroundView } from "@/ui/background-view";
import { Text } from "@/ui/text";
import { Title } from "@/ui/title";

export default function SignUp() {
  return (
    <BackgroundView>
      <Title variant="inline">Signing up is easy!</Title>
      <Text>
        Ready to change your life? We need some details so we can safely store
        your to-dos.
      </Text>
    </BackgroundView>
  );
}
