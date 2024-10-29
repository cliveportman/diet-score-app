import { Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {MaterialIcons} from "@expo/vector-icons";
import TailwindColors from "tailwindcss/colors";

import {TwContainer} from "@/core/components/TwContainer";
import {useEffect, useState} from "react";
import {SQLiteDatabase} from "expo-sqlite";
import database from "@/core/database";
import {router} from "expo-router";

export function OnboardingHeader() {
    
    const [db, setDb] = useState<SQLiteDatabase | null>(null);
    useEffect(() => {
        setDb(database.openDatabase());
    }, []);

    const navigation = useNavigation();
    function handleButtonPress() {
        if (!db) return;
        const date = new Date();
        database.updateMetaField(db, "onboardedDate", date.toISOString().split('T')[0]).then(() => {
            router.navigate('/(app)/scores');
        });
    }

    return (
        <TwContainer twc={"flex-row justify-end items-center h-16 mb-6"}>
            <Pressable tw={`flex-row justify-end items-center w-16 h-16` } onPress={handleButtonPress}>
                <MaterialIcons name={"close"} size={42} color={TailwindColors.slate[400]} />
            </Pressable>
        </TwContainer>
    );
}


