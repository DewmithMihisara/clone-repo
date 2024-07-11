import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function index() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/img/joni.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Jony Sing</Text>
        </View>
        <TouchableOpacity style={styles.menuItem} onPress={() =>router.push('/myDay')}>
          <Icon name="sunny-outline" size={20} color="white" />
          <Text style={styles.menuText}>My Day</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/important')}>
          <Icon name="star-outline" size={20} color="white" />
          <Text style={styles.menuText}>Important</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/home')}>
          <Icon name="calendar-outline" size={20} color="white" />
          <Text style={styles.menuText}>Planned</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/completed')}>
          <Icon name="checkmark-done-outline" size={20} color="white" />
          <Text style={styles.menuText}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/assigned')}>
          <Icon name="person-outline" size={20} color="white" />
          <Text style={styles.menuText}>Assigned to me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/flaged')}>
          <Icon name="flag-outline" size={20} color="white" />
          <Text style={styles.menuText}>Flagged email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/tasks')}>
          <Icon name="home-outline" size={20} color="white" />
          <Text style={styles.menuText}>Tasks</Text>
        </TouchableOpacity>
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
});
