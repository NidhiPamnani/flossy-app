import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  paddingVertical: 24,
  justifyContent: 'center', // center items vertically
},
  progress: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 24,
  },
  dotInactive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  dotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#22D3EE",
  },

  textContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: { color: "white", fontSize: 28, fontWeight: "bold", textAlign: "center" },
  subtitle: { color: "rgba(255,255,255,0.8)", fontSize: 20, textAlign: "center", marginTop: 8 },
  description: { color: "rgba(255,255,255,0.6)", fontSize: 16, textAlign: "center", marginTop: 4, marginBottom: 48 },

  sinkScene: {
  width: '100%',
  maxWidth: 300,
  aspectRatio: 1, // keeps sink square-ish
  marginVertical: 24, // space between text and button
  alignItems: 'center',
  justifyContent: 'center',
},
  sinkCounter: {
    width: "100%",
    height: 120,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.4)",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
    paddingBottom: 16,
  },
  sinkBowl: {
    width: 160,
    height: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.4)",
    position: "absolute",
    top: -40,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  drain: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.4)",
    marginBottom: 4,
  },

  faucet: {
    position: "absolute",
    top: -100,
    alignItems: "center",
  },
  faucetNeck: { width: 8, height: 64, backgroundColor: "rgba(255,255,255,0.5)", borderRadius: 4 },
  faucetSpoutCurve: { width: 80, height: 8, backgroundColor: "rgba(255,255,255,0.5)", borderRadius: 4, marginTop: -4 },
  faucetSpoutDown: { width: 8, height: 40, backgroundColor: "rgba(255,255,255,0.5)", borderRadius: 2 },
  faucetHandleLeft: { position: "absolute", left: -32, top: 0, width: 24, height: 24, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.4)" },
  faucetHandleRight: { position: "absolute", right: -32, top: 0, width: 24, height: 24, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.4)" },

  mirror: { position: "absolute", top: -150, width: "100%", height: 80, backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 16, borderWidth: 2, borderColor: "rgba(255,255,255,0.2)", alignItems: "center", justifyContent: "center" },
  mirrorReflection: { position: "absolute", inset: 4, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.1)" },

  flossBoxContainer: { position: "absolute", bottom: 80, right: 16, alignItems: "center", justifyContent: "center" },
  flossBox: {
    width: 80,
    height: 112,
    backgroundColor: "#22D3EE",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.6)",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  boxLabelTop: { position: "absolute", top: 4, width: 56, height: 8, borderRadius: 4, backgroundColor: "rgba(255,255,255,0.4)" },
  boxLabelMiddle: { position: "absolute", top: 16, width: 40, height: 4, borderRadius: 2, backgroundColor: "rgba(255,255,255,0.3)" },
  toothIcon: { fontSize: 32, marginTop: 16 },
  boxLabelBottom: { position: "absolute", bottom: 8, width: 48, height: 4, borderRadius: 2, backgroundColor: "rgba(255,255,255,0.4)" },
  sparkle1: { position: "absolute", top: -12, right: -12 },
  sparkle2: { position: "absolute", bottom: -12, left: -12 },
  sparkle3: { position: "absolute", top: 16, left: -16 },
  sparkle4: { position: "absolute", top: 24, right: -16 },

  decorativeLeft: { position: "absolute", bottom: 80, left: 24, width: 48, height: 64, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 16, alignItems: "center", justifyContent: "center" },
  decorativeRight: { position: "absolute", bottom: 80, left: 120, width: 40, height: 56, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 20, alignItems: "flex-end", justifyContent: "flex-end", paddingBottom: 4 },
  decorativeEmoji: { fontSize: 32 },

  arrow: { position: "absolute", bottom: 120, right: 16 },
  arrowEmoji: { fontSize: 32 },

  button: {
  marginTop: 10, // space after sink
  width: 320,
  paddingVertical: 16,
  borderRadius: 20,
  backgroundColor: '#22d3ee',
  alignItems: 'center',
}
,
  buttonText: { color: "#1E293B", fontWeight: "bold", fontSize: 16 },
});

export default styles;
