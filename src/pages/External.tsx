import { Address } from "../components/Address";
import { CRM } from "../components/CRM";
import { Overview } from "../components/Overview";
import { Property } from "../components/Property";
import { Rates } from "../components/Rates";
import { Serviceability } from "../components/Serviceability";
import { Bitbucket } from "../components/bitbucket";

export const External = () => (
  <div>
    <h1>External</h1>
    <Overview />
    <Address />
    <Rates />
    <Serviceability />
    <CRM />
    <Property />
    <Bitbucket />
  </div>
);
