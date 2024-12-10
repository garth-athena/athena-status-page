import { CRM } from "../components/CRM";
import { RequestStatusCard } from "../components/RequestStatusCard";
import { services } from "../constants/services";

export const External = () => (
  <div
    style={{ display: "flex", flexDirection: "column", gap: 32, marginTop: 32 }}
  >
    <h1 style={{ fontWeight: 500, margin: 0 }}>Athena's status</h1>
    <div
      style={{
        backgroundColor: "pink",
        borderRadius: 4,
        color: "purple",
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
      }}
    >
      <h2 style={{ fontSize: 20, marginBottom: 12, marginTop: 0 }}>
        Maintenance
      </h2>
      <p style={{ margin: 0 }}>
        We’re currently carrying out some maintenance on our platform. You will
        not be able to access the Athena platform during this time. We apologise
        for any inconvenience this may cause.
      </p>
    </div>
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
    </div>
  </div>
);
