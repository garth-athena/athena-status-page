import { expandCircle, Icon } from "./Icon";

export const ExpandButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      style={{
        appearance: "none",
        background: "none",
        border: "none",
        borderRadius: "50%",
        padding: 0,
        position: "absolute",
        right: 16,
        top: 16,
      }}
      title={"Expand"}
    >
      <Icon d={expandCircle} style={{ height: 24, width: 24 }} />
    </button>
  );
};
