import { IconSymbol } from "@/components/ui/IconSymbol";
import { useTodos } from "@/store/queries/todo/todoQueries";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function QueryScreen() {
  const { data, isLoading } = useTodos();

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <View>
          <ActivityIndicator size="large" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center pb-16">
      <View className="w-full px-4">
        <ScrollView>
          {data?.map(todo => (
            <View key={todo.id} className="flex-row py-2 gap-2">
              <Text className="w-10">
                {todo.id}
                .
              </Text>
              <Text className="flex flex-wrap flex-1">
                {todo.title}
              </Text>
              <View className="text-right text-black">
                <IconSymbol
                  size={20}
                  name={todo.completed ? "checkmark.circle.fill" : "info.circle.fill"}
                  color={todo.completed ? "green" : "blue"}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
