import Swiper from "react-native-swiper";
import { TutorialIntroductionScreen } from "../../components/tutorial/introduction";
import { TutorialWhatItsNotScreen } from "../../components/tutorial/what-its-not";
import { TutorialWhatItIsScreen } from "../../components/tutorial/what-it-is";

export default function Tutorial(): JSX.Element {
  return (
    <Swiper loop={false} dotColor="#efefef" activeDotColor="#E56420">
      <TutorialIntroductionScreen />
      <TutorialWhatItsNotScreen />
      <TutorialWhatItIsScreen />
    </Swiper>
  );
}
