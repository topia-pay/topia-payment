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
  width: 65%;
  height: 5.5%;
  border-color: gray;
  border-width: 1px;
  border-radius: 12px;
  background-color: white;
  padding-horizontal: 10px;
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
            Donnez-nous le plus de détails possible pour faciliter nos recherches
          </Title>
          <VerticalSpacer percentage={12} />

          <Label>Numéro de portable, client,</Label>
          <Label>référence facture, identifiant</Label>
          <Label>sur lequel vous avez payé ou voulu payer</Label>
          <VerticalSpacer percentage={6} />

          <Input />

          <VerticalSpacer percentage={11} />

          <SuiteButton title="SUITE" color="green" />
        </Container>
      </SafeArea>
    </Background>
  );
};

export default YourScreen;
