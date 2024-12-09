import { statusColors } from "../constants/statusColors";
import { statusLabels } from "../constants/statusLabels";

export const StatusLabel = ({ status }: { status: number }) => (
  <div
    style={{
      backgroundColor: statusColors[status as keyof typeof statusColors],
      borderRadius: 4,
      color: "white",
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
      width: "max-content",
    }}
  >
    {statusLabels[status as keyof typeof statusLabels]}
  </div>
);
