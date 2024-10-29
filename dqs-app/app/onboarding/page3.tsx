import { TouchableOpacity, Text } from 'react-native';
import { router } from 'expo-router';
import { TwContainer } from "@/core/components/TwContainer"
import { TwText } from "@/core/components/TwText"

export default function OnboardingPage2() {
    return (
        <TwContainer twc="flex-1 bg-slate-950 pt-12">
            <TwContainer twc="flex-1 flex-col justify-between px-6">
                <TwContainer twc={"flex-1 flex-col justify-start"}>
                    <TwText variant="title" twc={""}>What do you do?</TwText>
                    <TwText variant="large" twc={"text-slate-300 mb-6"}>Each day, record your dietary intake using the food categories provided.</TwText>
                    <TwText variant="large" twc={"text-slate-300 mb-6"}>Nutritious foods will raise your score, unhealthy foods will lower it.</TwText>
                    <TwText variant="large" twc={"text-slate-300 mb-6"}>Aim for as high a score as you can.</TwText>
                    <TwText variant="large" twc={"text-slate-300 mb-6"}>Weigh yourself regularly.</TwText>
                </TwContainer>
                <TwContainer twc={"flex-1 flex-col items-center justify-end"}>
                    <TouchableOpacity tw={"flex-col justify-center items-center text-center text-white border border-slate-800 bg-slate-900 w-32 h-32 rounded-full mb-16"} onPress={() => router.push('/onboarding/page4')}>
                        <TwText twc={"mb-0"}>Continue</TwText>
                    </TouchableOpacity>
                </TwContainer>
            </TwContainer>
        </TwContainer>
    );
}