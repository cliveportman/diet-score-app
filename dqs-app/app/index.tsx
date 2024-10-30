import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { TwContainer } from "@/core/components/TwContainer"
import { TwText } from "@/core/components/TwText"
import {useEffect, useState} from "react";
import database from "@/core/database";
import {useDatabase} from "@/core/hooks";

export default function Homepage() {

    const db = useDatabase();

    // If the user has onboarded, they should be taken to the scores page, so find out here.
    const [onboardedDate, setOnboardedDate] = useState<string | null>(null);
    useEffect(() => {
        if (db) database.getMetaField(db, "onboardedDate").then((onboardedDate) => {
            if (onboardedDate) setOnboardedDate(onboardedDate);
        });
        // Use this for restting the onboardedDate field in the database during development.
        // if (db) database.updateMetaField(db, "onboardedDate", null);
    }, [db]);
    
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
                    <TouchableOpacity tw={"flex-col justify-center items-center text-center text-white border border-slate-800 bg-slate-900 w-32 h-32 rounded-full mb-16"} onPress={() => router.push(onboardedDate ? '/(app)/scores' : '/onboarding')}>
                        <TwText twc={"mb-0"}>Continue</TwText>
                    </TouchableOpacity>
                </TwContainer>
            </TwContainer>
        </TwContainer>
    );
}