import React, { useEffect, useState } from "react";
import { States } from "storybook-states";
import { ProgressBar, ProgressBarProps } from ".";

export default { title: "ProgressBar", component: ProgressBar };

export const Default = () => (
  <States<Partial<ProgressBarProps>>
    states={Array.from({ length: 11 }, (_, i) => ({ progress: i * 10 }))}
  >
    <ProgressBar progress={0} />
  </States>
);

export const Demo = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setProgress(Math.floor(Math.random() * Math.floor(100))),
      500
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <States<Partial<ProgressBarProps>>>
      <ProgressBar progress={progress} />
    </States>
  );
};
