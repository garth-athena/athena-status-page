import { Incident } from "../hooks/useSalesforceTrust";
import { SFIncidentEvent } from "./SFIncidentEvent";
export const SFIncident = ({ incident }: { incident: Incident }) => {
	const incidentEvents = incident?.IncidentEvents ?? [];
	return (
		<div
			style={{
				borderRadius: 4,
				borderStyle: "solid",
				padding: 0,
				position: "relative",
			}}
		>
			<div>
				<p>
					Status:{" "}
					{incident.IncidentImpacts[0].endTime === null
						? "In Progress"
						: "Resolved"}
				</p>
				<p>Incident Type: {incident.IncidentImpacts[0].type}</p>
				<p>Start Time: {incident.IncidentImpacts[0].startTime}</p>
				<p>End Time: {incident.IncidentImpacts[0].endTime}</p>
			</div>
			<div>
				<h4>Updates</h4>
				{incidentEvents.map((evt) => (
					<SFIncidentEvent event={evt}></SFIncidentEvent>
				))}
			</div>
		</div>
	);
};
