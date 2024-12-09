import { origin } from "../constants/origin";
import { CRM } from "../components/CRM";
import { RequestStatusCard } from "../components/RequestStatusCard";
import { serviceabilityPayload } from "../constants/serviceabilityPayload";

const services = [
  {
    name: "Website",
    url: `${origin}`,
  },
  { name: "Rates", url: `${origin}/rates/api/v1/standard` },
  {
    name: "Address autocomplete",
    url: `${origin}/property/api/v1/address/autocomplete?term=347%20kent%20st`,
  },
  {
    name: "Address parse",
    url: `${origin}/property/api/v1/address/parse?term=347%20Kent%20St,%20Sydney%20NSW%202000`,
  },
  {
    name: "Postcode lookup (policy service)",
    url: `${origin}/policy/api/v1/address/postcodeLookup?postcode=2000&propertyType=HOUSE`,
  },
  {
    name: "Property address",
    url: `${origin}/property/api/v2/address`,
    payload: {
      valid: true,
      longitude: 151.2041531,
      latitude: -33.86848383,
      postcode: "2000",
      state: "NSW",
      suburb: "Sydney",
      street: { type: "Street", number: "347", name: "Kent" },
      buildingName: null,
    },
  },
  {
    name: "Serviceability",
    url: `${origin}/serviceability/v5/calculate`,
    payload: serviceabilityPayload,
  },
  {
    name: "Authentication",
    url: `https://status.auth0.com/api/auth/me`,
  },
  {
    name: "DP3",
    url: `https://uat.decisionpoint3.com/veda6/cm/casemanager/login.jsp#myHome`,
  },
];

export const External = () => (
  <div
    style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 32 }}
  >
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
        // width: "max-content",
      }}
    >
      <p style={{ margin: 0 }}>Notice — no general updates at this time.</p>
    </div>
    <h1 style={{ fontWeight: 500, margin: 0 }}>Athena's status</h1>
    {/* TODO */}
    {/* <div
      style={{
        backgroundColor: "green",
        borderRadius: 4,
        color: "white",
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        // width: "max-content",
      }}
    >
      <p style={{ margin: 0 }}>All systems operational</p>
    </div> */}
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
          style={{ flexBasis: 600, flexGrow: 0, flexShrink: 1 }}
        >
          <RequestStatusCard
            name={service.name}
            url={service.url}
            payload={service.payload}
          />
        </div>
      ))}
      <div style={{ flexBasis: 600, flexGrow: 0, flexShrink: 1 }}>
        <CRM />
      </div>
    </div>
  </div>
);
