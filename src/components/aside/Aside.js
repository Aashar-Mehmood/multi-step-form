import labelsData from "./LabelsData";
import StepLabels from "./StepLabels";
import { nanoid } from "nanoid";
export default function Aside() {
  return (
    <aside>
      <div className="labels--container">
        {labelsData.map((data) => {
          return <StepLabels {...data} key={nanoid(10)} />;
        })}
      </div>
    </aside>
  );
}
