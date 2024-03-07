import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./EuclideanHyperbolicGroup.module.css";

export type EuclideanHyperbolicGroupType = {
  thirdEllipseShape?: string;
  botEmojiSusan1?: string;
  botEmojiSusan2?: string;
  botEmojiSusan3?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propPadding2?: CSSProperties["padding"];
};

const EuclideanHyperbolicGroup: FunctionComponent<
  EuclideanHyperbolicGroupType
> = ({
  thirdEllipseShape,
  botEmojiSusan1,
  botEmojiSusan2,
  botEmojiSusan3,
  propPadding,
  propPadding1,
  propPadding2,
}) => {
  const euclideanHyperbolicGroupStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const fifthFrameStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const botEmojisFrameStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div
      className={styles.euclideanHyperbolicGroup}
      style={euclideanHyperbolicGroupStyle}
    >
      <div className={styles.hyperbolicEllipticalFrame}>
        <div className={styles.firstLessonText}>
          <div className={styles.secondEllipseShape}>
            <img
              className={styles.thirdEllipseShape}
              alt=""
              src={thirdEllipseShape}
            />
            <div className={styles.fourthText} />
          </div>
          <div className={styles.emptyFrame}>9:52</div>
        </div>
        <div className={styles.fifthFrame} style={fifthFrameStyle}>
          <div className={styles.annaText}>
            <div className={styles.annaJohnson}>Anna Johnson</div>
            <div className={styles.botEmojisFrame} style={botEmojisFrameStyle}>
              <div className={styles.botEmojisFrameChild} />
              <div className={styles.teacherBotText}>
                <div className={styles.wowICant}>
                  Wow, I can't wait to take you on in that game because I know
                  we'll have a great time.
                </div>
                <div className={styles.botEmojiSusan1Parent}>
                  <img
                    className={styles.botEmojiSusan1}
                    loading="lazy"
                    alt=""
                    src={botEmojiSusan1}
                  />
                  <img
                    className={styles.botEmojiSusan2}
                    loading="lazy"
                    alt=""
                    src={botEmojiSusan2}
                  />
                  <img
                    className={styles.botEmojiSusan3}
                    loading="lazy"
                    alt=""
                    src={botEmojiSusan3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuclideanHyperbolicGroup;
