import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function planed() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push('/')} style={styles.backButton}>
                    <View style={styles.backButtonContent}>
                        <AntDesign name="left" size={20} color="#80DCD1" />
                        <Text style={styles.backButtonText}>Lists</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Planned</Text>
                <View style={styles.filters}>
                    <View style={styles.filter}>
                        <SimpleLineIcons name="menu" size={10} color="#80DCD1" />
                        <Text style={styles.filterText}>This Week</Text>
                    </View>
                    <View style={styles.filter2}>
                        <Text style={styles.filterText}>By Due Date</Text>
                        <Ionicons name="close-sharp" size={10} color="#80DCD1" />
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                {/* <Image
                    source={require('../assets/img/important.png')} // Replace with your image path
                    style={styles.image}
                /> */}
                <Text style={styles.description}>Tasks with due dates or reminders show up here.</Text>
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
        color: '#80DCD1',
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
        color: '#80DCD1',
        fontSize: 18,
    },
    filters: {
        flexDirection: 'row',
    },
    filter: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#212121',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
        // marginLeft: 8,
    },
    filter2 :{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#212121',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
        marginLeft: 8,
    },
    filterText: {
        marginLeft: 5,
        marginRight: 5,
        color: '#80DCD1',
    },
    headerTitle: {
        color: '#80DCD1',
        fontSize: 36,
        fontWeight: 'bold',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    description: {
        color: '#80DCD1',
        fontSize: 16,
        textAlign: 'center',
    },
    addButton: {
        flexDirection: 'row',
        backgroundColor: '#212121',
        padding: 16,
        margin: 16,
        borderRadius: 8,
    },
    addButtonText: {
        color: '#80DCD1',
        fontSize: 18,
    },
});