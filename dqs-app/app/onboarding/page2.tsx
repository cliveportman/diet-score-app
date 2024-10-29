import { TouchableOpacity, Text } from 'react-native';
import { router } from 'expo-router';
import { TwContainer } from "@/core/components/TwContainer"
import { TwText } from "@/core/components/TwText"

export default function Homepage() {
    return (
        <TwContainer twc="flex-1 bg-slate-950">
            <TwContainer twc="flex-1 flex-col justify-between px-6">
                <TwContainer twc={"flex-1 flex-col justify-end"}>
                    <TwText variant="title" twc={""}>How does it work?</TwText>
                    <TwText variant="subtitle" twc={"text-slate-300 mb-6"}>For context, you really need to have read the book <Text style={{ fontStyle: 'italic'}}>Racing Weight</Text> by Matt Fitzgerald.</TwText>
                    <TwText variant="subtitle" twc={"text-slate-300 mb-6"}>The principle is that by working towards your optimal racing weight, you'll perform better.</TwText>
                    <TwText variant="subtitle" twc={"text-slate-300 mb-6"}>And you achieve this by focusing on diet quality, not calorie counting.</TwText>
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