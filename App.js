import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import exercises from "./assets/data/exercises.json";
import ExerciseListItem from "./src/components/ExerciseListItem";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={{ gap: 10 }}
        data={exercises}
        renderItem={({ item }) => <ExerciseListItem item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "gainsboro",
    justifyContent: "center",
    padding: 10,
  },
});
