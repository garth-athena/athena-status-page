import { useState } from "react";
import { Expand } from "./Expand";
import useStatus from "../hooks/useStatus";
import { StatusLabel } from "./StatusLabel";
import { Card } from "./Card";
import { CardTitle } from "./CardTitle";
import { ExpandButton } from "./ExpandButton";

export const RequestStatusCard = ({
  name,
  url,
  payload,
}: {
  name: string;
  url: string;
  payload?: any;
}) => {
  const [expanded, setExpanded] = useState(false);
  const status = useStatus(url, payload);
  return (
    <Card>
      <ExpandButton onClick={() => setExpanded(!expanded)}>
        <CardTitle>{name}</CardTitle>
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
              URL: <strong style={{ fontWeight: 700 }}>{url}</strong>
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
