# Tithi's gift Quiz — setup (all free)

## 1. Firebase (database + owner login)
1. https://console.firebase.google.com -> Add project (skip Analytics).
2. Build -> Firestore Database -> Create database -> production mode.
   Then open the Rules tab, paste the contents of `firestore.rules`, Publish.
3. Build -> Authentication -> Get started -> enable Email/Password.
   Users tab -> Add user: email `owner@tithi-quiz.com`, password `nightshade4806`.
   (If you change the email, change OWNER_EMAIL in config.js too.)
4. Authentication -> Settings -> Authorized domains -> add `YOURUSERNAME.github.io`.
5. Project settings (gear) -> Your apps -> Web (</>) -> register app -> copy the config
   into `config.js`.

## 2. GitHub Pages
1. New GitHub repo, upload `index.html`, `config.js`, `firestore.rules`.
2. Repo Settings -> Pages -> Deploy from branch -> `main` / root.
3. Your quiz link: `https://YOURUSERNAME.github.io/REPO/`
   Owner dashboard: same link + `#owner` (or the Owner dashboard button).
