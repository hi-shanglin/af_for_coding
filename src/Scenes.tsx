import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const font = 'Arial, "PingFang SC", "Microsoft YaHei", sans-serif';

const Frame = ({
  light = false,
  green = false,
  number,
  label,
  children,
}: {
  light?: boolean;
  green?: boolean;
  number: string;
  label: string;
  children: React.ReactNode;
}) => (
  <AbsoluteFill
    style={{
      backgroundColor: green ? "#c9ff59" : light ? "#f2f1e9" : "#111411",
      color: light || green ? "#111411" : "#f2f1e9",
      fontFamily: font,
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `linear-gradient(${light || green ? "#11141108" : "#ffffff06"} 1px, transparent 1px), linear-gradient(90deg, ${light || green ? "#11141108" : "#ffffff06"} 1px, transparent 1px)`,
        backgroundSize: "96px 96px",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 110,
        top: 66,
        right: 110,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `1px solid ${light || green ? "#11141133" : "#ffffff30"}`,
        paddingBottom: 25,
      }}
    >
      <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -1 }}>
        af
        <span
          style={{
            fontWeight: 400,
            marginLeft: 15,
            letterSpacing: 0,
            fontSize: 22,
          }}
        >
          for coding
        </span>
      </div>
      <div style={{ fontFamily: "monospace", fontSize: 19, letterSpacing: 3 }}>
        PROJECT INTRO / {number}
      </div>
    </div>
    {children}
    <div
      style={{
        position: "absolute",
        left: 110,
        bottom: 56,
        fontFamily: "monospace",
        fontSize: 18,
        letterSpacing: 3,
        opacity: 0.65,
      }}
    >
      {label}
    </div>
    <div
      style={{
        position: "absolute",
        right: 110,
        bottom: 56,
        fontSize: 18,
        letterSpacing: 3,
        opacity: 0.6,
      }}
    >
      AF / CONCEPT FILM
    </div>
  </AbsoluteFill>
);

const Orbit = () => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        position: "absolute",
        right: 200,
        top: 290,
        width: 500,
        height: 500,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: -40,
          border: "1px solid #c9ff5944",
          borderRadius: "50%",
          rotate: `${frame * 0.25}deg`,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 45,
            top: 55,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#c9ff59",
            boxShadow: "0 0 45px #c9ff59",
          }}
        />
      </div>
      <Interactive.Div
        name="AF 标志"
        style={{
          width: 500,
          height: 500,
          borderRadius: 115,
          backgroundColor: "#c9ff59",
          color: "#111411",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 245,
          fontWeight: 800,
          letterSpacing: -27,
          paddingRight: 25,
          rotate: interpolate(frame, [0, 32], ["-12deg", "-5deg"], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [0, 32], [0.75, 1], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: "perceptual-scale",
          }),
        }}
      >
        af
      </Interactive.Div>
      <div
        style={{
          position: "absolute",
          bottom: -60,
          right: -48,
          color: "#c9ff59",
          fontSize: 74,
          fontFamily: "monospace",
        }}
      >
        {"</>"}
      </div>
    </div>
  );
};

