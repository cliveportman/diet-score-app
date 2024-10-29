import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { TwContainer } from "@/core/components/TwContainer"
import { TwText } from "@/core/components/TwText"

export default function Homepage() {
    return (
        <TwContainer twc="flex-1 bg-slate-950">
            <TwContainer twc="flex-1 flex-col justify-between px-6">
                <TwContainer twc={"flex-1 flex-col justify-end"}>
                    <TwText variant="title" twc={"text-4xl text-center mb-1.5"}>Diet Score</TwText>
                    <TwText variant="subtitle" twc={"text-yellow-200 text-center mb-6 opacity-75"}>for endurance athletes</TwText>
                    <TwText variant="subtitle" twc={"text-slate-500 mb-0.5 text-center"}>Based on the book</TwText>
                    <TwText variant="subtitle" twc={"text-slate-500 mb-0.5 text-center italic"}>Racing Weight</TwText>
                    <TwText variant="subtitle" twc={"text-slate-500 text-center"}>by Matt Fitzgerald</TwText>
                </TwContainer>
                <TwContainer twc={"flex-1 flex-col items-center justify-end"}>
                    <TouchableOpacity tw={"flex-col justify-center items-center text-center text-white border border-slate-800 bg-slate-900 w-32 h-32 rounded-full mb-16"} onPress={() => router.push('/onboarding')}>
                        <TwText twc={"mb-0"}>Continue</TwText>
                    </TouchableOpacity>
                </TwContainer>
            </TwContainer>
        </TwContainer>
    );
}