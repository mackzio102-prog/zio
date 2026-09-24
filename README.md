# Tech Daily Site Deficiency — Android App

This Android Studio project wraps the tested HTML application in a native Android WebView.

## Build
1. Open this folder in Android Studio.
2. Let Gradle sync.
3. Connect an Android phone or use an emulator.
4. Run the `app` configuration.
5. For an APK: Build > Build APK(s).

## Source
The tested HTML is at:
`app/src/main/assets/index.html`

The existing Power Automate URL is still configured by the HTML app's Settings screen. The backend workflow is not changed by this wrapper.

## Notes
- Internet permission is enabled for Power Automate/Excel requests.
- Camera permission is requested for mobile photo capture.
- LocalStorage is enabled so the app can retain the web app's local state.
