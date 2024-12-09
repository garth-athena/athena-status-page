import { useState, useEffect } from "react";

interface Instance {
	key: string;
	location: string;
	environment: string;
	releaseVersion: string;
	releaseNumber: string;
	maintenanceWindow: string;
	status: string;
	Incidents: Incident[];
	Maintenances: Maintenance[];
	GeneralMessages: GeneralMessage[];
}

interface Incident {
	id: number;
	message: string | null;
	externalId: string | null;
	affectsAll: boolean;
	isCore: boolean;
	additionalInformation: string | null;
	serviceKeys: string[];
	instanceKeys: string[];
	IncidentImpacts: IncidentImpact[];
	IncidentEvents: IncidentEvent[];
	createdAt: string;
	updatedAt: string;
}

interface IncidentImpact {
	id: number;
	startTime: string;
	endTime: string | null;
	serviceIssue: string;
	endUserImpact: string;
	type: string;
	createdAt: string;
	updatedAt: string;
}

interface IncidentEvent {
	id: number;
	type: string;
	message: string;
	createdAt: string;
	updatedAt: string;
}

interface Maintenance {
	id: number;
	message: string | null;
	externalId: string | null;
	name: string | null;
	externalMaintenanceType: string | null;
	releaseType: string | null;
	substrate: string | null;
	affectsAll: boolean;
	isCore: boolean;
	plannedStartTime: string | null;
	plannedEndTime: string | null;
	additionalInformation: string | null;
	serviceKeys: string[];
	instanceKeys: string[];
	MaintenanceImpacts: MaintenanceImpact[];
	createdAt: string;
	updatedAt: string;
}

interface MaintenanceImpact {
	id: number;
	startTime: string;
	endTime: string | null;
	type: string;
	systemAvailability: string;
	createdAt: string;
	updatedAt: string;
}

interface GeneralMessage {
	id: number;
	subject: string;
	body: string;
	startDate: string;
	endDate: string | null;
	externalId: string | null;
	isVisibleWhenClosed: boolean;
}

interface SalesforceTrustState {
	status: "pending" | "success" | "error";
	data: Instance | null;
}

const useSalesforceTrust = (): SalesforceTrustState => {
	const [state, setState] = useState<SalesforceTrustState>({
		status: "pending",
		data: null,
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api.status.salesforce.com/v1/instances/AUS74/status`
				);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const result: Instance = await response.json();
				setState({
					status: "success",
					data: result,
				});
			} catch (error) {
				setState({
					status: "error",
					data: null,
				});
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return state;
};

export default useSalesforceTrust;
