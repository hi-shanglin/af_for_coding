import { Composition, Folder } from "remotion";
import { AFVideo } from "./Composition";
import { Intro, Intent, Plan, Verify, Close } from "./Scenes";
export const RemotionRoot = () => (
  <>
    <Composition
      id="AF-for-coding"
      component={AFVideo}
      width={1920}
      height={1080}
      fps={30}
      durationInFrames={900}
    />
    <Folder name="Scenes">
      <Composition
        id="01-Intro"
        component={Intro}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={150}
      />
      <Composition
        id="02-Intent"
        component={Intent}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={180}
      />
      <Composition
        id="03-Plan"
        component={Plan}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={210}
      />
      <Composition
        id="04-Verify"
        component={Verify}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={210}
      />
      <Composition
        id="05-Close"
        component={Close}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={150}
      />
    </Folder>
  </>
);
