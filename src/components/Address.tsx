import useAddressAutocomplete from "../hooks/useAddressAutocomplete";
// import useRates from "../hooks/useRates";

export const Address = () => {
  const data = useAddressAutocomplete();
  console.log(data);
  return (
    <div>
      <h2>Address</h2>
    </div>
  );
};
