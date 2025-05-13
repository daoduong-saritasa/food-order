"use client"

import { ActiveGroup, getActiveGroups, getPastGroups, PastGroup } from "@/api/mockGroups"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import { Link } from "expo-router"
import React, { useEffect, useState } from "react"
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function GroupsScreen() {
  const [activeTab, setActiveTab] = useState("active");

  const tabBarHeight = useBottomTabBarHeight();

  const [activeGroups, setActiveGroups] = useState<ActiveGroup[]>([]);
  const [pastGroups, setPastGroups] = useState<PastGroup[]>([]);

  useEffect(() => {
    setActiveGroups(getActiveGroups(7));
    setPastGroups(getPastGroups(8));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Group Orders</Text>
        <TouchableOpacity style={styles.addButton}>
          <Link href="/group">
            <Text>+</Text>
          </Link>
        </TouchableOpacity>
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "active" && styles.activeTab]}
          onPress={() => setActiveTab("active")}
        >
          <Text style={[styles.tabText, activeTab === "active" && styles.activeTabText]}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "past" && styles.activeTab]}
          onPress={() => setActiveTab("past")}
        >
          <Text style={[styles.tabText, activeTab === "past" && styles.activeTabText]}>Past</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {activeTab === "active" ? (
          <View style={[styles.groupsList, { paddingBottom: tabBarHeight }]}>
            {activeGroups.map((group, index) => (
              <TouchableOpacity
                key={group.id+index}
                style={styles.groupCard}
              >
                <View style={styles.groupCardHeader}>
                  <Text style={styles.groupName}>{group.name}</Text>
                  <View style={styles.statusTag}>
                    <Text style={styles.statusTagText}>Active</Text>
                  </View>
                </View>
                <Text style={styles.restaurantName}>{group.restaurant}</Text>
                <View style={styles.groupCardFooter}>
                  <View style={styles.membersInfo}>
                    <Text style={styles.membersText}>{group.members} members</Text>
                  </View>
                  <Text style={styles.timeRemaining}>Closes in {group.timeRemaining}</Text>
                </View>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.createButton}>
              <Text style={styles.createButtonText}>Create New Group Order</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={[styles.groupsList, { paddingBottom: tabBarHeight }]}>
            {pastGroups.map((group, index) => (
              <TouchableOpacity
                key={group.id+index}
                style={styles.groupCard}
              >
                <View style={styles.groupCardHeader}>
                  <Text style={styles.groupName}>{group.name}</Text>
                  <View style={[styles.statusTag, styles.completedTag]}>
                    <Text style={styles.completedTagText}>Completed</Text>
                  </View>
                </View>
                <Text style={styles.restaurantName}>{group.restaurant}</Text>
                <View style={styles.groupCardFooter}>
                  <View style={styles.membersInfo}>
                    <Text style={styles.membersText}>{group.members} members</Text>
                  </View>
                  <Text style={styles.dateText}>{group.date}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBar: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#f06428",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#6b7280",
  },
  activeTabText: {
    color: "#f06428",
  },
  scrollView: {
    flex: 1,
  },
  groupsList: {
    padding: 16,
  },
  groupCard: {
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
  groupCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  groupName: {
    fontSize: 18,
    fontWeight: "600",
  },
  statusTag: {
    backgroundColor: "#f06428",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  statusTagText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
  completedTag: {
    backgroundColor: "#f3f4f6",
  },
  completedTagText: {
    color: "#4b5563",
    fontSize: 12,
    fontWeight: "500",
  },
  restaurantName: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 12,
  },
  groupCardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  membersInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  membersText: {
    fontSize: 14,
    color: "#6b7280",
  },
  timeRemaining: {
    fontSize: 14,
    fontWeight: "500",
    color: "#ef4444",
  },
  dateText: {
    fontSize: 14,
    color: "#6b7280",
  },
  createButton: {
    backgroundColor: "#f06428",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  createButtonIcon: {
    marginRight: 8,
  },
  createButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
})
