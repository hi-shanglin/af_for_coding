import { Audio } from "@remotion/media";
import {
  AbsoluteFill,
  Track,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Intro, Intent, Plan, Verify, Close } from "./Scenes";
const Progress = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        height: 7,
        width: `${(100 * (frame + 1)) / durationInFrames}%`,
        background: "#899c61",
        mixBlendMode: "difference",
      }}
    />
  );
};
export const AFVideo = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ background: "#111411" }}>
      <Track name="五段叙事">
        <Intro name="01 品牌登场" durationInFrames={5 * fps} />
        <Intent name="02 理解需求" from={5 * fps} durationInFrames={6 * fps} />
        <Plan name="03 拆解任务" from={11 * fps} durationInFrames={7 * fps} />
        <Verify
          name="04 编写与验证"
          from={18 * fps}
          durationInFrames={7 * fps}
        />
        <Close name="05 品牌收尾" from={25 * fps} durationInFrames={5 * fps} />
      </Track>
      <Track name="原创电子配乐">
        <Audio
          name="Signal / 120 BPM"
          src={staticFile("signal.wav")}
          durationInFrames={30 * fps}
          volume={0.8}
        />
      </Track>
      <Progress />
    </AbsoluteFill>
  );
};
