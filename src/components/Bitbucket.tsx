import useBitbucket from "../hooks/useBitbucket";

export const Bitbucket = () => {
  const { status, data } = useBitbucket();
  console.log(data);

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "error" || !data) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <h2>Bitbucket Status</h2>
      {data.status.description}
    </div>
  );
}