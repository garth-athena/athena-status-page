import useAddressAutocomplete from "../hooks/useAddressAutocomplete";
// import useRates from "../hooks/useRates";

export const Address = () => {
  const { data = [{ id: 0, name: "" }] } = useAddressAutocomplete();
  return (
    <div>
      <h2>Address</h2>
      <p>{data && data[0].name}</p>
    </div>
  );
};
