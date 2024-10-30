import { TouchableOpacity, Text } from 'react-native';
import { router } from 'expo-router';
import { TwContainer } from "@/core/components/TwContainer";
import { TwText } from "@/core/components/TwText";

export default function OnboardingPage2() {
    return (
        <TwContainer twc="flex-1 bg-slate-950">
            <TwContainer twc="flex-1 flex-col justify-between px-6 pt-12">
                <TwContainer twc={"flex-1 flex-col justify-start"}>
                    <TwText variant="title" twc={""}>Buy the book!</TwText>
                    <TwText variant="large" twc={"text-slate-300 mb-6"}>It's not my book - I'm just recommending it. I do not know Matt or have any affiliation with him. I just think it's one of the most important books out there. </TwText>
                    <TwText variant="large" twc={"text-slate-300 mb-6"}>If you're an endurance athlete, it's very relatable, backed by sound science and full of useful advice. It's definitely helped me.</TwText>
                    <TwText variant="large" twc={"text-slate-300 mb-6"}>So buy <Text style={{ fontStyle: 'italic'}}>Racing Weight</Text> by Matt Fitzgerald.</TwText>
                    <TwText variant="large" twc={"text-slate-300 mb-0 italic text-left"}>Clive P.</TwText>
                    <TwText variant="small" twc={"text-slate-300 text-left"}>A bloke that builds software, runs a lot</TwText><TwText variant={"small"} twc={"text-slate-300"}>and wishes he was a mountain goat.</TwText>
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