import { Address } from "../components/Address";
import { CRM } from "../components/CRM";
import { Overview } from "../components/Overview";
import { Property } from "../components/Property";
import { Serviceability } from "../components/Serviceability";
import { Website } from "../components/Website";

export const Internal = () => (
  <div>
    <h1>Internal</h1>
    <Overview />
    <Address />
    <Serviceability />
    <CRM />
    <Property />
    <Website />
  </div>
);
