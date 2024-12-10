import { IncidentEvent } from "../hooks/useSalesforceTrust";
export const SFIncidentEvent = ({ event }: { event: IncidentEvent }) => (
	<div>
		<p>Update Time: {event.createdAt}</p>
		<p>Message: {event.message}</p>
	</div>
);
