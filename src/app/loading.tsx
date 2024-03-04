
import { CSSProperties } from "react"
import PropagateLoader from "react-spinners/PropagateLoader";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loading = () => {
  return (
    <div className="flex flex-row justify-center items-center h-96 w-full">
        <PropagateLoader color="#36d7b7" />
    </div>
  )
}

export default Loading