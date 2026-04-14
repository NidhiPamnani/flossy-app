# Daily Floss Coach

A mobile app built to help adults build consistent flossing habits through daily logging, streak tracking, and social accountability via an interactive leaderboard.

Developed as part of a behavioral decision-making research study with Professor Hal Hershfield's MBA Capstone team at the UCLA Anderson School of Management.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React Native + Expo |
| Navigation | Expo Router (file-based routing) |
| State Management | Redux |
| Backend / API | RESTful APIs (custom) |
| Database | SQLite |
| UI | Custom components, Expo libraries |

---

## Features

- 5-screen onboarding flow
- Daily flossing log
- Streak tracking with persistence across sessions
- Interactive leaderboard for group accountability
- Habit data and progress stored locally via SQLite

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) app installed on your iOS or Android device

```bash
npm install -g expo-cli
```

### Install Dependencies

```bash
npm install
```

---

## Running the App

### On iOS Simulator (Mac only)

```bash
npx expo start --ios
```

### On Android Emulator

Make sure Android Studio and an AVD (Android Virtual Device) are set up, then:

```bash
npx expo start --android
```

### On a Physical Device (iOS or Android)

1. Run:

```bash
npx expo start
```

2. Scan the QR code shown in the terminal with:
   - **iOS**: Camera app
   - **Android**: Expo Go app

---

## Multi-User / Group Testing (Tunnel Mode)

If multiple people need to run the app at the same time — for example during a research study or demo — use tunnel mode. This allows anyone on any network to connect, not just those on the same Wi-Fi.

```bash
npx expo start --tunnel
```

Each participant scans the QR code in Expo Go on their own device. Everyone runs their own instance of the app independently, with their own habit data stored locally.

> **Note:** Tunnel mode requires an Expo account. Run `npx expo login` before starting if prompted.

---


## Resetting the Project

To clear starter code and start fresh:

```bash
npm run reset-project
```

This moves existing code to `app-example/` and creates a blank `app/` directory.

---

## Built With

- [Expo](https://expo.dev/) — Universal app development platform
- [React Native](https://reactnative.dev/) — Cross-platform mobile framework
- [Redux](https://redux.js.org/) — State management
- [SQLite (expo-sqlite)](https://docs.expo.dev/versions/latest/sdk/sqlite/) — Local data persistence
