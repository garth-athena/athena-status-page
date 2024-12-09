import { origin } from "../constants/origin";
import { CRM } from "../components/CRM";
import { GetRequestStatusCard } from "../components/GetRequestStatusCard";
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
    method: "POST",
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
    method: "POST",
    payload: serviceabilityPayload,
  },
];

export const External = () => (
  <div>
    <h1 style={{ fontWeight: 500 }}>Athena's status</h1>
    <p>Banner — General manual message to customers.</p>
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {services.map((service) => (
        <GetRequestStatusCard
          key={service.name}
          name={service.name}
          url={service.url}
        />
      ))}
      <CRM />
    </div>
  </div>
);
