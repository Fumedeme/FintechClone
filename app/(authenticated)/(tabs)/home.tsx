import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import RoundButton from "@/components/RoundButton";
import Dropdown from "@/components/Dropdown";
import { useBalanceStore } from "@/store/balance-store";
import { defaultStyles } from "@/constants/Styles";

const home = () => {
  const { transactions, runTransaction, balance, clearTransactions } =
    useBalanceStore();

  const onAddMoney = () => {
    runTransaction({
      id: Math.random().toString(),
      title: "Added Money",
      amount: Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1),
      date: new Date(),
    });
  };

  // 1 46

  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>{balance()}</Text>
          <Text style={styles.currency}>$</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <RoundButton name="Add Money" image={"add"} onPress={onAddMoney} />
        <RoundButton
          name="Exchange"
          image={"refresh"}
          onPress={clearTransactions}
        />
        <RoundButton name="List" image={"list"} />
        <Dropdown />
      </View>

      <Text style={defaultStyles.sectionHeader}>Transactions</Text>
      <View style={styles.transactions}>
        {transactions.length <= 0 ? (
          <Text>No transactions yet...</Text>
        ) : (
          transactions.map((transaction) => (
            <Text id={transaction.id}>{transaction.amount}</Text>
          ))
        )}
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
  transactions: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 16,
    gap: 20,
  },
});

export default home;
