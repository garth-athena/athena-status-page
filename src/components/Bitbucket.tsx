import useBitbucket from "../hooks/useBitbucket";
import { useState } from "react";
import { Expand } from "./Expand";
import { StatusLabel } from "./StatusLabel";
import { Card } from "./Card";
import { CardTitle } from "./CardTitle";
import { ExpandButton } from "./ExpandButton";

export const Bitbucket = () => {
	const { data } = useBitbucket();
	const [expanded, setExpanded] = useState(false);

	let status = 0;
	switch (data?.status.description) {
		case "All Systems Operational":
			status = 200;
			break;
		case "Major Service Outage":
			status = 500;
			break;
		case "Partial System Outage":
			status = 401;
			break;
	}
	if (!data) {
		return <div>Loading...</div>;
	}
	return (
		<Card>
			<ExpandButton onClick={() => setExpanded(!expanded)}>
				<CardTitle>Bitbucket</CardTitle>
				<StatusLabel status={status} />
				<div style={{ marginTop: 8 }}>
					<Expand expand={expanded}>
						<div style={{ paddingTop: 12 }}>
							<p style={{ marginBottom: 4, marginTop: 0 }}>
								URL:{" "}
								<strong style={{ fontWeight: 700 }}>
									https://bitbucket.status.atlassian.com/api/v2/summary.json
								</strong>
							</p>
							<p style={{ marginBottom: 0, marginTop: 0 }}>
								Status:{" "}
								<strong style={{ fontWeight: 700 }}>
									{status}
								</strong>
							</p>
						</div>
					</Expand>
				</div>
			</ExpandButton>
		</Card>
	);
};


