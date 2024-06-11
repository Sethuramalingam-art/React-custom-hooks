import React, { useState, useEffect, useRef } from "react";

const useIdle = (delay: number) => {
  const [isIdle, setIsIdle] = useState<boolean>(false);

  const timeoutId = useRef<number>();

  useEffect(() => {
    setUp();

    return () => {
      cleanUp();
    };
  });

  const setUp = () => {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("DOMMouseScroll", resetTimer, false);
    document.addEventListener("mousewheel", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);

    window.addEventListener("blur", startTimer, false);
    window.addEventListener("focus", resetTimer, false);
  };

  const resetTimer = () => {
    clearTimeout(timeoutId.current);
    goActive();
  };

  const startTimer = () => {
    timeoutId.current = setTimeout(goInactive, delay);
  };

  const goInactive = () => {
    setIsIdle(true);
  };

  const goActive = () => {
    setIsIdle(false);
    startTimer();
  };
  const cleanUp = () => {
    document.removeEventListener("mousemove", resetTimer);
    document.addEventListener("mousedown", resetTimer);
    document.addEventListener("keypress", resetTimer);
    document.addEventListener("DOMMouseScroll", resetTimer);
    document.addEventListener("mousewheel", resetTimer);
    document.addEventListener("touchmove", resetTimer);

    window.addEventListener("blur", startTimer);
    window.addEventListener("focus", resetTimer);
    clearTimeout(timeoutId.current);
  };
  return isIdle;
};

export default useIdle;
