import { useState } from "react";
import { Expand } from "./Expand";
import useStatus from "../hooks/useStatus";
import { StatusLabel } from "./StatusLabel";
import { Card } from "./Card";
import { CardTitle } from "./CardTitle";
import { ExpandButton } from "./ExpandButton";

export const GetRequestStatusCard = ({
  name,
  url,
}: {
  name: string;
  url: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  const status = useStatus(url);
  return (
    <Card>
      <CardTitle>{name}</CardTitle>
      <StatusLabel status={status} />
      <ExpandButton onClick={() => setExpanded(!expanded)} />
      <div style={{ marginTop: 8 }}>
        <Expand expand={expanded}>
          <div style={{ padding: 8 }}>
            <p style={{ margin: 0 }}>URL: {url}</p>
            <p style={{ margin: 0 }}>Status: {status}</p>
          </div>
        </Expand>
      </div>
    </Card>
  );
};
