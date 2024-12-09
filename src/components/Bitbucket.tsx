import useBitbucket from "../hooks/useBitbucket";

export const Bitbucket = () => {
  const { data } = useBitbucket();
  console.log(data);
  if (!data) {
		return <div>Loading...</div>;
	}
  return (
		<div>
			<h2>Bitbucket Status</h2>
			{data.status.description}
		</div>
	);
}