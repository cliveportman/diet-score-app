import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { TwContainer } from "@/core/components/TwContainer"
import { TwText } from "@/core/components/TwText"

export default function Homepage() {
    return (
        <TwContainer twc="flex-1 bg-slate-950">
            <TwContainer twc="flex-1 flex-col justify-between px-6">
                <TwContainer twc={"flex-1 flex-col justify-end items-start"}>
                    <TwText variant="title" twc={""}>Diet Monitor</TwText>
                    <TwText variant="subtitle" twc={"text-slate-500 mb-0.5"}>based on the book</TwText>
                    <TwText variant="subtitle" twc={"text-slate-500 mb-0.5 italic"}>Racing Weight</TwText>
                    <TwText variant="subtitle" twc={"text-slate-500 mb-0.5"}>by Matt Fitzgerald</TwText>
                </TwContainer>
                <TwContainer twc={"flex-1 flex-col items-center justify-end"}>
                    <TouchableOpacity tw={"flex-col justify-center items-center text-center text-white border border-slate-800 bg-slate-900 w-32 h-32 rounded-full mb-16"} onPress={() => router.push('/scores')}>
                        <TwText twc={"mb-0"}>Continue</TwText>
                    </TouchableOpacity>
                </TwContainer>
            </TwContainer>
        </TwContainer>
    );
}