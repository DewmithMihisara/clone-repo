import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

export default function tasks() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/')} style={styles.backButton}>
          <View style={styles.backButtonContent}>
            <AntDesign name="left" size={20} color="#7B91E4" />
            <Text style={styles.backButtonText}>Lists</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tasks</Text>
      </View>
      <View style={styles.content}>
              <Image
                  source={require('../assets/img/bg/_-removebg-preview.png')} 
                  style={styles.image}
              />
        <Text style={styles.description}>Tasks show up hereif they aren't part of any lists you've created.</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add a Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 25,
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  timeText: {
    color: '#7B91E4',
    fontSize: 20,
    textAlign: 'right',
    width: '100%',
  },
  backButton: {
    marginTop: 10,
    marginBottom: 10,
  },
  backButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#7B91E4',
    fontSize: 18,
  },
  headerTitle: {
    color: '#7B91E4',
    fontSize: 36,
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  description: {
    color: '#7B91E4',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#7B91E4',
    fontSize: 18,
  },
});