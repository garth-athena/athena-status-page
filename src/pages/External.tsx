import { RequestStatusCard } from "../components/RequestStatusCard";
import { services } from "../constants/services";

export const External = () => (
  <div
    style={{ display: "flex", flexDirection: "column", gap: 48, marginTop: 48 }}
  >
    <h1 style={{ fontSize: 40, fontWeight: 700, margin: 0 }}>
      Athena's status
    </h1>
    <div
      style={{
        backgroundColor: "lavender",
        borderRadius: 4,
        color: "darkslateblue",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 1200,
        paddingBottom: 16,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 16,
      }}
    >
      {/* <h2 style={{ fontSize: 20, marginBottom: 12, marginTop: 0 }}>
        Maintenance
      </h2> */}
      <p
        style={{
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 20 / 14,
          margin: 0,
        }}
      >
        {/* A vendor of Athena will be carrying out some maintenance on
				their platform on 1st January 2025. We do not expect any
				disruption to our service. */}
        If you do experience any issues or have an urgent enquiry give us a buzz
        on <a href="tel:133535">13 35 35</a> or SMS us on{" "}
        <a href="sms:0429333555">0429 333 555</a>.
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
    </div>
  </div>
);
