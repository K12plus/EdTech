import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameA.module.css";

export type FrameAType = {
  bot?: string;
  susan?: string;
  group?: string;
  line?: string;
  frameG?: string;
  frameG1?: string;
  group161370?: string;
  vectorsPair?: string;
  vector?: string;
  group161395?: string;
  group161394?: string;
  group161131?: string;
  group161132?: string;

  /** Style props */
  rectangleDivGap?: CSSProperties["gap"];
  videoName1Width?: CSSProperties["width"];
  textInputHeight?: CSSProperties["height"];
  textInputMinWidth?: CSSProperties["minWidth"];
  xPadding?: CSSProperties["padding"];
  wrapperGroup161394Padding?: CSSProperties["padding"];

  /** Action props */
  onGroupContainerClick?: () => void;
};

const FrameA: FunctionComponent<FrameAType> = ({
  bot,
  susan,
  group,
  line,
  frameG,
  frameG1,
  group161370,
  vectorsPair,
  vector,
  group161395,
  group161394,
  group161131,
  group161132,
  rectangleDivGap,
  videoName1Width,
  textInputHeight,
  textInputMinWidth,
  xPadding,
  wrapperGroup161394Padding,
  onGroupContainerClick,
}) => {
  const videonameContainerStyle: CSSProperties = useMemo(() => {
    return {
      gap: rectangleDivGap,
    };
  }, [rectangleDivGap]);

  const frameContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: videoName1Width,
    };
  }, [videoName1Width]);

  const videoName1Style: CSSProperties = useMemo(() => {
    return {
      height: textInputHeight,
      minWidth: textInputMinWidth,
    };
  }, [textInputHeight, textInputMinWidth]);

  const groupComponentStyle: CSSProperties = useMemo(() => {
    return {
      padding: xPadding,
    };
  }, [xPadding]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: wrapperGroup161394Padding,
    };
  }, [wrapperGroup161394Padding]);

  return (
    <main className={styles.frameA}>
      <div className={styles.frameB}>
        <div className={styles.frameC}>
          <div className={styles.bot}>
            <img className={styles.botIcon} loading="lazy" alt="" src={bot} />
            <div className={styles.susan}>{susan}</div>
          </div>
          <div className={styles.frameD}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src={group}
            />
            <div className={styles.lessonDuration004500}>
              Lesson Duration 00:45:00
            </div>
          </div>
        </div>
      </div>
      <section className={styles.vectorVector}>
        <div
          className={styles.videonameContainer}
          style={videonameContainerStyle}
        >
          <div className={styles.videonameContainerChild} />
          <div className={styles.x}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.frameE}>
                <div className={styles.frameEChild} />
                <b className={styles.geometryEuclideanHyp}>
                  Geometry, Euclidean, Hyp...
                </b>
              </div>
              <img
                className={styles.lineIcon}
                loading="lazy"
                alt=""
                src={line}
              />
              <div className={styles.frameF}>
                <div className={styles.page} />
              </div>
              <div className={styles.rectangleC}>
                <img
                  className={styles.frameGIcon}
                  loading="lazy"
                  alt=""
                  src={frameG}
                />
                <div className={styles.page21}>Page 21</div>
                <img
                  className={styles.frameGIcon1}
                  loading="lazy"
                  alt=""
                  src={frameG1}
                />
              </div>
            </div>
          </div>
          <div className={styles.frameContainer} style={frameContainerStyle}>
            <div className={styles.videoName1} style={videoName1Style} />
            <div className={styles.textInput}>
              <div
                className={styles.groupComponent}
                style={groupComponentStyle}
              >
                <div className={styles.x1}>0.94X</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.vectorFrameVector}>
          <div className={styles.videoNameBoxParent}>
            <div className={styles.videoNameBox}>
              <div className={styles.rectangleGroup}>
                <div className={styles.instanceChild} />
                <div className={styles.leave}>Leave</div>
                <img
                  className={styles.instanceItem}
                  loading="lazy"
                  alt=""
                  src={group161370}
                />
              </div>
            </div>
            <div className={styles.settingsComponent}>
              <div className={styles.frameVectorFrameVectorParent}>
                <div className={styles.frameVectorFrameVector}>
                  <div className={styles.vectorVectorFrame}>
                    <div className={styles.frameVectorFrameVectorInst}>
                      <div className={styles.frameVectorFrameVectorInstChild} />
                      <img
                        className={styles.vectorsPairIcon}
                        loading="lazy"
                        alt=""
                        src={vectorsPair}
                      />
                    </div>
                    <div className={styles.frameVectorFrameVectorInst1}>
                      <div className={styles.frameVectorFrameVectorInstItem} />
                      <img
                        className={styles.vectorIcon}
                        loading="lazy"
                        alt=""
                        src={vector}
                      />
                    </div>
                  </div>
                  <div className={styles.volumeRiseHandIcon}>
                    <div className={styles.volume}>Volume</div>
                    <div className={styles.riseHand}>Rise hand</div>
                  </div>
                </div>
                <div className={styles.volumeControl}>
                  <div className={styles.wrapperGroup161395}>
                    <img
                      className={styles.wrapperGroup161395Child}
                      loading="lazy"
                      alt=""
                      src={group161395}
                    />
                  </div>
                  <div className={styles.mic}>Mic</div>
                </div>
                <div
                  className={styles.wrapperGroup161394Parent}
                  onClick={onGroupContainerClick}
                  style={groupDivStyle}
                >
                  <div className={styles.wrapperGroup161394}>
                    <img
                      className={styles.wrapperGroup161394Child}
                      loading="lazy"
                      alt=""
                      src={group161394}
                    />
                  </div>
                  <div className={styles.settings}>Settings</div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameItem} />
              <div className={styles.groupInstanceParent}>
                <div className={styles.groupInstance}>
                  <img
                    className={styles.groupInstanceChild}
                    loading="lazy"
                    alt=""
                    src={group161131}
                  />
                </div>
                <div className={styles.m}>154M</div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.frameWrapper}>
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src={group161132}
                  />
                </div>
                <div className={styles.m1}>23M</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FrameA;
