import React from "react";
import { View } from "react-native";

const VerticalSpacer = ({ percentage }) => {
  const marginBottom = `${percentage}%`;

  return <View style={{ marginBottom }} />;
};

export default VerticalSpacer;
