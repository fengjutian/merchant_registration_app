# Merchant Registration App

鏈」鐩负 React Native 搴旂敤锛岀敤浜庡晢鎴锋敞鍐屾祦绋嬪紑鍙戜笌婕旂ず銆傛湰鏂囨。鎻愪緵鍦?Windows 涓婄殑鐜瑕佹眰涓庡揩閫熶笂鎵嬶紝浠ュ強閽堝甯歌鏋勫缓闂鐨勮В鍐虫柟妗堛€?

## 鎶€鏈爤
- React Native锛歚0.70.6`锛坄package.json:14`锛?
- React锛歚18.1.0`锛坄package.json:13`锛?
- Android Gradle Plugin锛歚7.2.1`锛坄android/build.gradle:23`锛?
- Gradle Wrapper锛歚7.5.1`锛圙radle 杈撳嚭锛?
- 缂栬瘧/鐩爣 SDK锛歚31`锛坄android/build.gradle:7-8`锛?
- Hermes 鍚敤锛歚enableHermes: true`锛坄android/app/build.gradle:48-51`锛?

## 鐜瑕佹眰锛圵indows锛?
- Node.js锛氬缓璁娇鐢?`16.x`锛堜粨搴撳寘鍚?`.node-version:1`锛屼害鍏煎 18锛?
- JDK锛氬繀椤讳娇鐢?`17`锛堥伩鍏?Java 24 瀵艰嚧 Gradle 鎶ラ敊锛?
- Android Studio锛氬畨瑁?SDK Platform 31銆丳latform Tools銆丄VD锛堣櫄鎷熻澶囷級
- ANDROID_HOME锛氭寚鍚?`C:\Users\<浣犵殑鐢ㄦ埛鍚?\AppData\Local\Android\Sdk`

## 蹇€熷紑濮?
1. 瀹夎渚濊禆锛?
   ```
   npm install
   ```
2. 鍚姩 Metro锛?
   ```
   npm run start
   ```
3. 杩愯 Android锛?
   ```
   npm run android
   ```

## 甯歌闂涓庤В鍐?

### 1) Unsupported class file major version 68
- 鐜拌薄锛欸radle 鎶ラ敊 鈥淯nsupported class file major version 68鈥濓紙瀵瑰簲 Java 24锛夈€?
- 鍘熷洜锛氶」鐩殑 AGP/Gradle锛坄7.2.1/7.5.1`锛変粎鍏煎 JDK 11/17锛屼笉鏀寔 JDK 24銆?
- 瑙ｅ喅锛氬畨瑁?JDK 17 骞惰缃幆澧冨彉閲忥紙PowerShell 绀轰緥锛夛細
  ```
  $env:JAVA_HOME = "C:\\Program Files\\Java\\jdk-17.0.x"
  $env:PATH = "$env:JAVA_HOME\\bin;$env:PATH"
  ```
  鍙€夛細鍦?`android/gradle.properties` 娣诲姞锛?
  ```
  org.gradle.java.home=C:\\Program Files\\Java\\jdk-17.0.x
  ```
  楠岃瘉锛?
  ```
  d:\GitHub\merchant_registration_app\android\gradlew.bat -v
  ```
  杈撳嚭涓殑 `JVM:` 搴斾负 `17.x`銆?

### 2) `'adb' 涓嶆槸鍐呴儴鎴栧閮ㄥ懡浠
- 鍘熷洜锛氭湭瀹夎 Platform Tools 鎴栨湭灏嗗叾鍔犲叆 PATH銆?
- 瑙ｅ喅锛欰ndroid Studio 瀹夎 鈥淎ndroid SDK Platform-Tools鈥濓紝骞跺姞鍏?PATH锛?
  ```
  $env:ANDROID_HOME = "C:\\Users\\<浣?\\AppData\\Local\\Android\\Sdk"
  $env:PATH = "$env:ANDROID_HOME\\platform-tools;$env:PATH"
  adb version
  adb devices
  ```

### 3) `No emulators found` 鏃犳硶鑷姩鍚姩妯℃嫙鍣?
- 鍦?Android Studio 鈫?Device Manager 鍒涘缓 AVD锛圓PI Level 31锛夛紝鐐瑰嚮鍚姩锛涙垨杩炴帴鐪熸満骞跺惎鐢?USB 璋冭瘯銆?
- 纭璁惧锛?
  ```
  adb devices
  ```

## npm 鑴氭湰
- `start`锛氬惎鍔?Metro锛坄package.json:8`锛?
- `android`锛氭瀯寤哄苟瀹夎鍒拌澶囷紙`package.json:6`锛?
- `ios`锛氬湪 macOS 涓婅繍琛?iOS锛坄package.json:7`锛?
- `lint`锛氳繍琛?ESLint锛坄package.json:10`锛?
- `test`锛氳繍琛?Jest锛坄package.json:9`锛?

## 鐩綍涓庡叧閿厤缃?
- `android/build.gradle:23`锛欰GP 鐗堟湰 `com.android.tools.build:gradle:7.2.1`
- `android/app/build.gradle:48-51`锛欻ermes 寮€鍏充笌 React 閰嶇疆
- `android/gradle.properties:11`锛欸radle JVM 鍙傛暟锛堝彲娣诲姞 `org.gradle.java.home`锛?
- `android/settings.gradle:1-4`锛氬師鐢熸ā鍧椾笌鎻掍欢鍔犺浇

## 鎻愮ず
- 缁堢寤鸿浣跨敤 PowerShell锛涜嫢浣跨敤鍛戒护鎻愮ず绗︼紝璇锋寜闇€璋冩暣鐜鍙橀噺璇硶銆?
- 鍒濇鏋勫缓鍙兘闇€瑕侀澶栨椂闂翠笅杞?Gradle/SDK 缁勪欢锛岃淇濇寔缃戠粶鐣呴€氥€