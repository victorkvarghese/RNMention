# RNMention
Mention system for letting users name each other.


# Requirements
* [React Native](http://facebook.github.io/react-native/docs/getting-started.html) 
* Xcode 7.3 + (or Andriod Studio for Android)
* CocoaPods (only for iOS) 

## Getting Started
1. Ensure you've followed the [React Native - Get Started Guide](https://facebook.github.io/react-native/docs/getting-started.html)

# Setup

Clone the repo  
```
git clone https://github.com/victorkvarghese/RNMention.git
```
Navigate to folder RNMention
```
$cd RNMention  
```
Install dependencies (npm v3+):   
```
$npm install
```
Link assets and dependencies (npm v3+):   
```
$react-native link
```
Run on ios
```
$react-native run-ios 
```

## Built With
- [React Native](https://github.com/facebook/react-native)
- [React Redux](https://github.com/reactjs/react-redux) a predictable state container for Javascript apps
- [Redux Saga](https://github.com/redux-saga/redux-saga) middleware for Redux
- [React Logger](https://github.com/evgenyrodionov/redux-logger) middleware for Redux logging
- [Redux Persist](https://github.com/rt2zz/redux-persist) Persist and rehydrate a redux store
- [React Navigation](https://github.com/react-community/react-navigation) navigation for React Native
- [Moment](https://momentjs.com/) date operations in js
- [Babel](http://babeljs.io/) for ES6+ support

## File Structure
- `/android` - Android native stuff
- `/ios` - iOS native stuff
- `/app` - Contains our React Native App codebase
  - `/actions` - Action Types and Action Creators
  - `/api` - api handlers
  - `/components` - Dumb components
  - `/lib` - Helpers
  - `/reducers` - Reducers
  - `/navigation` - App navigation
  - `/sagas` - Redux Sagas
  - `/screens` - Smart Containers.
  - `/Entrypoint.js` - Base entrypoint component

## Troubleshooting

In a separate terminal window run:
```
$ react-native start
```
