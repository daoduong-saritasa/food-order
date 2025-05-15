import { IconSymbol } from "@//components/ui/IconSymbol";
import { getRestaurant, type Restaurant } from "@/api/services/mockRestaurant";
import { ComponentWithHead } from "@/components/ComponentWithHead";
import { useRoute } from "@react-navigation/native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RestaurantScreen() {
  const route = useRoute<any>();
  const { id } = route.params as { id: string };
  const [activeTab, setActiveTab] = useState("popular");
  const [isLoading, setIsLoading] = useState(true);

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    const loadRestaurant = async () => {
      setIsLoading(true);
      const restaurant = await getRestaurant(Number(id));
      setRestaurant(restaurant ?? null);
      setIsLoading(false);
    };
    loadRestaurant();
  }, [id]);

  const renderMenuItems = (category: string) => {
    if (!restaurant) {
      return null;
    }
    return restaurant.menu[category as keyof typeof restaurant.menu]?.map(
      (item: {
        id: string;
        name: string;
        description: string;
        price: number;
        image: string;
      }) => (
        <View key={item.id} style={styles.menuItem}>
          <Image source={{ uri: item.image }} style={styles.menuItemImage} />
          <View style={styles.menuItemContent}>
            <Text style={styles.menuItemName}>
              {item.name}
            </Text>
            <Text style={styles.menuItemDescription}>
              {item.description}
            </Text>
            <View style={styles.menuItemFooter}>
              <Text style={styles.menuItemPrice}>
                $
                {item.price.toFixed(2)}
              </Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    );
  };

  if (isLoading) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={[styles.loadingContainer]}>
          <ActivityIndicator size="large" />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  if (!restaurant) {
    return null;
  }

  return (
    <ComponentWithHead title={restaurant.name}>
      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Link href="/">
              <View style={styles.backButtonContent}>
                <IconSymbol size={28} name="chevron.left" color="#000" />
                <Text style={styles.backButtonText}>Back</Text>
              </View>
            </Link>
          </TouchableOpacity>
        </SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View style={styles.heroContainer}>
            <Image
              source={{ uri: restaurant.image }}
              style={styles.heroImage}
            />
            <View style={styles.heroOverlay}>
              <Text style={styles.restaurantName}>
                {restaurant.name}
              </Text>
              <Text style={styles.restaurantCuisine}>
                {restaurant.categories.join(", ")}
              </Text>
            </View>
          </View>

          <View style={styles.infoBar}>
            <View style={styles.infoItem}>
              <Text style={styles.infoText}>
                Order by 
                {' '}
                {restaurant.orderDeadline}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoText}>
                Group order: 
                {' '}
                {restaurant.groupOrderMinimum}
                + people
              </Text>
            </View>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Start Group Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>
                Join Existing Order
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tabContainer}>
            <View style={styles.tabBar}>
              <TouchableOpacity
                style={[
                  styles.tab,
                  activeTab === "popular" && styles.activeTab,
                ]}
                onPress={() => setActiveTab("popular")}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "popular" && styles.activeTabText,
                  ]}
                >
                  Popular
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === "pasta" && styles.activeTab]}
                onPress={() => setActiveTab("pasta")}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "pasta" && styles.activeTabText,
                  ]}
                >
                  Pasta
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === "pizza" && styles.activeTab]}
                onPress={() => setActiveTab("pizza")}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "pizza" && styles.activeTabText,
                  ]}
                >
                  Pizza
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.menuContainer}>
              {renderMenuItems(activeTab)}
            </View>
          </View>
        </ScrollView>
      </View>
    </ComponentWithHead>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: -10,
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 10,
  },
  backButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    alignItems: "center",
    justifyContent: "center",
  },
  cartButton: {
    position: "relative",
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  cartBadge: {
    position: "absolute",
    top: 3,
    right: 3,
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: "#f06428",
    alignItems: "center",
    justifyContent: "center",
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  heroContainer: {
    position: "relative",
    height: 200,
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  heroOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  restaurantName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  restaurantCuisine: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
  },
  infoBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    color: "#4b5563",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 12,
    padding: 16,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: "#f06428",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#4b5563",
    fontWeight: "600",
  },
  tabContainer: {
    flex: 1,
    padding: 16,
  },
  tabBar: {
    flexDirection: "row",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#f06428",
  },
  tabText: {
    color: "#6b7280",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#f06428",
    fontWeight: "600",
  },
  menuContainer: {
    gap: 16,
  },
  menuItem: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  menuItemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  menuItemContent: {
    flex: 1,
    marginLeft: 16,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  menuItemDescription: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 8,
  },
  menuItemFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: "600",
  },
  addButton: {
    backgroundColor: "#f06428",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
  },
  backButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 14,
  },
  cartIconContainer: {
    position: "relative",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
