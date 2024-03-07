import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import EuclideanHyperbolicGroup from "./EuclideanHyperbolicGroup";
import styles from "./GroupComponent.module.css";

const GroupComponent: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <FrameComponent
        chatBubbleInstance="/vector-4.svg"
        userMessage="/vector-5.svg"
      />
      <div className={styles.settingsPanel}>
        <div className={styles.componentInstance}>
          <div className={styles.componentInstanceChild} />
          <div className={styles.lessonsList}>
            <div className={styles.vectorLine}>
              <div className={styles.teacherBotText}>
                <div className={styles.rectangleFrame}>
                  <div className={styles.teacherBot}>Teacher Bot - Susan</div>
                </div>
                <div className={styles.geometryGroup}>9:50</div>
                <div className={styles.groupInstance}>
                  <div className={styles.movieFrame} />
                  <img
                    className={styles.frameVectorFrame}
                    alt=""
                    src="/frame-vector-frame@2x.png"
                  />
                  <div className={styles.volumeRiseHand} />
                </div>
              </div>
            </div>
            <div className={styles.micText}>
              <div className={styles.ellipseGroupParent}>
                <div className={styles.ellipseGroup} />
                <img
                  className={styles.annaMessageIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-6.svg"
                />
                <div className={styles.start}>Start</div>
              </div>
            </div>
            <div className={styles.hypElliptical}>
              <div className={styles.euclideanHyperbolicAnd}>
                Euclidean, Hyperbolic and Elliptical
              </div>
            </div>
            <img
              className={styles.lessonsListChild}
              alt=""
              src="/group-161536.svg"
            />
            <EuclideanHyperbolicGroup
              thirdEllipseShape="/third-ellipse-shape@2x.png"
              botEmojiSusan1="/bot-emoji-susan-1@2x.png"
              botEmojiSusan2="/bot-emoji-susan-2@2x.png"
              botEmojiSusan3="/bot-emoji-susan-3@2x.png"
            />
            <div className={styles.lessonsListInner}>
              <div className={styles.frameParent}>
                <div className={styles.teacherBotSusanWrapper}>
                  <div className={styles.teacherBot1}>Teacher Bot - Susan</div>
                </div>
                <div className={styles.rewardIcon}>
                  <div className={styles.emptyTextFrame}>
                    <div className={styles.lessonReward}>
                      <div className={styles.teacherMessage} />
                      <div className={styles.annaThisLesson}>
                        Anna, this lesson will earn coins to play more fun
                        games.
                      </div>
                    </div>
                    <img
                      className={styles.emojiSmilingFaceWithHeart}
                      loading="lazy"
                      alt=""
                      src="/-emoji--smiling-face-with-hearteyes--1@2x.png"
                    />
                  </div>
                  <div className={styles.frameContent}>
                    <div className={styles.emptySpace}>9:53</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typeInput} />
          </div>
        </div>
      </div>
      <div className={styles.verticalLine}>
        <div className={styles.frameGroup}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/group-161410.svg"
          />
          <div className={styles.type}>Type...</div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
