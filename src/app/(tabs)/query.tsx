import { IconSymbol } from "@/components/ui/IconSymbol";
import { type MockTodo } from "@/models/mockTodo";
import { useTodos } from "@/store/queries/todo/todoQueries";
import {
  ActivityIndicator,
  FlatList,
  Platform,
  Text,
  View,
} from "react-native";
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

  const todoList = (item: MockTodo) => (
    <View key={item.id.toString()} className="flex-row py-2 gap-2">
      <Text className="w-10">
        {item.id}
        .
      </Text>
      <Text className="flex flex-wrap flex-1">
        {item.title}
      </Text>
      <View className="text-right text-black">
        <IconSymbol
          size={20}
          name={item.completed ? "checkmark.circle.fill" : "info.circle.fill"}
          color={item.completed ? "green" : "blue"}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 items-center justify-center pb-16">
      <View className="w-full">
        {Platform.OS === "web" ? (
          <div className="overflow-y-auto max-h-[calc(100vh-48px)] px-4">
            {data?.map(todoList)}
          </div>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View className="px-4">
                {todoList(item)}
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
