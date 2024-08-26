import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, Stack } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#1C1C1C'}}>
            {/* Home page, this is the first page the user sees when opening the app */}
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    headerShown: false,
                }}
            />
            {/* On this page you can add new transactions to DeptZap */}
            <Tabs.Screen
                name="newtransaction"
                options={{
                    title: 'New transaction',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="money" color={color} />,
                    headerShown: false,
                    
                }}
            />
            {/* About page, self-explanatory */}
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="info" color={color} />,
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}

export const unstable_settings = {
    initialRouteName: 'index',
  };