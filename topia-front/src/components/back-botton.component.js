import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const BackButton = ({ onPress }) => {
  return (
    <View style={styles.bigContainer}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Entypo name="arrow-bold-left" size={16} color="blue" />
        <Text style={styles.text}>Retour</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
    alignSelf:"flex-end",
    alignItems: "flex-end",
    marginRight:"7.5%"
  },
  container: {
    backgroundColor: "white",
    paddingVertical: "0.8%",
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center"
  },
  text: {
    color: "blue",
    marginLeft: 5,
    paddingBottom:2
  },
});

export default BackButton;
