"use client"

import { useNavigation, useRoute } from "@react-navigation/native"
import { useState } from "react"
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function RestaurantScreen() {
  const navigation = useNavigation<any>()
  const route = useRoute<any>()
  const { id } = route.params as { id: string }
  const [activeTab, setActiveTab] = useState("popular")

  // This would normally be fetched from an API based on the ID
  const restaurant = {
    id,
    name: id === "1" ? "Italian Delights" : "Sushi Express",
    image: "https://via.placeholder.com/600x200",
    categories: ["Pasta", "Pizza", "Salads"],
    orderDeadline: "11:30 AM",
    groupOrderMinimum: 5,
    menu: {
      popular: [
        {
          id: "p1",
          name: "Margherita Pizza",
          description: "Classic tomato sauce, mozzarella, and basil",
          price: 12.99,
          image: "https://via.placeholder.com/80x80",
        },
        {
          id: "p2",
          name: "Spaghetti Carbonara",
          description: "Creamy sauce with pancetta and parmesan",
          price: 14.99,
          image: "https://via.placeholder.com/80x80",
        },
        {
          id: "p3",
          name: "Caesar Salad",
          description: "Romaine lettuce, croutons, parmesan, and Caesar dressing",
          price: 9.99,
          image: "https://via.placeholder.com/80x80",
        },
      ],
      pasta: [
        {
          id: "pa1",
          name: "Spaghetti Bolognese",
          description: "Rich meat sauce with tomatoes and herbs",
          price: 13.99,
          image: "https://via.placeholder.com/80x80",
        },
        {
          id: "pa2",
          name: "Fettuccine Alfredo",
          description: "Creamy parmesan sauce",
          price: 12.99,
          image: "https://via.placeholder.com/80x80",
        },
        {
          id: "pa3",
          name: "Lasagna",
          description: "Layered pasta with meat sauce and cheese",
          price: 15.99,
          image: "https://via.placeholder.com/80x80",
        },
      ],
      pizza: [
        {
          id: "pi1",
          name: "Pepperoni Pizza",
          description: "Tomato sauce, mozzarella, and pepperoni",
          price: 13.99,
          image: "https://via.placeholder.com/80x80",
        },
        {
          id: "pi2",
          name: "Vegetarian Pizza",
          description: "Tomato sauce, mozzarella, and assorted vegetables",
          price: 14.99,
          image: "https://via.placeholder.com/80x80",
        },
        {
          id: "pi3",
          name: "Hawaiian Pizza",
          description: "Tomato sauce, mozzarella, ham, and pineapple",
          price: 14.99,
          image: "https://via.placeholder.com/80x80",
        },
      ],
    },
  }

  const renderMenuItems = (category: string) => {
    return restaurant.menu[category].map((item: { id: string; name: string; description: string; price: number; image: string }) => (
      <View key={item.id} style={styles.menuItem}>
        <Image source={{ uri: item.image }} style={styles.menuItemImage} />
        <View style={styles.menuItemContent}>
          <Text style={styles.menuItemName}>{item.name}</Text>
          <Text style={styles.menuItemDescription}>{item.description}</Text>
          <View style={styles.menuItemFooter}>
            <Text style={styles.menuItemPrice}>${item.price.toFixed(2)}</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ))
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.heroContainer}>
          <Image source={{ uri: restaurant.image }} style={styles.heroImage} />
          <View style={styles.heroOverlay}>
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            <Text style={styles.restaurantCuisine}>{restaurant.categories.join(", ")}</Text>
          </View>
        </View>

        <View style={styles.infoBar}>
          <View style={styles.infoItem}>
            <Text style={styles.infoText}>Order by {restaurant.orderDeadline}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoText}>Group order: {restaurant.groupOrderMinimum}+ people</Text>
          </View>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Start Group Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Join Existing Order</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tabContainer}>
          <View style={styles.tabBar}>
            <TouchableOpacity
              style={[styles.tab, activeTab === "popular" && styles.activeTab]}
              onPress={() => setActiveTab("popular")}
            >
              <Text style={[styles.tabText, activeTab === "popular" && styles.activeTabText]}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === "pasta" && styles.activeTab]}
              onPress={() => setActiveTab("pasta")}
            >
              <Text style={[styles.tabText, activeTab === "pasta" && styles.activeTabText]}>Pasta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === "pizza" && styles.activeTab]}
              onPress={() => setActiveTab("pizza")}
            >
              <Text style={[styles.tabText, activeTab === "pizza" && styles.activeTabText]}>Pizza</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuContainer}>{renderMenuItems(activeTab)}</View>
        </View>
      </ScrollView>

      <SafeAreaView style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate("Cart")}>
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    zIndex: 10,
  },
  backButton: {
    width: 40,
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
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    alignItems: "center",
    justifyContent: "center",
  },
  cartBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#10b981",
    alignItems: "center",
    justifyContent: "center",
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 12,
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
    backgroundColor: "#10b981",
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
    borderBottomColor: "#10b981",
  },
  tabText: {
    color: "#6b7280",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#10b981",
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
    backgroundColor: "#10b981",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
  },
})
