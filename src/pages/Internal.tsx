import { CRM } from "../components/CRM";
import { Bitbucket } from "../components/Bitbucket";
import { RequestStatusCard } from "../components/RequestStatusCard";
import { services } from "../constants/services";

export const Internal = () => (
  <div
    style={{ display: "flex", flexDirection: "column", gap: 48, marginTop: 48 }}
  >
    <h1 style={{ fontSize: 40, fontWeight: 700, margin: 0 }}>
      Athena's status
    </h1>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      {services.map((service) => (
        <div
          key={service.name}
          style={{ flexBasis: 600, flexGrow: 1, flexShrink: 1 }}
        >
          <RequestStatusCard
            name={service.name}
            url={service.url}
            payload={service.payload}
          />
        </div>
      ))}
      <div style={{ flexBasis: 600, flexGrow: 1, flexShrink: 1 }}>
        <CRM />
      </div>
      <div style={{ flexBasis: 600, flexGrow: 1, flexShrink: 1 }}>
        <Bitbucket />
      </div>
    </div>
  </div>
);
