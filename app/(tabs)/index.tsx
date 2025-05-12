import { Link } from "expo-router";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>LunchHub</Text>
        </View>
        <TouchableOpacity style={styles.cartButton}>
          <Link href="/cart">
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>3</Text>
            </View>
          </Link>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today Restaurants</Text>

          <TouchableOpacity style={styles.restaurantCard}>
            <Link href={{ pathname: "/restaurant" }}>
              <View style={styles.restaurantImageContainer}>
                <Image
                  source={{ uri: "https://via.placeholder.com/400x160" }}
                  style={styles.restaurantImage}
                />
                <View style={styles.restaurantImageOverlay}>
                  <Text style={styles.restaurantName}>Italian Delights</Text>
                  <Text style={styles.restaurantCuisine}>
                    Pasta, Pizza, Salads
                  </Text>
                </View>
              </View>
              <View style={styles.restaurantInfo}>
                <View style={styles.restaurantTags}>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>Group order: 5+ people</Text>
                  </View>
                  <Text style={styles.orderTime}>Order by 11:30 AM</Text>
                </View>
                <Text style={styles.restaurantDescription}>
                  Authentic Italian cuisine with fresh ingredients and homemade
                  pasta.
                </Text>
              </View>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity style={styles.restaurantCard}>
            <View style={styles.restaurantImageContainer}>
              <Image
                source={{ uri: "https://via.placeholder.com/400x160" }}
                style={styles.restaurantImage}
              />
              <View style={styles.restaurantImageOverlay}>
                <Text style={styles.restaurantName}>Sushi Express</Text>
                <Text style={styles.restaurantCuisine}>
                  Sushi, Bento, Ramen
                </Text>
              </View>
            </View>
            <View style={styles.restaurantInfo}>
              <View style={styles.restaurantTags}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Group order: 3+ people</Text>
                </View>
                <Text style={styles.orderTime}>Order by 11:00 AM</Text>
              </View>
              <Text style={styles.restaurantDescription}>
                Fresh sushi and Japanese favorites delivered to your office.
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Active Group Orders</Text>
          <View style={styles.groupOrderCard}>
            <View style={styles.groupOrderHeader}>
              <View>
                <Text style={styles.groupOrderTitle}>
                  Engineering Team Lunch
                </Text>
                <Text style={styles.groupOrderSubtitle}>
                  Italian Delights • Closes in 25 min
                </Text>
              </View>
              <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>Join Order</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.membersList}>
              <View style={styles.memberChip}>
                <View style={styles.memberAvatar}>
                  <Text style={styles.memberInitials}>JD</Text>
                </View>
                <Text style={styles.memberName}>John D.</Text>
              </View>
              <View style={styles.memberChip}>
                <View style={styles.memberAvatar}>
                  <Text style={styles.memberInitials}>AS</Text>
                </View>
                <Text style={styles.memberName}>Amy S.</Text>
              </View>
              <View style={styles.memberChip}>
                <View style={styles.memberAvatar}>
                  <Text style={styles.memberInitials}>MK</Text>
                </View>
                <Text style={styles.memberName}>Mike K.</Text>
              </View>
              <View style={styles.memberChip}>
                <View style={styles.memberAvatar}>
                  <Text style={styles.memberInitials}>+2</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Start Group Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>My Favorites</Text>
            </TouchableOpacity>
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
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    backgroundColor: "#fff",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
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
  scrollView: {
    flex: 1,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  restaurantCard: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    marginBottom: 16,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  restaurantImageContainer: {
    position: "relative",
    height: 160,
  },
  restaurantImage: {
    width: "100%",
    height: "100%",
  },
  restaurantImageOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  restaurantName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  restaurantCuisine: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
  },
  restaurantInfo: {
    padding: 16,
  },
  restaurantTags: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    backgroundColor: "#d1fae5",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  tagText: {
    color: "#065f46",
    fontSize: 12,
    fontWeight: "500",
  },
  orderTime: {
    color: "#6b7280",
    fontSize: 14,
  },
  restaurantDescription: {
    color: "#4b5563",
    fontSize: 14,
  },
  groupOrderCard: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    padding: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  groupOrderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  groupOrderTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  groupOrderSubtitle: {
    color: "#6b7280",
    fontSize: 14,
  },
  joinButton: {
    backgroundColor: "#10b981",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  joinButtonText: {
    color: "#fff",
    fontWeight: "500",
  },
  membersList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  memberChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 4,
  },
  memberAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#a7f3d0",
    alignItems: "center",
    justifyContent: "center",
  },
  memberInitials: {
    fontSize: 12,
    fontWeight: "500",
  },
  memberName: {
    fontSize: 14,
  },
  quickActions: {
    flexDirection: "row",
    gap: 16,
  },
  actionButton: {
    flex: 1,
    backgroundColor: "#10b981",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  actionButtonText: {
    color: "#fff",
    fontWeight: "500",
  },
});
