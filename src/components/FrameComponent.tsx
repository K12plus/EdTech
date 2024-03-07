import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  chatBubbleInstance?: string;
  userMessage?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  chatBubbleInstance,
  userMessage,
}) => {
  return (
    <div className={styles.component36Parent}>
      <div className={styles.component36}>
        <img
          className={styles.chatBubbleInstance}
          loading="lazy"
          alt=""
          src={chatBubbleInstance}
        />
        <div className={styles.lineConnector}>
          <div className={styles.lessons}>Lessons</div>
        </div>
        <div className={styles.teacherBotMessage} />
      </div>
      <div className={styles.component37}>
        <img
          className={styles.userMessageIcon}
          loading="lazy"
          alt=""
          src={userMessage}
        />
        <div className={styles.chat}>Chat</div>
        <div className={styles.chatBox} />
      </div>
    </div>
  );
};

export default FrameComponent;
