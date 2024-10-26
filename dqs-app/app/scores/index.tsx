import database from "@/core/database";
import type { Servings } from "@/core/types";
import { FoodCat } from "@/core/enums";
import {useEffect, useState} from "react";
import {SQLiteDatabase} from "expo-sqlite";

import { TwContainer } from "@/core/components/TwContainer"
import { TwButton } from "@/core/components/TwButton"
import { TwText } from "@/core/components/TwText"

import { format } from "date-fns";
import {ScoreLabel} from "@/app/scores/components/ScoreLabel";
import {ScoreServing} from "@/app/scores/components/ScoreServing";
import {Pressable} from "react-native";

const servings: Servings = {
    date: '2021-09-23',
    veg: 6,
    fruit: 2,
    nuts: 3,
    wholegrains: 4,
    dairy: 5,
    leanproteins: 6,
    beverages: 3,
    refinedgrains: 8,
    sweets: 9,
    fattyproteins: 10,
    friedfoods: 11,
    alcohol: 1,
    other: 12,
};

export default function App() {
    const [db, setDb] = useState<SQLiteDatabase | null>(null);
    useEffect(() => {
        setDb(database.openDatabase());
    }, []);
    
    const [scores, setScores] = useState<Servings[]>([]);
    useEffect(() => {
        if (db) {
            database.getAllServings(db).then((results) => setScores(results));
        }
    }, [db]);
    
    function handleServingPress(cat: FoodCat) {
        console.log('serving press:', cat);
    }
        
    return (
        <TwContainer twc="flex-1 flex-col justify-center px-3 bg-slate-950">
            <TwContainer twc={"mb-3"}><TwText variant="title" twc={"text-center"}>Today</TwText></TwContainer>
            <Pressable tw={"w-full flex-row mb-1.5" } onPress={() => handleServingPress(FoodCat.veg)}>
                <ScoreLabel text={"Vegetables"} />
                <ScoreServing serving={1} maxScore={2} />
                <ScoreServing serving={1} maxScore={2} />
                <ScoreServing serving={1} maxScore={2} />
                <ScoreServing serving={1} maxScore={1} />
                <ScoreServing serving={1} maxScore={0} />
                <ScoreServing serving={0} maxScore={0} />
            </Pressable>
            <Pressable tw={"w-full flex-row mb-1.5" } onPress={() => handleServingPress(FoodCat.fruit)}>
                <ScoreLabel text={"Fruit"} />
                <ScoreServing serving={1} maxScore={2} />
                <ScoreServing serving={1} maxScore={2} />
                <ScoreServing serving={0} maxScore={2} />
                <ScoreServing serving={0} maxScore={1} />
                <ScoreServing serving={0} maxScore={0} />
                <ScoreServing serving={0} maxScore={0} />
            </Pressable>
            <Pressable tw={"w-full flex-row mb-1.5" } onPress={() => handleServingPress(FoodCat.nuts)}>
                <ScoreLabel text={"Nuts + seeds"} />
                <ScoreServing serving={0} maxScore={2} />
                <ScoreServing serving={0} maxScore={2} />
                <ScoreServing serving={0} maxScore={+1} />
                <ScoreServing serving={0} maxScore={0} />
                <ScoreServing serving={0} maxScore={0} />
                <ScoreServing serving={0} maxScore={-1} />
            </Pressable>
            <Pressable tw={"w-full flex-row mb-1.5" } onPress={() => handleServingPress(FoodCat.wholegrains)}>
                <ScoreLabel text={"Whole grains"} />
                <ScoreServing serving={1} maxScore={+2} />
                <ScoreServing serving={1} maxScore={+2} />
                <ScoreServing serving={1} maxScore={+1} />
                <ScoreServing serving={0} maxScore={0} />
                <ScoreServing serving={0} maxScore={0} />
                <ScoreServing serving={0} maxScore={-1} />
            </Pressable>
            <Pressable tw={"w-full flex-row mb-1.5" } onPress={() => handleServingPress(FoodCat.dairy)}>
                <ScoreLabel text={"Dairy"} />
                <ScoreServing serving={1} maxScore={+2} />
                <ScoreServing serving={1} maxScore={+1} />
                <ScoreServing serving={0} maxScore={+1} />
                <ScoreServing serving={0} maxScore={0} />
                <ScoreServing serving={0} maxScore={-1} />
                <ScoreServing serving={0} maxScore={-2} />
            </Pressable>
            <Pressable tw={"w-full flex-row mb-1.5" } onPress={() => handleServingPress(FoodCat.leanproteins)}>
                <ScoreLabel text={"Lean meats"} />
                <ScoreServing serving={1} maxScore={+2} />
                <ScoreServing serving={1} maxScore={+1} />
                <ScoreServing serving={0} maxScore={+1} />
                <ScoreServing serving={0} maxScore={0} />
                <ScoreServing serving={0} maxScore={-1} />
                <ScoreServing serving={0} maxScore={-2} />
            </Pressable>
            <Pressable tw={"w-full flex-row mb-1.5" } onPress={() => handleServingPress(FoodCat.beverages)}>
                <ScoreLabel text={"Coffee + tea"} />
                <ScoreServing serving={1} maxScore={+1} />
                <ScoreServing serving={1} maxScore={+1} />
                <ScoreServing serving={1} maxScore={0} />
                <ScoreServing serving={1} maxScore={0} />
                <ScoreServing serving={1} maxScore={0} />
                <ScoreServing serving={1} maxScore={-1} />
            </Pressable>
            <Pressable tw={"w-full flex-row mb-1.5" } onPress={() => handleServingPress(FoodCat.refinedgrains)}>
                <ScoreLabel text={"Refined grains"} />
                <ScoreServing serving={1} maxScore={-1} />
                <ScoreServing serving={0} maxScore={-1} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
            </Pressable>
            <Pressable tw={"w-full flex-row mb-1.5" } onPress={() => handleServingPress(FoodCat.sweets)}>
                <ScoreLabel text={"Sweets"} />
                <ScoreServing serving={1} maxScore={-2} />
                <ScoreServing serving={1} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
            </Pressable>
            <Pressable tw={"w-full flex-row mb-1.5" } onPress={() => handleServingPress(FoodCat.fattyproteins)}>
                <ScoreLabel text={"Fatty meats"} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
            </Pressable>
            <Pressable tw={"w-full flex-row mb-1.5" } onPress={() => handleServingPress(FoodCat.friedfoods)}>
                <ScoreLabel text={"Friend foods"} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
            </Pressable>
            <Pressable tw={"w-full flex-row mb-1.5" } onPress={() => handleServingPress(FoodCat.alcohol)}>
                <ScoreLabel text={"Alcohol"} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
            </Pressable>
            <Pressable tw={"w-full flex-row mb-3" } onPress={() => handleServingPress(FoodCat.other)}>
                <ScoreLabel text={"Other"} />
                <ScoreServing serving={0} maxScore={-1} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
                <ScoreServing serving={0} maxScore={-2} />
            </Pressable>
            <TwContainer twc={"flex-row justify-between"}>
                <TwContainer twc={"w-1/4"}/>
                <TwContainer twc={"w-1/2 pt-3"}>
                    <TwText variant="title" twc={"text-center text-5xl mb-0"}>---</TwText>
                    <TwText variant="copy" twc={"text-center"}>(0 portions)</TwText>
                </TwContainer>
                <TwContainer twc={"w-1/4"}>
                    <TwText variant="subheading" twc={"text-right text-green-400 mb-0"}>---</TwText>
                    <TwText variant="subheading" twc={"text-right text-red-400"}>---</TwText>
                </TwContainer>
            </TwContainer>
        </TwContainer>
    );
}