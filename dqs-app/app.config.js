const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.theportman.dietscore.dev';
  }

  if (IS_PREVIEW) {
    return 'com.theportman.dietscore.preview';
  }

  return 'com.theportman.dietscore';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'Diet Score (Dev)';
  }

  if (IS_PREVIEW) {
    return 'Diet Score (Preview)';
  }

  return 'Diet Score';
};

export default {
  name: getAppName(),
  version: '1.0.0',
  slug: 'diet-scpre',
  ios: {
    bundleIdentifier: getUniqueIdentifier(),
    "supportsTablet": false
  },
  android: {
    package: getUniqueIdentifier(),
    "adaptiveIcon": {
      "foregroundImage": "./assets/images/adaptive-icon.png",
      "backgroundColor": "#ffffff"
    }
  },
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  plugins: [
    'expo-router',
  ],
  experiments: {
      typedRoutes: true,
  },
};




// {
//   "expo": {
//     "name": "dqs-app",
//     "slug": "dqs-app",
//     "version": "1.0.0",
//     "orientation": "portrait",
//     "icon": "./assets/images/icon.png",
//     "scheme": "myapp",
//     "userInterfaceStyle": "automatic",
//     "splash": {
//       "image": "./assets/images/splash.png",
//       "resizeMode": "contain",
//       "backgroundColor": "#ffffff"
//     },
//     "ios": {
//       "supportsTablet": true
//     },
//     "android": {
//       "adaptiveIcon": {
//         "foregroundImage": "./assets/images/adaptive-icon.png",
//         "backgroundColor": "#ffffff"
//       }
//     },
//     "web": {
//       "bundler": "metro",
//       "output": "static",
//       "favicon": "./assets/images/favicon.png"
//     },
//     "plugins": [
//       "expo-router"
//     ],
//     "experiments": {
//       "typedRoutes": true
//     }
//   }
// }
