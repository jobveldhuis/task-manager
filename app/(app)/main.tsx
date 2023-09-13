import Swiper from "react-native-swiper";
import { BackgroundView } from "@/ui/views";
import { Text } from "@/ui/text";
import { Title } from "@/ui/title";
import { useAuthentication } from "@/backend/authentication";
import { useEffect } from "react";
import { hasSeenTutorial } from "@/util/has-seen-tutorial";
import { router } from "expo-router";

export default function Main(): JSX.Element {
  const { user } = useAuthentication();

  useEffect(() => {
    if (user === null) return;

    const redirectIfNotSeenTutorial = async () => {
      const hasSeen = await hasSeenTutorial(user.uid);
      if (!hasSeen) {
        router.push("/(app)/tutorial");
      }
    };

    redirectIfNotSeenTutorial();
  }, [user]);

  return (
    <Swiper loop={false}>
      <BackgroundView>
        {user?.emailVerified !== true && <Text>Please verify your e-mail</Text>}

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
