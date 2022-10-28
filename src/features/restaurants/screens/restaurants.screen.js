import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

//utils

//components:
import { RestaurantInfo } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

const RestaurantListContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

export function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="search" />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfo />
      </RestaurantListContainer>
    </SafeArea>
  );
}
