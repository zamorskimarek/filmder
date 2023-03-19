import "./Button.css";
import DoneIcon from "@mui/icons-material/Done";
import CancelIcon from "@mui/icons-material/Cancel";
interface ButtonProps {
  variant: "accept" | "reject";
}

export const Button = ({ variant }: ButtonProps) => {
  return (
    <>
      {variant === "accept" ? (
        <div className="buttonContainer">
          <DoneIcon sx={{ fontSize: "2rem" }} />
          <p className="button">Accept</p>
        </div>
      ) : (
        <div
          className="buttonContainer"
          style={{ backgroundColor: "#fd3546", flexDirection: "row-reverse" }}
        >
          <CancelIcon sx={{ fontSize: "2rem" }} />
          <p className="button">Reject</p>
        </div>
      )}
    </>
  );
};
