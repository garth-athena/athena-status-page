import { useState } from "react";
import { production } from "../constants/origin";
import { statusColors } from "../constants/statusColors";
import { statusLabels } from "../constants/statusLabels";
import { Expand } from "./Expand";
import useStatus from "../hooks/useStatus";
import { expandCircle, Icon } from "./Icon";

const url = `${production}`;

export const Website = () => {
  const [expanded, setExpanded] = useState(false);
  const status = useStatus(url);
  return (
    <div
      style={{
        borderRadius: 4,
        borderStyle: "solid",
        padding: 16,
        position: "relative",
      }}
    >
      <h2
        style={{
          marginBottom: 8,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
        }}
      >
        Website
      </h2>
      <div
        style={{
          backgroundColor: statusColors[status as keyof typeof statusColors],
          borderRadius: 4,
          fontWeight: 900,
          height: 24,
          paddingBottom: 8,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 8,
          width: "max-content",
        }}
      >
        {statusLabels[status as keyof typeof statusLabels]}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          appearance: "none",
          background: "none",
          border: "none",
          borderRadius: "50%",
          padding: 0,
          position: "absolute",
          right: 16,
          top: 16,
        }}
      >
        <Icon d={expandCircle} style={{ height: 24, width: 24 }} />
      </button>
      <div style={{ marginTop: 8 }}>
        <Expand expand={expanded}>
          <div style={{ padding: 8 }}>
            <p style={{ margin: 0 }}>URL: {url}</p>
            <p style={{ margin: 0 }}>Status: {status}</p>
          </div>
        </Expand>
      </div>
    </div>
  );
};
