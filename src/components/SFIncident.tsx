import { Incident } from "../hooks/useSalesforceTrust";
import { SFIncidentEvent } from "./SFIncidentEvent";
export const SFIncident = ({ incident }: { incident: Incident }) => {
	const incidentEvents = incident?.IncidentEvents ?? [];
	return (
		<div
			style={{
				borderColor: "rgba(127.5, 127.5, 127.5, 0.5)",
				borderLeft: "solid",
				borderWidth: 1,
				paddingLeft: 4,
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
