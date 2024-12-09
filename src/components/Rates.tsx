import useRates from "../hooks/useRates";

export const Rates = () => {
  const data = useRates();
  console.log(data);
  return (
    <div>
      <h2>Rates</h2>
    </div>
  );
};
