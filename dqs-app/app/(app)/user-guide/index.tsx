import React from 'react';
import { Text, ScrollView} from 'react-native';
import { TwContainer } from "@/core/components/TwContainer"
import { TwText } from "@/core/components/TwText"
import {Score} from "@/app/(app)/scores/components/Score";
import {FoodCat} from "@/core/enums";
import {maxScores} from "@/core/constants";
import {TwLine} from "@/core/components/TwLine";

export default function UserGuidePage()
{
    return (
        <TwContainer twc="flex-1 bg-slate-950 px-3 pt-6">
            <TwContainer twc={"flex-col justify-end items-start mb-6"}>
                <TwText variant="title" twc={""}>User guide</TwText>
                <TwText variant="subtitle" twc={""}>How to get the most out of this app</TwText>
            </TwContainer>
            <TwContainer twc="flex-1 flex-col">
                <ScrollView>
                    
                    <TwText>This user guide is not intended to replace the inspiration behind it: a book called <Text style={{ fontStyle: 'italic' }}>Racing Weight</Text> by Matt Fitzgerald. If you haven't already, you really should buy the book.</TwText>
                    <TwText twc={"mb-0"}>That said, you're likely to have some questions, so I'll try and preempt them here. Generally, just use your common sense.</TwText>
                    
                    <TwLine />
                    
                    <TwContainer twc="flex-col">
                        <TwText variant={"heading"}>How to use</TwText>
                        <TwContainer twc={"flex-col justify-center mb-6"}>
                            <Score text={"Fruit"} cat={FoodCat.fruit} servings={2} maxScores={maxScores.fruit} onPress={() => {}} onLongPress={() => {}} />
                            <Score text={"Refined grains"} cat={FoodCat.refinedgrains} servings={3} maxScores={maxScores.refinedgrains} onPress={() => {}} onLongPress={() => {}} />
                        </TwContainer>
                        <TwText variant="large" twc={"text-slate-300 mb-6"}>To add a serving <Text style={{ fontWeight: 600 }}>tap the food category.</Text></TwText>
                        <TwText variant="large" twc={"text-slate-300 mb-6"}>To remove a serving <Text style={{ fontWeight: 600 }}>press and hold the food category</Text>.</TwText>
                        <TwText variant="large" twc={"text-slate-300 mb-0"}>To view a different day <Text style={{ fontWeight: 600 }}>swipe</Text>.</TwText>
                    </TwContainer>

                    <TwLine />

                    <TwText variant={"heading"}>Food categories</TwText>
                    
                    <TwText variant={"subheading"}>Vegetables</TwText>
                    <TwContainer twc={"flex-col justify-center mt-1.5 mb-1.5"}>
                        <Score text={"Vegetables"} cat={FoodCat.veg} servings={6} maxScores={maxScores.veg} onPress={() => {}} onLongPress={() => {}} />
                    </TwContainer>
                    <TwText twc="mb-6">Raw or cooked vegetables, pulses, tomatoes, chillies, eaten whole, chopped, pureed, whatever. Only count potatoes if you're including the skin. One serving might be a fist-sized portion of veg, a decent side salad or a bowl of soup.</TwText>

                    <TwText variant={"subheading"}>Fruit</TwText>
                    <TwContainer twc={"flex-col justify-center mt-1.5 mb-1.5"}>
                        <Score text={"Fruit"} cat={FoodCat.fruit} servings={6} maxScores={maxScores.fruit} onPress={() => {}} onLongPress={() => {}} />
                    </TwContainer>
                    <TwText twc="mb-6">Whole fruit, tinned fruit, canned fruit, smoothies and juices made with 100% fruit. One serving might be an apple or a banana, a handful of berries or a glass of juice. Something like apple crumble, you'd count as a portion of fruit and a portion of sweets.</TwText>

                    <TwText variant={"subheading"}>Nuts + seeds + healthy oils</TwText>
                    <TwContainer twc={"flex-col justify-center mt-1.5 mb-1.5"}>
                        <Score text={"Nuts + seeds"} cat={FoodCat.nuts} servings={6} maxScores={maxScores.nuts} onPress={() => {}} onLongPress={() => {}} />
                    </TwContainer>
                    <TwText twc="mb-6">Any nuts, seeds and healthy oils (e.g. an olive oil-based salad-dressing). One portion would be a handful. Nut butters without added sugar also count.</TwText>

                    <TwText variant={"subheading"}>Whole grains</TwText>
                    <TwContainer twc={"flex-col justify-center mt-1.5 mb-1.5"}>
                        <Score text={"Whole grains"} cat={FoodCat.wholegrains} servings={6} maxScores={maxScores.wholegrains} onPress={() => {}} onLongPress={() => {}} />
                    </TwContainer>
                    <TwText twc="mb-6">Whole oats, wheat and other grains, including baked goods and pastas made with whole grain flours. One portion would be two slices of bread or a bowl of porridge.</TwText>

                    <TwText variant={"subheading"}>Dairy</TwText>
                    <TwContainer twc={"flex-col justify-center mt-1.5 mb-1.5"}>
                        <Score text={"Dairy"} cat={FoodCat.dairy} servings={6} maxScores={maxScores.dairy} onPress={() => {}} onLongPress={() => {}} />
                    </TwContainer>
                    <TwText twc="mb-6">Unsweetened milk from cows, sheep and goats, unsweetened yoghurt, cheese, cream. Small amounts of butter spread on bread to not count. Processed milks like soya milk also count. A portion would be a glass of milk, two slices of cheese, 2-3 tablespoons of yoghurt.</TwText>

                    <TwText variant={"subheading"}>Lean meats + eggs</TwText>
                    <TwContainer twc={"flex-col justify-center mt-1.5 mb-1.5"}>
                        <Score text={"Lean meats"} cat={FoodCat.leanproteins} servings={6} maxScores={maxScores.leanproteins} onPress={() => {}} onLongPress={() => {}} />
                    </TwContainer>
                    <TwText twc="mb-6">Unprocessed meats from land animals and fish. And eggs. One portion would be a chicken breast, regular-sized steak or fish fillet or 2 eggs.</TwText>

                    <TwText variant={"subheading"}>Refined grains</TwText>
                    <TwContainer twc={"flex-col justify-center mt-1.5 mb-1.5"}>
                        <Score text={"Refined grains"} cat={FoodCat.refinedgrains} servings={6} maxScores={maxScores.refinedgrains} onPress={() => {}} onLongPress={() => {}} />
                    </TwContainer>
                    <TwText twc="mb-6">White rice, white flour, most pastas, cereals, breads and other baked goods. A portion would be a standard serving of any of them.</TwText>

                    <TwText variant={"subheading"}>Sweets</TwText>
                    <TwContainer twc={"flex-col justify-center mt-1.5 mb-1.5"}>
                        <Score text={"Sweets"} cat={FoodCat.sweets} servings={6} maxScores={maxScores.sweets} onPress={() => {}} onLongPress={() => {}} />
                    </TwContainer>
                    <TwText twc="mb-6">Anything with a substantial amount of sugar and anything artificially sweetened: sweets, pastries and other desserts, sugary drinks, energy bars, many breakfast cereals, yoghurts with sugar listed as their second ingredient.</TwText>

                    <TwText variant={"subheading"}>Fatty (and processed) meats</TwText>
                    <TwContainer twc={"flex-col justify-center mt-1.5 mb-1.5"}>
                        <Score text={"Fatty meats"} cat={FoodCat.fattyproteins} servings={6} maxScores={maxScores.fattyproteins} onPress={() => {}} onLongPress={() => {}} />
                    </TwContainer>
                    <TwText twc="mb-6">Meats that have been processed beyond cutting, grinding and seasoning: sausages, ham, bacon, corned beef, jerky, most fast foods. Otherwise lean meats such as fish fillets that have been battered or breaded should also be included.</TwText>

                    <TwText variant={"subheading"}>Fried foods</TwText>
                    <TwContainer twc={"flex-col justify-center mt-1.5 mb-1.5"}>
                        <Score text={"Fried foods"} cat={FoodCat.friedfoods} servings={6} maxScores={maxScores.friedfoods} onPress={() => {}} onLongPress={() => {}} />
                    </TwContainer>
                    <TwText twc="mb-6">Chips (fries), crisps, fried chicken, donuts. Use your common sense with serving sizes.</TwText>

                    <TwText variant={"subheading"}>Alcohol</TwText>
                    <TwContainer twc={"flex-col justify-center mt-1.5 mb-1.5"}>
                        <Score text={"Alcohol"} cat={FoodCat.alcohol} servings={6} maxScores={maxScores.alcohol} onPress={() => {}} onLongPress={() => {}} />
                    </TwContainer>
                    <TwText twc="mb-0">I disagree with Matt here and think you should be penalised for even one serving of alcohol. The evidence around red wine is questionable and just because it loses you a few points doesn't mean you have to go without.</TwText>

                    <TwLine />

                    <TwContainer twc="flex-col mb-0">
                        <TwText variant={"heading"}>Breaking the rules</TwText>
                        <TwText twc="mb-6">You 100% need to work out what works for you with this. Remember a food can cover more than one category and there are exceptions to every rule. Some examples:</TwText>
                        <TwText>- I often dilute 250ml of milkshake with another 250ml of milk and call it 2 portions of Dairy and 1 portion of Sweets.</TwText>
                        <TwText>- While Matt counts processed meats like bacon as low quality foods (i.e. fatty meats), I personally count a couple of fat-free medallions as lean meats.</TwText>
                    </TwContainer>
                    
                    <TwLine />

                    <TwText variant={"heading"}>Other stuff</TwText>
                    <TwText variant={"subheading"}>Eating on the run</TwText>
                    <TwText twc="text-white mb-6">Anything you eat while exercising doesn't count. So go run an ultramarathon and stuff your face while doing so! Haribo... um nom nom.</TwText>
                    
                    <TwText variant={"subheading"}>Processed vs unprocessed</TwText>
                    <TwText twc="text-white mb-6">Matt is quite keen on unprocessed food, and the science is only getting stronger. It's not all bad, but you'll find most of it is low quality. So if you can steer clear of it, you probably should.</TwText>
                    
                    <TwText variant={"subheading"}>Protein shakes</TwText>
                    <TwText twc="text-white mb-6">Unsweetened whey protein fits the nutrition profile of lean meats, so I'd count it as that. The sweetened powders and shakes can contain surprising amounts of sugar or artificial sweetener though, so you'll need to use your judgement there - I'd probably make a large shake and treat is as 1 portion of lean meat and 1 portion of sweets.</TwText>

                    <TwText variant={"subheading"}>It's too easy to cheat</TwText>
                    <TwText twc="mb-6">This system is meant for serious endurance athletes so a degree of dedication and discipline shouldn't be too much to ask...</TwText>

                    <TwText variant={"subheading"}>There is already an offical app</TwText>
                    <TwText twc="mb-12">There is, and I've paid for it and used it for several weeks. But there's lot about it that I don't like and development seems to have stagnated, so I built my own. If you feel bad for Matt, buy his book <Text style={{ fontStyle: 'italic' }}>Racing Weight</Text> (or any of his other books). Actually, please just do that anyway!</TwText>
                    
                </ScrollView>
            </TwContainer>
        </TwContainer>
    );
}