import React from "react";
import { Stack, StackProps } from "../Stack";
import { Alert } from "../Alert";
import { useAlerts } from "./useAlerts";

export type AlertsProps = Omit<StackProps, "spacing"> & {
  limit?: number;
  spacing?: number | string;
};

const takeRight = <T,>(xs: T[], limit = 1) => {
  if (xs.length < limit) {
    return xs;
  }

  return xs.slice(xs.length - limit, xs.length);
};

export const Alerts: React.FC<AlertsProps> = ({ limit = 5, ...rest }) => {
  const { alerts } = useAlerts();

  return (
    <Stack spacing={2} {...rest}>
      {takeRight(alerts, limit).map((alert, i) => (
        <Alert key={i} mode={alert.mode}>
          {alert.body}
        </Alert>
      ))}
    </Stack>
  );
};

Alerts.displayName = "Alerts";
