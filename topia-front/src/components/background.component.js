import React from 'react';
import styled from "styled-components/native";

const Background = ({  children }) => {
  return (
    <BackgroundImage source={require("../../assets/background_image.jpg")} >
      {children}
    </BackgroundImage>
  );
};

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  resize-mode: cover;
  justify-content: center;
`;

export default Background;
