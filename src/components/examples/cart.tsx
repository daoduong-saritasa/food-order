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

import { type CartItem, getCartItems } from "@/api/services/mockCart";

export default function CartScreen() {
  const tabBarHeight = useBottomTabBarHeight();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>Cart</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.groupOrderCard}>
          <View style={styles.groupOrderHeader}>
            <Text style={styles.groupOrderTitle}>Group Order Details</Text>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Engineering Team</Text>
            </View>
          </View>
          <Text style={styles.groupOrderSubtitle}>
            Italian Delights • Order by 11:30 AM
          </Text>

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
                <Text style={styles.memberInitials}>You</Text>
              </View>
            </View>
            <View style={styles.memberChip}>
              <View style={styles.memberAvatar}>
                <Text style={styles.memberInitials}>+2</Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Your Items</Text>

        {cartItems.map(item => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.cartItemImage} />
            <View style={styles.cartItemContent}>
              <Text style={styles.cartItemName}>
                {item.name}
              </Text>
              <Text style={styles.cartItemRestaurant}>
                {item.restaurant}
              </Text>
              <View style={styles.cartItemFooter}>
                <Text style={styles.cartItemPrice}>
                  $
                  {(item.price * item.quantity).toFixed(2)}
                </Text>
                <View style={styles.quantityControls}>
                  <TouchableOpacity style={styles.quantityButton}>
                    <Text style={styles.quantityText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>
                    {item.quantity}
                  </Text>
                  <TouchableOpacity style={styles.quantityButton}>
                    <Text style={styles.quantityText}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.quantityButton, styles.deleteButton]}
                  >
                    <Text style={styles.quantityText}>X</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Order Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>
              $
              {subtotal.toFixed(2)}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery Fee</Text>
            <Text style={styles.summaryValue}>
              $
              {deliveryFee.toFixed(2)}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>
              $
              {total.toFixed(2)}
            </Text>
          </View>
        </View>

        <View style={[styles.notesCard, { marginBottom: tabBarHeight + 74 }]}>
          <Text style={styles.notesTitle}>Delivery Notes</Text>
          <TextInput
            style={styles.notesInput}
            placeholder="Add any special instructions..."
            multiline
            numberOfLines={2}
          />
        </View>
      </ScrollView>

      <View style={[styles.footer, { bottom: tabBarHeight }]}>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>
            Place Order • $
            {total.toFixed(2)}
          </Text>
        </TouchableOpacity>
      </View>
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
  scrollView: {
    flex: 1,
    paddingInline: 16,
  },
  groupOrderCard: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    padding: 16,
    marginBlock: 24,  
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
    marginBottom: 8,
  },
  groupOrderTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  tag: {
    backgroundColor: "#f06428",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  tagText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
  groupOrderSubtitle: {
    color: "#6b7280",
    fontSize: 14,
    marginBottom: 12,
  },
  membersList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
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
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#f06428",
    alignItems: "center",
    justifyContent: "center",
  },
  memberInitials: {
    fontSize: 10,
    fontWeight: "500",
    color: "#fff",
  },
  memberName: {
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  cartItem: {
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
  cartItemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  cartItemContent: {
    flex: 1,
    marginLeft: 16,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  cartItemRestaurant: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 8,
  },
  cartItemFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: "600",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButton: {
    marginLeft: 4,
  },
  quantityText: {
    fontSize: 14,
    fontWeight: "500",
  },
  summaryCard: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    color: "#6b7280",
  },
  summaryValue: {
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#e5e5e5",
    marginVertical: 8,
  },
  totalLabel: {
    fontWeight: "600",
    fontSize: 16,
  },
  totalValue: {
    fontWeight: "600",
    fontSize: 16,
  },
  notesCard: {
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
  notesTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  notesInput: {
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    textAlignVertical: "top",
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  checkoutButton: {
    backgroundColor: "#f06428",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
