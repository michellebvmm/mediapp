import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    "appId": "com.example.app",
    "appName": "MediApp",
    "webDir": "www",
    "bundledWebRuntime": false,
    "plugins": {
      "Camera": {
        "photos": true,
        "savePhotos": false
      }
    }
  };


export default config;
