import React from "react";
import { View } from "react-native";
import { Button as RNEButton } from "@rneui/themed";

const SuiteButton = ({ color, title, onPress }) => {
  return (
    <View style={{ width: "85%" }}>
      <RNEButton
        title={title}
        onPress={onPress}
        buttonStyle={{ backgroundColor: color, padding: "4.2%" }}
        titleStyle={{ fontSize: 22 }} 
      />
    </View>
  );
};

export default SuiteButton;
