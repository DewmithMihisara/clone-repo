import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

export default function flaged() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push('/')} style={styles.backButton}>
                    <View style={styles.backButtonContent}>
                        <AntDesign name="left" size={20} color="#FF6F61" />
                        <Text style={styles.backButtonText}>Lists</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.headerContainer}>
                    <Icon name="flag-outline" size={35} color="#E96D6B" />
                    <Text style={styles.headerTitle}>Flagged email</Text>
                </View>
            </View>
            <View style={styles.content}>
                {/* <Image
                    source={require('../assets/img/important.png')} // Replace with your image path
                    style={styles.image}
                /> */}
                <Text style={styles.description}>Massaged you flag will show us as tasks here.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 25,
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'space-between',
    },
    header: {
        paddingTop: 40,
        paddingHorizontal: 16,
        flexDirection: 'column',
        alignItems: 'flex-start',
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
        color: '#E96D6B',
        fontSize: 18,
    },
    headerContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    headerTitle: {
        color: '#E96D6B',
        fontSize: 36,
        fontWeight: 'bold',
        marginLeft: 15,
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
        color: '#E96D6B',
        fontSize: 16,
        textAlign: 'center',
    },
});