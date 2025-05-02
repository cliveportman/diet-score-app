import React from "react";
import { Tabs } from "expo-router";
import TailwindColors from "tailwindcss/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { SafeAreaView, View, Text } from "react-native";

export default function TabLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height: 50,
          backgroundColor: "#ffaaff",
          borderBottomWidth: 1,
          borderBottomColor:
            colorScheme === "light"
              ? TailwindColors.slate[300]
              : TailwindColors.slate[700],
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: `'#ff00ff'`,
          }}
        >
          Way of the Goat
        </Text>
      </View>
      <Tabs
        initialRouteName={"scores/index"}
        backBehavior={"history"}
        screenOptions={{
          tabBarActiveTintColor:
            colorScheme === "light"
              ? TailwindColors.slate[800]
              : TailwindColors.slate[300],
          tabBarActiveBackgroundColor:
            colorScheme === "light"
              ? TailwindColors.slate[300]
              : TailwindColors.slate[800],
          tabBarInactiveTintColor:
            colorScheme === "light"
              ? TailwindColors.slate[500]
              : TailwindColors.slate[500],
          tabBarStyle: {
            height: 64,
            paddingTop: 0,
            backgroundColor:
              colorScheme === "light"
                ? TailwindColors.slate[100]
                : TailwindColors.slate[900],
            borderTopWidth: 0,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="progress/index"
          options={{
            title: "Progress",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name={"show-chart"} size={28} color={color} />
            ),
            tabBarIconStyle: { marginTop: 6 },
            tabBarLabelStyle: { fontSize: 14, paddingBottom: 6 },
          }}
        />
        <Tabs.Screen
          name="scores/index"
          options={{
            title: "Scores",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name={"apps"} size={32} color={color} />
            ),
            tabBarIconStyle: { marginTop: 6 },
            tabBarLabelStyle: { fontSize: 15, paddingBottom: 6 },
          }}
        />
        <Tabs.Screen
          name="scores/[day]"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="user-guide/index"
          options={{
            title: "User guide",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name={"menu-book"} size={28} color={color} />
            ),
            tabBarIconStyle: { marginTop: 6 },
            tabBarLabelStyle: { fontSize: 14, paddingBottom: 6 },
          }}
        />
        <Tabs.Screen
          name="settings/index"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
