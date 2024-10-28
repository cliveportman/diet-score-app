import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Header } from "@/core/components/Header";

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer screenOptions={{ headerShown: true, swipeEdgeWidth: 0, header: () => <Header /> }}>
                <Drawer.Screen
                    name="scores/index"
                    options={{
                        title: 'Scores',
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
