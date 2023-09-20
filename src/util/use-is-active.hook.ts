import { AppState } from "react-native";
import { useEffect, useRef, useState } from "react";

export function useIsActive() {
  const appState = useRef(AppState.currentState);

  const [isActive, setIsActive] = useState(
    appState.current !== "inactive" && appState.current !== "background",
  );

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextState) => {
      setIsActive(nextState !== "inactive" && nextState !== "background");
      appState.current = nextState;
    });

    return () => subscription.remove();
  }, []);

  return isActive;
}
