import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, Stack } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#1C1C1C' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="info" color={color} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="adddebt"
                options={{
                    title: 'New transaction',
                    href: null,
                }}
            />
            <Tabs.Screen 
                name="iowe"
                options={{
                    title: 'New transaction',
                    href: null,
                }}
            />
        </Tabs>
    );
}

export const unstable_settings = {
    initialRouteName: 'index',
  };