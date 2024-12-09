import useSalesforceTrust from "../hooks/useSalesforceTrust";

export const CRM = () => {
	const { data } = useSalesforceTrust();
	if (!data) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<h2>CRM</h2>
			{data.status}
		</div>
	);
};
