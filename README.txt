TECH DAILY SITE DEFICIENCY — PWA PACKAGE

This package is based on the confirmed V18.11 Auto Status Security web app.

Files:
- index.html: current working web app
- manifest.webmanifest: mobile install metadata
- sw.js: PWA service worker
- icons/: app icons

IMPORTANT:
The PWA must be hosted from HTTPS (or localhost during development). Opening index.html directly from a file manager will not provide full PWA installation behavior.

The existing Supabase, Power Automate, Excel and OneDrive integrations are preserved in index.html.

After hosting, Android users can open the web app in Chrome and use:
Menu (⋮) → Add to Home screen / Install app

This does not require an APK.
