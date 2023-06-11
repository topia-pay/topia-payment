import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SafeArea } from "./src/components/safe-area.component";
import Background from "./src/components/background.component";
import { CheckBox } from "@rneui/themed";
import BackButton from "./src/components/back-botton.component";
import styled from "styled-components/native";
import SuiteButton from "./src/components/suite-button.component";

const FormScreen1 = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    selectedButton: Yup.number().required("Button selection is required"),
  });

  const formik = useFormik({
    initialValues: {
      selectedButton: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigation.navigate("FormScreen2", {
        data: { button: values.selectedButton },
      });
    },
  });

  const handleButtonPress = (buttonIndex) => {
    formik.setFieldValue("selectedButton", buttonIndex);
  };

  return (
    <Background>
      <SafeArea>
        <Container>
          <HeaderText>
            Sélectionner la borne sur laquelle vous avez payé :
          </HeaderText>
          <ButtonContainer>
            <ButtonItem
              isSelected={formik.values.selectedButton === 1}
              onPress={() => handleButtonPress(1)}
            >
              <ButtonText isSelected={formik.values.selectedButton === 1}>
                Button 1
              </ButtonText>
            </ButtonItem>
            <ButtonItem
              isSelected={formik.values.selectedButton === 2}
              onPress={() => handleButtonPress(2)}
            >
              <ButtonText isSelected={formik.values.selectedButton === 2}>
                Button 2
              </ButtonText>
            </ButtonItem>
            <ButtonItem
              isSelected={formik.values.selectedButton === 3}
              onPress={() => handleButtonPress(3)}
            >
              <ButtonText isSelected={formik.values.selectedButton === 3}>
                Button 3
              </ButtonText>
            </ButtonItem>
            <ButtonItem
              isSelected={formik.values.selectedButton === 4}
              onPress={() => handleButtonPress(4)}
            >
              <ButtonText isSelected={formik.values.selectedButton === 4}>
                Button 4
              </ButtonText>
            </ButtonItem>
          </ButtonContainer>
          {formik.touched.selectedButton && formik.errors.selectedButton && (
            <ErrorText>{formik.errors.selectedButton}</ErrorText>
          )}
          <CheckBox
            title={
              formik.values.selectedButton === 1
                ? "Button 1"
                : formik.values.selectedButton === 2
                ? "Button 2"
                : formik.values.selectedButton === 3
                ? "Button 3"
                : formik.values.selectedButton === 4
                ? "Button 4"
                : "Label"
            }
            checked={true}
            onPress={() => null}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="green"
            containerStyle={{ width: "85%", backgroundColor: "transparent" }}
          />
          <View style={{marginBottom:"4%"}}/>
          <SuiteButton title="SUITE" color="green" />
        </Container>
      </SafeArea>
    </Background>
  );
};

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin-horizontal: 1%;
  margin-top: -10%;
`;

const ButtonContainer = styled(View)`
  padding-top: 20%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 85%;
  margin-bottom: 4%;
`;

const ButtonItem = styled(TouchableOpacity)`
  background-color: ${(props) => (props.isSelected ? "#67c964" : "#2f56e3")};
  padding: 20px 10px;
  margin-bottom: 10px;
  width: 29%;
`;

const ButtonText = styled(Text)`
  color: ${(props) => (props.isSelected ? "#ffffff" : "white")};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const ErrorText = styled(Text)`
  color: red;
  margin-bottom: 10px;
`;

export default FormScreen1;
