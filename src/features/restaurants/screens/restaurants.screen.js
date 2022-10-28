import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";

//utils
import { spacing } from "../../../utils/sizes";

//components:
import { RestaurantInfo } from "../components/restaurant-info-card.component";

export function RestaurantsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="search" />
      </View>
      <View style={styles.body}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: spacing.md,
    justifyContent: "center",
  },
  body: {
    flex: 1,
    padding: spacing.md,
  },
});
