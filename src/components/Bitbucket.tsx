import useBitbucket from "../hooks/useBitbucket";

export const Bitbucket = () => {
  const { data } = useBitbucket();
  console.log(data);
  return (
    <header>
      <h2> BitBucket Status {data}</h2>
    </header>
  );
};