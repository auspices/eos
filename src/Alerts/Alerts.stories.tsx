import React, { useEffect, useState } from "react";
import { States } from "storybook-states";
import { Alerts, AlertsProps, AlertsProvider, useAlerts } from ".";

export default { title: "Alerts", component: Alerts };

const Example = () => {
  const [count, setCount] = useState(0);
  const { sendNotification, sendError } = useAlerts();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(n => n + 1);

      Math.random() > 0.5
        ? sendNotification({ body: `Notification ${count}` })
        : sendError({ body: `Error ${count}` });
    }, 100);

    return () => clearInterval(interval);
  }, [count, sendError, sendNotification]);

  return (
    <States<AlertsProps> states={[{}, { limit: 2 }]}>
      <Alerts limit={5} />
    </States>
  );
};

export const Demo = () => {
  return (
    <AlertsProvider>
      <Example />
    </AlertsProvider>
  );
};
