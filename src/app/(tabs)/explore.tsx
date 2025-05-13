import { getRecentOrders, RecentOrder } from "@/api/mockRecentOrders";
import { Restaurant, RESTAURANTS } from "@/api/mockRestaurant";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ExploreScreen() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [recentOrders, setRecentOrders] = useState<RecentOrder[]>([]);
  useEffect(() => {
    setRestaurants(RESTAURANTS);
    setRecentOrders(getRecentOrders());
  }, []);
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search restaurants or dishes"
              placeholderTextColor="#6b7280"
            />
          </View>
        </View>

        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesScroll}
          >
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.categoryIcon}>
                <Text>🍕</Text>
              </View>
              <Text style={styles.categoryName}>Pizza</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.categoryIcon}>
                <Text>🥗</Text>
              </View>
              <Text style={styles.categoryName}>Salads</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.categoryIcon}>
                <Text>🥪</Text>
              </View>
              <Text style={styles.categoryName}>Sandwiches</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.categoryIcon}>
                <Text>☕</Text>
              </View>
              <Text style={styles.categoryName}>Coffee</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View>
          <Text style={styles.sectionTitle}>Popular Restaurants</Text>
          <View style={styles.restaurantGrid}>
            {restaurants.map((restaurant) => (
              <TouchableOpacity key={restaurant.id} style={styles.restaurantGridItem}>
                <View style={styles.restaurantImageContainer}>
                  <View style={styles.restaurantImage}>
                    <Image
                      source={{ uri: restaurant.image }}
                      style={styles.restaurantImage}
                    />
                  </View>
                  <View style={styles.restaurantRating}>
                    <Text style={styles.ratingText}>4.8</Text>
                  </View>
                </View>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <Text style={styles.restaurantCuisine}>{restaurant.categories[0]}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={{ paddingBottom: tabBarHeight }}>
          <Text style={styles.sectionTitle}>Recent Orders</Text>
          <View style={styles.recentOrdersList}>
            {recentOrders.map((order) => (
              <TouchableOpacity key={order.id} style={styles.recentOrderItem}>
                <View style={styles.recentOrderImage}>
                  <Image
                    source={{ uri: order.image }}
                    style={styles.recentOrderImage}
                  />
                </View>
                <View style={styles.recentOrderContent}>
                  <Text style={styles.recentOrderName}>{order.name}</Text>
                  <Text style={styles.recentOrderRestaurant}>{order.restaurant}</Text>
                  <Text style={styles.recentOrderDate}>{order.date}</Text>
                </View>
                <TouchableOpacity style={styles.reorderButton}>
                  <Text style={styles.reorderButtonText}>Reorder</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#1f2937",
  },
  categoriesSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  categoriesScroll: {
    paddingLeft: 16,
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 24,
  },
  categoryIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#fff4f0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "500",
  },
  restaurantGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
  },
  restaurantGridItem: {
    width: "50%",
    padding: 4,
    marginBottom: 16,
  },
  restaurantImageContainer: {
    position: "relative",
    height: 120,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 8,
  },

  restaurantImage: {
    backgroundColor: "#e5e5e5",
    width: "100%",
    height: "100%",
  },

  restaurantRating: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  ratingText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  restaurantCuisine: {
    fontSize: 14,
    color: "#6b7280",
  },
  recentOrdersList: {
    paddingHorizontal: 16,
  },
  recentOrderItem: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  recentOrderImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: "#e5e5e5",
  },
  recentOrderContent: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  recentOrderName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  recentOrderRestaurant: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 2,
  },
  recentOrderDate: {
    fontSize: 12,
    color: "#9ca3af",
  },
  reorderButton: {
    alignSelf: "center",
    backgroundColor: "#f06428",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  reorderButtonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
  },
});
