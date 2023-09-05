import Swiper from "react-native-swiper";
import { BackgroundView } from "@/ui/views";
import { Text } from "@/ui/text";
import { Title } from "@/ui/title";

export default function Main(): JSX.Element {
  return (
    <Swiper loop={false}>
      <BackgroundView>
        <Title>Hi there,</Title>
        <Text>
          This app will help you tackle procrastination in a few simple steps.
          Want to get started?
        </Text>
      </BackgroundView>
      <BackgroundView>
        <Text>Tes2t</Text>
      </BackgroundView>
      <BackgroundView>
        <Text>Test3</Text>
      </BackgroundView>
    </Swiper>
  );
}
