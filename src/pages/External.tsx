import { Address } from "../components/Address";
import { CRM } from "../components/CRM";
import { Overview } from "../components/Overview";
import { Property } from "../components/Property";
import { Serviceability } from "../components/Serviceability";

export const External = () => (
  <div>
    <h1>External</h1>
    <Overview />
    <Address />
    <Serviceability />
    <CRM />
    <Property />
  </div>
);
