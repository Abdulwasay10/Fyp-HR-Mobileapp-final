import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Retention = () => {
    const retentionStrategies = [
        'Provide Opportunities for Growth',
        'Create a Positive Work Environment',
        'Offer Competitive Salaries and Benefits',
        'Recognize and Reward Employee Achievements',
        'Encourage Work-Life Balance',
        'Provide Continuous Training and Development',
        'Conduct Regular Employee Feedback Sessions',
        'Foster Open Communication',
        'Promote a Healthy Work Culture',
        'Implement Employee Wellness Programs',
        'Provide Opportunities for Growth',
        'Create a Positive Work Environment',
        'Offer Competitive Salaries and Benefits',
        'Recognize and Reward Employee Achievements',
        'Encourage Work-Life Balance',
        'Provide Continuous Training and Development',
        'Conduct Regular Employee Feedback Sessions',
        'Foster Open Communication',
        'Promote a Healthy Work Culture',
        'Implement Employee Wellness Programs',
        'Provide Opportunities for Growth',
        'Create a Positive Work Environment',
        'Offer Competitive Salaries and Benefits',
        'Recognize and Reward Employee Achievements',
        'Encourage Work-Life Balance',
        'Provide Continuous Training and Development',
        'Conduct Regular Employee Feedback Sessions',
        'Foster Open Communication',
        'Promote a Healthy Work Culture',
        'Implement Employee Wellness Programs',
        'Provide Opportunities for Growth',
        'Create a Positive Work Environment',
        'Offer Competitive Salaries and Benefits',
        'Recognize and Reward Employee Achievements',
        'Encourage Work-Life Balance',
        'Provide Continuous Training and Development',
        'Conduct Regular Employee Feedback Sessions',
        'Foster Open Communication',
        'Promote a Healthy Work Culture',
        'Implement Employee Wellness Programs',
        'Provide Opportunities for Growth',
        'Create a Positive Work Environment',
        'Offer Competitive Salaries and Benefits',
        'Recognize and Reward Employee Achievements',
        'Encourage Work-Life Balance',
        'Provide Continuous Training and Development',
        'Conduct Regular Employee Feedback Sessions',
        'Foster Open Communication',
        'Promote a Healthy Work Culture',
        'Implement Employee Wellness Programs'
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Retention Strategies</Text>
            <Text style={styles.subHeading}>
                For particular retention strategies for specific employees, visit our website.
            </Text>
            {retentionStrategies.map((strategy, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.bulletPoint}>{'\u2022'}</Text>
                    <Text style={styles.strategyText}>{strategy}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#FFF3E0', // Lightest yellow background
        alignItems: 'center',
    },
    heading: {
        fontSize: 30, // Classical font size for heading
        fontWeight: 'bold',
        color: '#FF5733',
        marginBottom: 10,
        textAlign: 'center'// Classical font
    },
    subHeading: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
        fontStyle: 'italic', // Adds a nice touch to the subheading
    },
    card: {
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    bulletPoint: {
        fontSize: 20,
        color: '#FF5733',
        marginRight: 10,
    },
    strategyText: {
        fontSize: 16, // Minimized font size for strategies
        color: '#333',
        flexShrink: 1,
        fontFamily: 'sans-serif', // Different font for the body text
    },
});

export default Retention;
