import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// class CustomButton extends Component{
//     render() {
//        return (
//                 <TouchableOpacity>
//                     <View style={styles.buttonContainer}>
//                         <Text>
//                             Click me!
//                         </Text>
//                     </View>
//                 </TouchableOpacity>
//        ) 
//     }
// }

function CustomButton() {
    return (
        <TouchableOpacity>
            <View style={styles.buttonContainer}>
                <Text>
                    Click me!
                </Text>
            </View>
        </TouchableOpacity>
    ) 
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    }
})

export default CustomButton;