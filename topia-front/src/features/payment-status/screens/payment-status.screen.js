import React from "react";
import { View, Text } from "react-native";
import { CheckBox } from "@rneui/themed";
import { SafeArea } from "./src/components/safe-area.component";
import Background from "./src/components/background.component";
import BackButton from "./src/components/back-botton.component";
import SuiteButton from "./src/components/suite-button.component";
import VerticalSpacer from "./src/components/vertical-spacer.component";

const YourScreen = () => {
  return (
    <Background>
      <SafeArea>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <VerticalSpacer percentage={35} />
          <BackButton></BackButton>
          <VerticalSpacer percentage={10} />
          <Text style={{ paddingHorizontal: "7.5%" }}>
            Préciser au maximum les réponses aux questions suivantes :
          </Text>
          <VerticalSpacer percentage={4} />

          <CheckBox
            title="j'ai pas pu commencer mon paiement"
            checked={true}
            onPress={() => null}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="green"
            containerStyle={{ width: "85%", backgroundColor: "transparent" }}
          />
          <CheckBox
            title="j'ai pu commencer mon paiement"
            checked={false}
            onPress={() => null}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="green"
            containerStyle={{ width: "85%", backgroundColor: "transparent" }}
          />
          <VerticalSpacer percentage={18} />

          <SuiteButton title="SUITE" color="green" />
        </View>
      </SafeArea>
    </Background>
  );
};

export default YourScreen;
