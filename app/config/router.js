import React from "react";
import { Image } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import Home from "../screens/home";
import Revenue from "../screens/revenue";
import Devices from "../screens/devices";

export const DeviceStack = StackNavigator({
  Devices: {
    screen: Devices,
    navigationOptions: {
      title: "Devices",
      headerTintColor: "#f44248"
    }
  }
});

export const RevenueStack = StackNavigator({
  Revenue: {
    screen: Revenue,
    navigationOptions: {
      title: "Revenue",
      headerTintColor: "#f44248"
    }
  }
});

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: (
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 140, height: 35 }}
        />
      ),
      headerTintColor: "#f44248"
    }
  }
});

export const Tabs = TabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) =>
          <Icon name="home" size={35} color={tintColor} />
      }
    },
    Revenue: {
      screen: RevenueStack,
      navigationOptions: {
        tabBarLabel: "Revenue",
        tabBarIcon: ({ tintColor }) =>
          <Icon name="monetization-on" size={35} color={tintColor} />
      }
    },
    Devices: {
      screen: DeviceStack,
      navigationOptions: {
        tabBarLabel: "Devices",
        tabBarIcon: ({ tintColor }) =>
          <Icon name="cloud-off" size={35} color={tintColor} />
      }
    }
  },
  {
    tabBarOptions: { activeTintColor: "#000000" }
  }
);
