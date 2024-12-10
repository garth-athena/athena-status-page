import useSalesforceTrust from "../hooks/useSalesforceTrust";
import { useState } from "react";
import { Expand } from "./Expand";
import { StatusLabel } from "./StatusLabel";
import { Card } from "./Card";
import { CardTitle } from "./CardTitle";
import { ExpandButton } from "./ExpandButton";

export const CRM = () => {
  const { data } = useSalesforceTrust();
  const [expanded, setExpanded] = useState(false);

  let status = 0;
  switch (data?.status) {
    case "OK":
      status = 200;
      break;
    case "MAJOR_INCIDENT_CORE":
    case "MINOR_INCIDENT_CORE":
    case "MAINTENANCE_CORE":
    case "MAJOR_INCIDENT_NONCORE":
      status = 500;
      break;
    case "MINOR_INCIDENT_NONCORE":
    case "MAINTENANCE_NONCORE":
      status = 401;
      break;
  }

  return (
    <Card>
      <ExpandButton onClick={() => setExpanded(!expanded)}>
        <CardTitle>CRM</CardTitle>
        <StatusLabel status={status} />
        <Expand expand={expanded}>
          <div style={{ paddingTop: 12 }}>
            <p
              style={{
                marginBottom: 4,
                marginTop: 0,
                wordBreak: "break-all",
              }}
            >
              URL:{" "}
              <strong style={{ fontWeight: 700 }}>
                https://api.status.salesforce.com/v1/instances/AUS74/status
              </strong>
            </p>
            <p style={{ marginBottom: 0, marginTop: 0 }}>
              Status: <strong style={{ fontWeight: 700 }}>{status}</strong>
            </p>
          </div>
        </Expand>
      </ExpandButton>
    </Card>
  );
};
