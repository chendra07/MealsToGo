import React from "react";
import { Card, Title } from "react-native-paper";
import styled from "styled-components/native";

//utils

const RestaurantTitle = styled(Title)`
  font-family: ${(props) => props.theme.fonts.body};
  padding-top: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export function RestaurantInfo({ restaurant = {} }) {
  const {
    name = "dummy",
    icon = "",
    photos = [
      "https://asset.kompas.com/crops/45ok5zXHtN1S1PsXbzXIWH2rPjY=/0x61:800x594/375x240/data/photo/2022/05/15/6280f7d231bd6.jpg",
    ],
    address = "",
    isOpenNow = true,
    rating = 4,
    isClosedTemporary = false,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <RestaurantTitle>{name}</RestaurantTitle>
    </RestaurantCard>
  );
}
