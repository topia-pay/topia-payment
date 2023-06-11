import React from "react";
import styled from "styled-components/native";
import Background from "./src/components/background.component";


const WelcomeScreen = () => {
  return (
    <Background >
      <Container>
        <Title>Bienvenue</Title>
        <DescriptionText>chez Topia Alerte</DescriptionText>
        <DescriptionText>
          Collecteur de vos remarques et signalements sur les bornes EDF
        </DescriptionText>
        <Button>
          <ButtonText>
            Je signale une anomalie,
          </ButtonText>
          <ButtonText>
            ou dépose mes remarques
          </ButtonText>
        </Button>
        <Logo source={require("./assets/logo.png")} />
      </Container>
    </Background>
  );
};


const Container = styled.View`
  margin-top:10%;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
`;

const Title = styled.Text`
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 0;
  color: #000000;
`;

const DescriptionText = styled.Text`
  font-size: 20px;
  margin-bottom: ${({ last }) => (last ? "20px" : "0")};
  color: #000000;
  text-align: center;
  margin-bottom: 2.5%;

`;

const Button = styled.TouchableOpacity`
  margin-top: 30px;
  background-color: #17ab17;
  padding-vertical: 2px;
  padding-horizontal: 20px;
  margin-bottom: 15%;
  width:95%;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
  resize-mode: contain;
  margin-top:2%;

`;

export default WelcomeScreen;
