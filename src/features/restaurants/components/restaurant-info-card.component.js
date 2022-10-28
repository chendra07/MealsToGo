import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

//utils
import { spacing } from "../../../utils/sizes";

const Title = styled.Text`
  padding-top: 16px;
  color: red;
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
    <Card elevation={5} style={styles.cardContainer}>
      <Card.Cover
        key={name}
        style={styles.coverContainer}
        source={{ uri: photos[0] }}
      />
      <Title>{name}</Title>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: spacing.md,
  },
  coverContainer: {
    overflow: "hidden",
  },
});
