import { FunctionComponent, useCallback } from "react";
import FrameA from "../components/FrameA";
import GroupComponent from "../components/GroupComponent";
import styles from "./FrameContainer.module.css";

const FrameContainer: FunctionComponent = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "2" to the project
  }, []);

  return (
    <div className={styles.frameContainer}>
      <FrameA
        bot="/bot@2x.png"
        susan="Susan"
        group="/group.svg"
        line="/rectangle-147614@2x.png"
        frameG="/vector.svg"
        frameG1="/vector-1.svg"
        group161370="/group-161370.svg"
        vectorsPair="/vector-2.svg"
        vector="/vector-3.svg"
        group161395="/group-161395.svg"
        group161394="/group-161394.svg"
        group161131="/group-161131.svg"
        group161132="/group-161132.svg"
        onGroupContainerClick={onGroupContainerClick}
      />
      <div className={styles.addASubheading1} />
      <div className={styles.addASubheading3} />
      <GroupComponent />
    </div>
  );
};

export default FrameContainer;
