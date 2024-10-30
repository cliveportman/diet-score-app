# Diet Score App

## What is it?
A React Native app that allows endurance athletes to track their Diet Quality Score (DQS) as they eat throughout the day.

The DQS comes from a book called "Racing Weight" by Matt Fitzgerald. The book is written for serious endurance athletes wanting to manage their weight for better performance. There is already an official app in the Play Store and App Store, but I wanted to make my own version, because:

- It annoys me that the official app requires creating an account. I believe just saving data to the device will be enough for most users.
- I think I can do a much better job with the user interface.
- Some of the food groups vary slightly from the book in a way I do not like, e.g. I don't think you should be rewarded two points just for drinking two cups of unsweetened tea, nor do I think your first alcoholic drink of the day should avoid a penalty.

## What's the tech?
![react](https://img.shields.io/badge/React-brown)
![react native](https://img.shields.io/badge/React_Native-brown)
![expo](https://img.shields.io/badge/Expo-brown)
![tailwind](https://img.shields.io/badge/Tailwind/Nativewind-brown)
![javascript](https://img.shields.io/badge/Javascript-blue)
![typescript](https://img.shields.io/badge/Typescript-blue)
![jsx](https://img.shields.io/badge/JSX-blue)

## User interface

### UI library
I'm leaning on Tailwind UI as I love it and happen to have a commercial licence from years ago. You can't just copy the components into the React Native, though, so I've started building my own UI library as I go.

### Typeface
The typeface is [Inter](https://rsms.me/inter/), a font freely available on Google Fonts. Why this font?
- It has elements of Helvetica in it, which I love.
- It's used for NASA instrumentation and computer interfaces, which is cool.
- It's used by Tailwind UI, so I know it won't look out of place with the other styles.
- The smaller "text" designs (e.g. light, regular, medium and semi-bold) aid legibility of the lower-case text, so use them for text and UI-work.
- The larger "display" versions (e.g. bold, black) are designed for headings and titles. 

I've configured it for Tailwind/Nativewind usage, accessible via `font-light`, `font-regular`, `font-medium`, `font-semibold`, and `font-bold`. 