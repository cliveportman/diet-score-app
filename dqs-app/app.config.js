const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'co.theportman.dietscore.dev';
  }

  if (IS_PREVIEW) {
    return 'co.theportman.dietscore.preview';
  }

  return 'co.theportman.dietscore';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'DS [dev]';
  }

  if (IS_PREVIEW) {
    return 'DS [pre]';
  }

  return 'Diet Score';
};

export default {
  name: getAppName(),
  owner: "cliveportman",
  version: '1.0.0',
  slug: 'diet-scpre',
  scheme: "dietscoreapp",
  ios: {
    bundleIdentifier: getUniqueIdentifier(),
    "supportsTablet": false
  },
  android: {
    package: getUniqueIdentifier(),
    "adaptiveIcon": {
      "foregroundImage": "./assets/images/adaptive-icon.png",
      "backgroundColor": "#020617"
    }
  },
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#020617',
  },
  plugins: [
    'expo-router',
  ],
  experiments: {
      typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: '32ff1f5e-93e3-46f9-8758-b957ef39d7f5',
    }
  }
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
