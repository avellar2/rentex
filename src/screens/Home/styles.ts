import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;

    background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    height: 113px;
    background-color: ${({theme})=> theme.colors.header};
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: row;
    padding: 0 32px;
    padding-bottom: 28px;
`

export const TotalCars = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(15)}px;
    font-family: ${({theme})=> theme.fonts.primary_400};
`