import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from "../../assets/data/exercises.json";
import { Stack } from "expo-router";
import { useState } from "react";

export default function ExerciseDetailPage() {
  const [expanded, setExpanded] = useState(false);
  const params = useLocalSearchParams();
  const exercise = exercises.find((item) => item.name === params.name);
  if (!exercise) {
    return <Text> Exercise Not Found </Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: exercise.name }} />
      <View style={styles.panel}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          {exercise.muscle.toUpperCase()} | {exercise.equipment.toUpperCase()}
        </Text>
      </View>

      <View style={styles.panel}>
        <Text numberOfLines={expanded ? 0 : 3}>
          Instructions: {exercise.instructions}
        </Text>
        <Text style={styles.seeMore} onPress={() => setExpanded(!expanded)}>
          {expanded ? "See Less..." : "See More.."}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    backgroundColor: "ghostwhite",
  },
  panel: {
    marginVertical: 5,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: "#fff",
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
  seeMore: {
    padding: 5,
    alignSelf: "center",
    color: "gray",
  },
});
