import {SafeAreaView} from "react-native-safe-area-context";
import {Text, View, Switch} from "react-native";
import { useState } from 'react';

export default function Adddebt () {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);  
    return (
        <SafeAreaView
        style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: 15,
            gap: 10
        }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: "row"}}>
        
        <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
        </View>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>Add debt</Text>

    </SafeAreaView>
    );
}
