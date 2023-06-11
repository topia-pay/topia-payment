import React from "react";
import { View, Text, TextInput } from "react-native";
import { CheckBox } from "@rneui/themed";
import { SafeArea } from "./src/components/safe-area.component";
import Background from "./src/components/background.component";
import BackButton from "./src/components/back-botton.component";
import SuiteButton from "./src/components/suite-button.component";
import VerticalSpacer from "./src/components/vertical-spacer.component";
import styled from "styled-components/native";

const Container = styled(View)`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled(Text)`
  padding-horizontal: 7.5%;
  font-weight: bold;
  text-align: left;
  line-height: 20px;
  align-self: flex-start;
`;

const Label = styled(Text)`
  padding-horizontal: 15%;
  font-weight: 900;
  line-height: 20px;
`;

const Input = styled(TextInput)`
  width: 85%;
  height: 20%;
  border-color: gray;
  border-width: 1px;
  border-radius: 12px;
  background-color: white;
  padding-horizontal: 10px;
  textAlignVertical: top;
`;

const YourScreen = () => {
  return (
    <Background>
      <SafeArea>
        <Container>
          <VerticalSpacer percentage={35} />
          <BackButton></BackButton>
          <VerticalSpacer percentage={10} />
          <Title>
            Merci de mettre tout commentaire,
          </Title>
          <Title>
            remarque, questions ou suggestions :
          </Title>

          <VerticalSpacer percentage={6} />

          <Input multiline={true} numberOfLines={5} />

          <VerticalSpacer percentage={11} />

          <SuiteButton title="SUITE" color="green" />
        </Container>
      </SafeArea>
    </Background>
  );
};

export default YourScreen;
