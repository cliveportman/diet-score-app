import {Pressable} from "react-native";
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TwContainer } from "@/core/components/TwContainer"
import { TwText } from "@/core/components/TwText"

export default function App() {
    return (
        <SafeAreaView tw="flex-1 bg-slate-900">
            <Pressable tw="flex-1 flex-col justify-between px-6" onPress={() => router.push('/scores')}>
            <TwContainer></TwContainer>
            <TwContainer>
                <TwText variant="title" twc={"text-center"}>Racing Weight - Unofficial</TwText>
                <TwText variant="subtitle" twc={"text-slate-500 text-center"}>Based on the book by Mark Fitzgerald</TwText>
            </TwContainer>  
            <TwContainer>
                <TwText twc={"mb-12 text-center"}>Continue...</TwText>
            </TwContainer>
            </Pressable>
        </SafeAreaView>
    );
}