import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import RoundButton from "./components/RoundButton";

const home = () => {
  const balance = 1453;

  const onAddMoney = () => {};

  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>{balance}</Text>
          <Text style={styles.currency}>$</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <RoundButton name="Add Money" image={"add"} onPress={onAddMoney} />
        <RoundButton name="Exchange" image={"refresh"} onPress={onAddMoney} />
        <RoundButton name="List" image={"list"} onPress={onAddMoney} />
        <RoundButton name="Add Money" image={"add"} onPress={onAddMoney} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  account: {
    margin: 80,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 10,
  },
  balance: { fontSize: 50, fontWeight: "bold" },
  currency: { fontSize: 20, fontWeight: "500" },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});

export default home;
