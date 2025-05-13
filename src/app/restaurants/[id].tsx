"use client";

import { IconSymbol } from "@//components/ui/IconSymbol";
import { ComponentWithHead } from "@/components/ComponentWithHead";
import { useRoute } from "@react-navigation/native";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function RestaurantScreen() {
  const route = useRoute<any>();
  const { id } = route.params as { id: string };
  const [activeTab, setActiveTab] = useState("popular");

  // --- REUSABLE RESTAURANT DATA ---
  const RESTAURANTS = {
    "1": {
      id: "1",
      name: "Italian Delights",
      image:
        "https://images.squarespace-cdn.com/content/v1/62fe6e3c0caa6b5fa067b8e3/b68add82-87b7-451e-935d-30db793312d4/PIA_151_La_Jolla_Restaurant_Remodel28891.jpg",
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
            image:
              "https://uk.ooni.com/cdn/shop/articles/20220211142645-margherita-9920_e41233d5-dcec-461c-b07e-03245f031dfe.jpg?v=1737105431&width=1080",
          },
          {
            id: "p2",
            name: "Spaghetti Carbonara",
            description: "Creamy sauce with pancetta and parmesan",
            price: 14.99,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2H7hGm-cJD6WZB_yFyU6lBXTV-HMabJ4cw&s",
          },
          {
            id: "p3",
            name: "Caesar Salad",
            description:
              "Romaine lettuce, croutons, parmesan, and Caesar dressing",
            price: 9.99,
            image:
              "https://cdn.loveandlemons.com/wp-content/uploads/2024/12/caesar-salad.jpg",
          },
        ],
        pasta: [
          {
            id: "pa1",
            name: "Spaghetti Bolognese",
            description: "Rich meat sauce with tomatoes and herbs",
            price: 13.99,
            image:
              "https://images.ctfassets.net/uexfe9h31g3m/6QtnhruEFi8qgEyYAICkyS/ab01e9b1da656f35dd1a721c810162a0/Spaghetti_bolognese_4x3_V2_LOW_RES.jpg?q=90&w=1200&h=600",
          },
          {
            id: "pa2",
            name: "Fettuccine Alfredo",
            description: "Creamy parmesan sauce",
            price: 12.99,
            image:
              "https://cookingwithcassandra.com/wp-content/uploads/2022/10/Copy-of-Copy-of-DSC03750-2-scaled.jpg",
          },
          {
            id: "pa3",
            name: "Lasagna",
            description: "Layered pasta with meat sauce and cheese",
            price: 15.99,
            image:
              "https://cafedelites.com/wp-content/uploads/2018/01/Mamas-Best-Lasagna-IMAGE-43.jpg",
          },
        ],
        pizza: [
          {
            id: "pi1",
            name: "Pepperoni Pizza",
            description: "Tomato sauce, mozzarella, and pepperoni",
            price: 13.99,
            image:
              "https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg",
          },
          {
            id: "pi2",
            name: "Vegetarian Pizza",
            description: "Tomato sauce, mozzarella, and assorted vegetables",
            price: 14.99,
            image:
              "https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg",
          },
          {
            id: "pi3",
            name: "Hawaiian Pizza",
            description: "Tomato sauce, mozzarella, ham, and pineapple",
            price: 14.99,
            image:
              "https://dinnerthendessert.com/wp-content/uploads/2023/06/Hawaiian-Pizza-7.jpg",
          },
        ],
      },
    },
    "2": {
      id: "2",
      name: "Sushi Express",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/26/58/b1/sushi-hokkaido-sachi.jpg?w=600&h=400&s=1",
      categories: ["Sushi", "Bento", "Ramen"],
      orderDeadline: "11:00 AM",
      groupOrderMinimum: 3,
      menu: {
        popular: [
          {
            id: "s1",
            name: "Salmon Nigiri",
            description: "Fresh salmon over seasoned rice",
            price: 8.99,
            image:
              "https://www.justonecookbook.com/wp-content/uploads/2022/01/Salmon-Nigiri-6129-I.jpg",
          },
          {
            id: "s2",
            name: "Tuna Roll",
            description: "Tuna, rice, and seaweed",
            price: 7.99,
            image:
              "https://www.thespruceeats.com/thmb/7NQXyV2p5ZQv4f6F3s0hQG4L5dA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tuna-maki-sushi-2031461-hero-01-3e8e1e8b4b0e4d2fa7e4b5f6c0b4b4b8.jpg",
          },
          {
            id: "s3",
            name: "Chicken Katsu Bento",
            description: "Breaded chicken, rice, salad, and pickles",
            price: 12.99,
            image:
              "https://www.justonecookbook.com/wp-content/uploads/2021/06/Chicken-Katsu-3261-I.jpg",
          },
        ],
        sushi: [
          {
            id: "su1",
            name: "Eel Avocado Roll",
            description: "Grilled eel, avocado, rice, and seaweed",
            price: 11.99,
            image:
              "https://www.thespruceeats.com/thmb/8g6Xv5D8XQw2qzG6eVw4F6nJQZk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eel-avocado-roll-2031457-hero-01-5b6a2a0b46e04e7a8e5b6e2e6c0a0f2a.jpg",
          },
          {
            id: "su2",
            name: "California Roll",
            description: "Imitation crab, avocado, cucumber, rice, and seaweed",
            price: 9.99,
            image:
              "https://www.thespruceeats.com/thmb/3pQ8jFQe1Kk6xkXw4f5G8hQZk8k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/california-roll-recipe-2031458-hero-01-5b6a2a0b46e04e7a8e5b6e2e6c0a0f2a.jpg",
          },
        ],
        ramen: [
          {
            id: "r1",
            name: "Shoyu Ramen",
            description: "Soy sauce-based broth with noodles, pork, and egg",
            price: 13.99,
            image:
              "https://www.justonecookbook.com/wp-content/uploads/2021/06/Shoyu-Ramen-3261-I.jpg",
          },
        ],
      },
    },
  };
  // --- END REUSABLE RESTAURANT DATA ---

  const restaurant = RESTAURANTS[id as keyof typeof RESTAURANTS];

  const renderMenuItems = (category: string) => {
    return restaurant.menu[category as keyof typeof restaurant.menu].map(
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
      )
    );
  };

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
          <TouchableOpacity style={styles.cartButton}>
            <Link href="/cart">
              <View style={styles.cartIconContainer}>
                <IconSymbol size={25} name="cart" color="#f06428" />
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>3</Text>
                </View>
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
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              <Text style={styles.restaurantCuisine}>
                {restaurant.categories.join(", ")}
              </Text>
            </View>
          </View>

          <View style={styles.infoBar}>
            <View style={styles.infoItem}>
              <Text style={styles.infoText}>
                Order by {restaurant.orderDeadline}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoText}>
                Group order: {restaurant.groupOrderMinimum}+ people
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
