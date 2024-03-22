import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import { getWorkouts, saveWorkout } from "../Firebase/workouts";
import { Foundation,FontAwesome5 } from '@expo/vector-icons';
import { Button, List, Divider, IconButton, Colors } from "react-native-paper";
''



export default function HistoryScreen() {
    const userId = 'VlxwyuiQTxRE1w5eii4kcReqhTU2'; // user id for testing
    const testRouteArray = [[10,10],[30,30],[11,22]] //test array

    const workouts = getWorkouts(userId);

    return (
        <SafeAreaView style={styles.container}>               
            {/* <Button mode="contained" onPress={() => saveWorkout(userId, 101, 201, 3000, 'running', testRouteArray)}>TEST SAVE</Button> */}

            <View style={styles.graphContainer}>
                <Text>GRAPH HERE</Text>
            </View>
            <ScrollView style={styles.workoutsContainer}>
                {workouts.length > 0 ? (
                    workouts.map((workout, index) => (
                        <WorkoutItem key={index} workout={workout} />
                    ))
                ) : (
                    <Text style={styles.noWorkoutsText}>No workouts available</Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const WorkoutItem = ({ workout }) => {
    return (
        <View style={styles.workoutItem}>
            <View style={styles.row}>
                <Foundation name="foot" size={35} color="black" />
                <Text style={styles.largeText}>{workout.steps}</Text>
            </View>
            <View style={styles.row}>
                <FontAwesome5 name="fire-alt" size={35} color="black" />
                <Text style={styles.largeText}>{workout.calories}</Text>
            </View>
            <View style={styles.timeContainer}>
                <Text style={styles.largeText}>{(workout.duration / 60).toFixed()} MIN</Text>
            </View>
            <Text style={styles.createdAtText}>{workout.created_at}</Text>
            <Button icon="map-marker-distance" mode="contained" onPress={() => console.log('Pressed')}>
                ROUTE
            </Button>

            {/* <Button> <FontAwesome5 name="route" size={24} color="black" /> </Button> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    workoutsContainer: {
        flex: 1,
        height: 15,
    },
    iconButtonContainer:{
        alignItems:'center',
        flex: 1,
        borderWidth: 1,
        width:'30%',
        borderRadius: 5,
        justifyContent: 'center'
    },
    graphContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '35%',
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        backgroundColor: 'grey',
    },
    noWorkoutsText: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 20,
    },
    workoutItem: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        backgroundColor: 'white',

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    largeText: {
        fontSize: 20,
        marginLeft: 8,
    },
    timeContainer: {
        alignItems: 'flex-end',
    },
    createdAtText: {
        marginTop: 8,
        textAlign: 'right',
        fontStyle: 'italic',
    },
});


