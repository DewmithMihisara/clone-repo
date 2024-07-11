import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function index() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/img/joni.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Jonathan Siriwardana</Text>
        </View>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/myDay')}>
          <Icon name="sunny-outline" size={20} color="white" />
          <Text style={styles.menuText}>My Day</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/important')}>
          <Icon name="star-outline" size={20} color="#F0B8C3" />
          <Text style={styles.menuText}>Important</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/planed')}>
          <Icon name="calendar-outline" size={20} color="#80DCD1" />
          <Text style={styles.menuText}>Planned</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/completed')}>
          <Icon name="checkmark-done-outline" size={20} color="#EDC4A6" />
          <Text style={styles.menuText}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/assigned')}>
          <Icon name="person-outline" size={20} color="#9ED4BC" />
          <Text style={styles.menuText}>Assigned to me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/flaged')}>
          <Icon name="flag-outline" size={20} color="#E96D6B" />
          <Text style={styles.menuText}>Flagged email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/tasks')}>
          <Icon name="home-outline" size={20} color="#7B91E4" />
          <Text style={styles.menuText}>Tasks</Text>
        </TouchableOpacity>

        <View style={styles.separator} />

        <View style={styles.bottomBtn}>
          <TouchableOpacity style={styles.addButton}>
            <Feather name="plus" size={24} color="white" />
            <Text style={styles.addButtonText}>Add a Task</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons name="note-plus-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    // paddingTop: useHeaderHeight(),
  },
  headerTime: {
    color: 'white',
    fontSize: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  profileName: {
    color: 'white',
    fontSize: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  scrollViewContent: {
    paddingBottom: 300, 
  },
  menuText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 16,
  },
  groupContainer: {
    padding: 16,
  },
  groupText: {
    color: 'white',
    fontSize: 16,
  },
  newListButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  newListText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 5,
    marginLeft: 16,
    marginRight: 16,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 16,
    paddingTop: 5,
  },
  addButton: {
    flexDirection: 'row',
    marginLeft: 16,
    borderRadius: 8,
  },
  bottomBtn: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#000',
  },
  iconButton: {
    padding: 16, 
    borderRadius: 5, 
  },
});
