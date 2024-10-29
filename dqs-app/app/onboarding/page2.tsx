import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { TwContainer } from "@/core/components/TwContainer"
import { TwText } from "@/core/components/TwText"

export default function OnboardingPage2() {
    return (
        <TwContainer twc="flex-1 bg-slate-950 pt-12">
            <TwContainer twc="flex-1 flex-col justify-between px-6">
                <TwContainer twc={"flex-1 flex-col justify-start"}>
                    <TwText variant="title" twc={""}>Who is it for?</TwText>
                    <TwText variant="large" twc={"text-slate-300 mb-6"}>Endurance athletes looking to optimise their performance. </TwText>
                    <TwText variant="large" twc={"text-slate-300 mb-6"}>You may not be elite, but you'll definitely be serious. Think runners, cyclists, swimmers, triathletes, skiers, etc...</TwText>
                    <TwText variant="large" twc={"text-slate-300 mb-6"}>While anyone will, of course, benefit from improving their diet, achieving high scores in this app will probably mean weight gain if you aren't exercising at least the equivalent of running 10k a day.</TwText>
                </TwContainer>
                <TwContainer twc={"flex-1 flex-col items-center justify-end"}>
                    <TouchableOpacity tw={"flex-col justify-center items-center text-center text-white border border-slate-800 bg-slate-900 w-32 h-32 rounded-full mb-16"} onPress={() => router.push('/onboarding/page3')}>
                        <TwText twc={"mb-0"}>Continue</TwText>
                    </TouchableOpacity>
                </TwContainer>
            </TwContainer>
        </TwContainer>
    );
}