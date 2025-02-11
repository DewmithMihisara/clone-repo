import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { AntDesign, Entypo } from '@expo/vector-icons';

export default function myDay() {
    const router = useRouter();

    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    });

    return (
        <ImageBackground
            source={require('../assets/img/bg/low-angle-shot-berliner-fernsehturm-berlin-germany.jpg')}
            style={styles.background}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.push('/')} style={styles.backButton}>
                        <View style={styles.backButtonContent}>
                            <AntDesign name="left" size={20} color="white" />
                            <Text style={styles.backButtonText}>Lists</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>My Day</Text>
                    <Text style={styles.dateText}>{currentDate}</Text>
                </View>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+ Add a Task</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        paddingTop: 15,
        paddingBottom: 25,
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        paddingTop: 40,
        paddingHorizontal: 16,
        flexDirection: 'column',
    },
    timeText: {
        color: 'white',
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
        color: 'white',
        fontSize: 18,
        marginLeft: 5,
    },
    headerTitle: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
    },
    dateText: {
        color: 'white',
        fontSize: 18,
        marginTop: 5,
    },
    headerIcons: {
        flexDirection: 'row',
        marginTop: 10,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    image: {
        width: '100%',
        height: '70%',
        resizeMode: 'cover',
    },
    addButton: {
        flexDirection: 'row',
        backgroundColor: '#333',
        padding: 16,
        margin: 16,
        borderRadius: 8,
    },
    addButtonText: {
        color: 'white',
        fontSize: 18,
    },
});