import { origin } from "../constants/origin";
import { serviceabilityPayload } from "../constants/serviceabilityPayload";

export const services = [
	{
		name: "Website",
		url: `${origin}`,
	},
	{ name: "Rates", url: `${origin}/rates/api/v1/standard` },
	{
		name: "Address",
		url: `${origin}/property/api/v1/address/autocomplete?term=347%20kent%20st`,
	},
	{
		name: "Address parse",
		url: `${origin}/property/api/v1/address/parse?term=347%20Kent%20St,%20Sydney%20NSW%202000`,
	},
	{
		name: "Policy",
		url: `${origin}/policy/api/v1/address/postcodeLookup?postcode=2000&propertyType=HOUSE`,
	},
	/* {
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
	 },*/
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
