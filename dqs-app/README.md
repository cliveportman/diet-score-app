# Diet Score app "Way of the Goat"

![react](https://img.shields.io/badge/React-brown)
![react native](https://img.shields.io/badge/React_Native-brown)
![expo](https://img.shields.io/badge/Expo-brown)
![tailwind](https://img.shields.io/badge/Tailwind/Nativewind-brown)
![javascript](https://img.shields.io/badge/Javascript-blue)
![typescript](https://img.shields.io/badge/Typescript-blue)
![jsx](https://img.shields.io/badge/JSX-blue)

This is a React Native app built with Expo.

Use `yarn` for handling dependencies and scripts.

To work locally, download the latest development build from Expo, then

```
yarn install
yarn start
```

Open up the app on your phone and enter the local address shown in the terminal.

## Creating builds

For a **development** build, run
```
eas build --platform android --profile development 
```

For a **preview** build, run
```
eas build --platform android --profile preview 
```

For a **production** build, run
```
eas build --platform android 
```

## Pushing JS-only updates to via EAS
If the app only contains JS changes, you can push updates to the app store without going through the review process. To do this, run
```
eas update --channel [channel-name] --message "[message]"
```

For **development** builds, use the channel `development`.
```
eas update --channel development --message "Added new feature"
```
\* I''m not sure why you'd do this with a development build.

For **preview** builds, use the channel `preview`. 
```
eas update --channel preview --message "Added new feature"
```

Anyone with the preview build installed will receive the update. When they open the app, it'll check for any updates and download them if they're available. The next time they hard-close the app and open it again, the new version will be loaded.

For **production** builds, use the channel `production`.
```
eas update --channel production --message "Added new feature"
```

Users running the production build will receive the update. When they open the app, it'll check for any updates and download them if they're available. The next time they hard-close the app and open it again, the new version will be loaded.

Except, users on an internal testing track. I'm finding they will need to follow the link you gave them for installation and follow the update process from there.

## Understanding chart colours
### Totals
Daily total were originally green for positive scores and red for negative. But it's a lot more nuanced than that. I was thinking of making 0-10 also red, to reflect the likely high amount of poor quality servings, 11-20 as neutral because that's normally a decent day, and anything above 20 as green. But looking at my history, there are some scores below 10 where I just didn't eat a lot, but otherwise had nutritious food. And in the teens, I have days where I've had a lot of nutritious food but also 5-6 servings of poor quality food. For now, I've neutralised the colours so they're all the same, no matter the score.