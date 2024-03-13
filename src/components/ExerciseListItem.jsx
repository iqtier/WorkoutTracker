import React, { Component } from 'react'
import { StyleSheet, Text, View } from "react-native";

export default function ExerciseListItem({ item }) {

  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  exerciseContainer: {
    marginHorizontal:10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
});
