import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  artworkWrap: {
    width: 90,
    height: 90,
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#448dbd',
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 6,
  },
  artwork: {
    width: 80,
    height: 80,
  },

  questionWrap: { 
    marginVertical: 12, 
    alignItems: "center" 
},
  question: { 
    fontSize: 20, 
    color: "#fff", 
    textAlign: "center" 
},
  subtitle: { 
    fontSize: 14, 
    color: "#fff", 
    alignItems: "center",
    textAlign: "center",
    opacity: 0.6, 
    fontStyle: "italic" 
},
  optionsWrap: { 
    marginVertical: 20, 
},
  optionButton: {
    padding: 16,
    width: 400,
    height: 65,
    backgroundColor: "rgba(255,255,255,0.1)",
    marginVertical: 6,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  optionButtonSelected: { 
    backgroundColor: "#00ffff" 
},
  optionText: { 
    color: "#f0ebeb", 
    fontSize: 16, 
    fontWeight: "500",
},
  optionTextSelected: { 
    color: "#000",  
    fontWeight: "600"
},
  optionPressed: { // ← add this
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  optionHovered: { // if you want web hover
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  subLabel: {
      color: '#cfeaf690',
      textAlign: 'left',
      marginBottom: 0,
      fontSize: 14,
    },
});

export default styles;