const IntroInner = () => {
  const frame = useCurrentFrame();
  return (
    <Frame number="01" label="FROM INTENT TO IMPLEMENTATION">
      <Interactive.Div
        name="开场栏目"
        style={{
          position: "absolute",
          left: 120,
          top: 245,
          fontSize: 23,
          color: "#c9ff59",
          letterSpacing: 7,
        }}
      >
        YOUR NEXT CODING FLOW
      </Interactive.Div>
      <Interactive.Div
        name="品牌名称"
        style={{
          position: "absolute",
          left: 110,
          top: 315,
          fontSize: 160,
          lineHeight: 0.98,
          fontWeight: 750,
          letterSpacing: -9,
          translate: interpolate(frame, [0, 24], ["0px 70px", "0px 0px"], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          opacity: interpolate(frame, [0, 16], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        AF for
        <br />
        coding<span style={{ color: "#c9ff59" }}>.</span>
      </Interactive.Div>
      <Interactive.Div
        name="开场主张"
        style={{
          position: "absolute",
          left: 120,
          top: 720,
          fontSize: 65,
          fontWeight: 500,
          opacity: interpolate(frame, [24, 44], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [24, 44], ["0px 30px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        从想法，到代码。
      </Interactive.Div>
      <Orbit />
    </Frame>
  );
};
export const Intro = Interactive.create({
  Component: IntroInner,
  layout: "absolute-fill",
});

const PromptInner = ({ text }: { text: string }) => {
  const frame = useCurrentFrame();
  const count = Math.floor(
    interpolate(frame, [12, 65], [0, text.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );
  return (
    <div
      style={{ fontSize: 55, fontWeight: 500, lineHeight: 1.5, minHeight: 90 }}
    >
      {text.slice(0, count)}
      <span style={{ color: "#a4ce47", opacity: frame % 24 < 15 ? 1 : 0 }}>
        ▍
      </span>
    </div>
  );
};
const Prompt = Interactive.create({
  Component: PromptInner,
  layout: "absolute-fill",
  schema: {
    text: {
      type: "string",
      default: "帮我做一个任务管理应用",
      description: "需求示例",
    },
  },
});

const IntentInner = () => {
  const frame = useCurrentFrame();
  return (
    <Frame light number="02" label="01 / UNDERSTAND THE INTENT">
      <Interactive.Div
        name="需求标题"
        style={{
          position: "absolute",
          left: 110,
          top: 205,
          fontSize: 116,
          lineHeight: 1.2,
          fontWeight: 700,
          letterSpacing: -5,
          translate: interpolate(frame, [0, 22], ["0px 45px", "0px 0px"], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        说出目标，
        <br />
        理清方向。
      </Interactive.Div>
      <Interactive.Div
        name="需求说明"
        style={{
          position: "absolute",
          left: 120,
          top: 560,
          fontSize: 38,
          lineHeight: 1.7,
          color: "#596056",
        }}
      >
        让模糊想法
        <br />
        变成清晰的下一步。
      </Interactive.Div>
      <Interactive.Div
        name="需求输入面板"
        style={{
          position: "absolute",
          left: 930,
          top: 245,
          width: 850,
          height: 370,
          backgroundColor: "#ffffff",
          border: "2px solid #111411",
          borderRadius: 22,
          boxShadow: "14px 14px 0 #d4d8c8",
          padding: 45,
          rotate: interpolate(frame, [0, 30], ["4deg", "0deg"], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 22,
            color: "#77806e",
            marginBottom: 42,
          }}
        >
          <span>YOU / NEW REQUEST</span>
          <span>↗</span>
        </div>
        <Prompt
          name="逐字输入"
          text="帮我做一个任务管理应用"
          style={{ position: "relative", height: 180 }}
        />
      </Interactive.Div>
      <Interactive.Div
        name="目标标签"
        style={{
          position: "absolute",
          left: 940,
          top: 690,
          fontSize: 33,
          borderBottom: "3px solid #111411",
          paddingBottom: 18,
          opacity: interpolate(frame, [75, 90], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        任务管理
      </Interactive.Div>
      <Interactive.Div
        name="场景标签"
        style={{
          position: "absolute",
          left: 1230,
          top: 690,
          fontSize: 33,
          borderBottom: "3px solid #111411",
          paddingBottom: 18,
          opacity: interpolate(frame, [90, 105], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        用户流程
      </Interactive.Div>
      <Interactive.Div
        name="边界标签"
        style={{
          position: "absolute",
          left: 1520,
          top: 690,
          fontSize: 33,
          borderBottom: "3px solid #111411",
          paddingBottom: 18,
          opacity: interpolate(frame, [105, 120], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        验收标准
      </Interactive.Div>
    </Frame>
  );
};
export const Intent = Interactive.create({
  Component: IntentInner,
  layout: "absolute-fill",
});

const StepInner = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: 46,
        boxSizing: "border-box",
        background: "#111411",
        color: "#f2f1e9",
        borderRadius: 20,
        opacity: interpolate(frame, [0, 15], [0, 1], {
          extrapolateRight: "clamp",
        }),
        translate: interpolate(frame, [0, 24], ["0px 55px", "0px 0px"], {
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
      }}
    >
      <div
        style={{
          fontFamily: "monospace",
          fontSize: 24,
          color: "#c9ff59",
          marginBottom: 64,
        }}
      >
        {number} /
      </div>
      <div style={{ fontSize: 72, fontWeight: 650, marginBottom: 24 }}>
        {title}
      </div>
      <div style={{ fontSize: 29, color: "#b7beb0" }}>{description}</div>
    </div>
  );
};
const Step = Interactive.create({
  Component: StepInner,
  layout: "absolute-fill",
  schema: {
    number: { type: "string", default: "01", description: "编号" },
    title: { type: "string", default: "理解", description: "标题" },
    description: {
      type: "string",
      default: "明确目标与边界",
      description: "说明",
    },
  },
});
const PlanInner = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <Frame green number="03" label="02 / MAKE COMPLEXITY ACTIONABLE">
      <Interactive.Div
        name="规划标题"
        style={{
          position: "absolute",
          left: 110,
          top: 205,
          fontSize: 122,
          lineHeight: 1.2,
          fontWeight: 700,
          letterSpacing: -5,
          translate: interpolate(frame, [0, 24], ["0px 50px", "0px 0px"], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        复杂任务，步步有解。
      </Interactive.Div>
      <Interactive.Div
        name="规划说明"
        style={{ position: "absolute", left: 120, top: 380, fontSize: 36 }}
      >
        把目标拆成可执行、可检查的步骤。
      </Interactive.Div>
      <div
        style={{
          position: "absolute",
          left: 310,
          top: 659,
          width: 1250,
          height: 3,
          background: "#11141133",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 310,
          top: 659,
          width: interpolate(frame, [35, 110], [0, 1250], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          height: 3,
          background: "#111411",
        }}
      />
      <Step
        name="理解任务"
        from={0.7 * fps}
        number="01"
        title="理解"
        description="明确目标与边界"
        style={{ left: 120, top: 510, width: 490, height: 355 }}
      />
      <Step
        name="规划路径"
        from={1.7 * fps}
        number="02"
        title="规划"
        description="拆解任务与依赖"
        style={{ left: 715, top: 510, width: 490, height: 355 }}
      />
      <Step
        name="逐步实现"
        from={2.7 * fps}
        number="03"
        title="实现"
        description="逐步推进与反馈"
        style={{ left: 1310, top: 510, width: 490, height: 355 }}
      />
    </Frame>
  );
};
export const Plan = Interactive.create({
  Component: PlanInner,
  layout: "absolute-fill",
});

const CodeInner = () => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        fontFamily: "monospace",
        fontSize: 31,
        lineHeight: 1.9,
        padding: "32px 40px",
      }}
    >
      <Interactive.Div name="代码注释" style={{ color: "#7b8775" }}>
        // Turn intent into working code.
      </Interactive.Div>
      <Interactive.Div
        name="函数定义"
        style={{
          color: "#edece4",
          opacity: interpolate(frame, [8, 18], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        async function createTask(input) {"{"}
      </Interactive.Div>
      <Interactive.Div
        name="校验输入"
        style={{
          color: "#c9ff59",
          opacity: interpolate(frame, [28, 38], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          backgroundColor: "#c9ff5910",
        }}
      >
        {" "}
        + validate(input);
      </Interactive.Div>
      <Interactive.Div
        name="保存任务"
        style={{
          color: "#c9ff59",
          opacity: interpolate(frame, [48, 58], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          backgroundColor: "#c9ff5910",
        }}
      >
        {" "}
        + await tasks.save(input);
      </Interactive.Div>
      <Interactive.Div
        name="返回结果"
        style={{
          color: "#edece4",
          opacity: interpolate(frame, [68, 78], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {" "}
        return {"{"} status: "ready" {"}"};
      </Interactive.Div>
      <div>{"}"}</div>
    </div>
  );
};
const VerifyInner = () => {
  const frame = useCurrentFrame();
  return (
    <Frame number="04" label="03 / BUILD. CHECK. ITERATE.">
      <Interactive.Div
        name="验证标题"
        style={{
          position: "absolute",
          left: 110,
          top: 215,
          fontSize: 107,
          lineHeight: 1.3,
          fontWeight: 700,
          letterSpacing: -5,
          translate: interpolate(frame, [0, 24], ["0px 50px", "0px 0px"], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        写得出来，
        <br />
        也经得起<span style={{ color: "#c9ff59" }}>验证。</span>
      </Interactive.Div>
      <Interactive.Div
        name="验证说明"
        style={{
          position: "absolute",
          left: 120,
          top: 555,
          fontSize: 37,
          lineHeight: 1.8,
          color: "#aeb7a6",
        }}
      >
        连接编写、检查与迭代，
        <br />
        让每次修改都有据可循。
      </Interactive.Div>
      <div
        style={{
          position: "absolute",
          left: 970,
          top: 235,
          width: 830,
          height: 475,
          background: "#191f19",
          border: "1px solid #56624b",
          borderRadius: 18,
          overflow: "hidden",
          boxShadow: "0 25px 80px #00000044",
        }}
      >
        <div
          style={{
            padding: "23px 40px",
            background: "#232b20",
            fontFamily: "monospace",
            fontSize: 22,
            color: "#adb8a4",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>task.ts</span>
          <span>+ 2 changes</span>
        </div>
        <CodeInner />
      </div>
      <Interactive.Div
        name="检查完成"
        style={{
          position: "absolute",
          left: 970,
          top: 765,
          width: 830,
          padding: "28px 38px",
          backgroundColor: "#c9ff59",
          color: "#111411",
          fontSize: 35,
          fontWeight: 600,
          borderRadius: 12,
          opacity: interpolate(frame, [105, 120], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [105, 125], ["0px 25px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        ✓ 输入校验 · ✓ 逻辑检查 · ✓ 结果确认
      </Interactive.Div>
      <Interactive.Div
        name="演示标识"
        style={{
          position: "absolute",
          left: 980,
          top: 890,
          fontSize: 20,
          color: "#7f8b75",
        }}
      >
        工作流概念演示
      </Interactive.Div>
    </Frame>
  );
};
export const Verify = Interactive.create({
  Component: VerifyInner,
  layout: "absolute-fill",
});

const CloseInner = () => {
  const frame = useCurrentFrame();
  return (
    <Frame green number="05" label="LESS FRICTION. MORE CREATION.">
      <Interactive.Div
        name="结束品牌"
        style={{
          position: "absolute",
          left: 120,
          top: 220,
          fontSize: 42,
          fontWeight: 600,
          letterSpacing: -1,
        }}
      >
        AF for coding
      </Interactive.Div>
      <Interactive.Div
        name="结束主张"
        style={{
          position: "absolute",
          left: 110,
          top: 325,
          fontSize: 160,
          fontWeight: 750,
          lineHeight: 1.24,
          letterSpacing: -8,
          translate: interpolate(frame, [0, 26], ["0px 70px", "0px 0px"], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          opacity: interpolate(frame, [0, 12], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        把想法，
        <br />
        写成现实。
      </Interactive.Div>
      <Interactive.Div
        name="结束行动文案"
        style={{
          position: "absolute",
          left: 120,
          top: 800,
          fontSize: 37,
          opacity: interpolate(frame, [30, 48], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        你的下一次创造，从这里开始。
      </Interactive.Div>
      <Interactive.Div
        name="向前箭头"
        style={{
          position: "absolute",
          right: 180,
          top: 365,
          width: 380,
          height: 380,
          border: "3px solid #111411",
          borderRadius: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 240,
          fontWeight: 300,
          rotate: interpolate(frame, [0, 38], ["-45deg", "0deg"], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [0, 38], [0.7, 1], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: "perceptual-scale",
          }),
        }}
      >
        ↗
      </Interactive.Div>
    </Frame>
  );
};
export const Close = Interactive.create({
  Component: CloseInner,
  layout: "absolute-fill",
});
