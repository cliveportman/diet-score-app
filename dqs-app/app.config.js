const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'co.theportman.wotg.dev';
  }

  if (IS_PREVIEW) {
    return 'co.theportman.wotg.preview';
  }

  return 'co.theportman.wotg';
};

const getAppName = () => {
  if (IS_DEV) return 'Way of the Goat [dev]';
  if (IS_PREVIEW) return 'Way of the Goat [preview]';
  return 'Way of the Goat';
};

const getAdaptiveIcon = () => {
  if (IS_DEV) return './assets/images/adaptive-icon-orange.png';
  if (IS_PREVIEW)  return './assets/images/adaptive-icon-green.png';
  return './assets/images/adaptive-icon.png';
};


export default {
  name: getAppName(),
  owner: "cliveportman",
  version: '1.2.1',
  slug: 'way-of-the-goat',
  scheme: "way-of-the-goat",
  ios: {
    bundleIdentifier: getUniqueIdentifier(),
    "supportsTablet": false
  },
  android: {
    package: getUniqueIdentifier(),
    "adaptiveIcon": {
      "foregroundImage": getAdaptiveIcon(),
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
    'expo-font'
  ],
  experiments: {
      typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: 'c024779c-b09f-417d-804a-50eae831b6ba',
    }
  },
  updates: {
    "url": "https://u.expo.dev/c024779c-b09f-417d-804a-50eae831b6ba"
  },
  runtimeVersion: {
    "policy": "appVersion"
  },
  
  newArchEnabled: true

};

