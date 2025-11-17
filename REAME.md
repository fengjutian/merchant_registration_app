# Merchant Registration App

本项目为 React Native 应用，用于商户注册流程开发与演示。本文档提供在 Windows 上的环境要求与快速上手，以及针对常见构建问题的解决方案。

## 技术栈
- React Native：`0.70.6`（`package.json:14`）
- React：`18.1.0`（`package.json:13`）
- Android Gradle Plugin：`7.2.1`（`android/build.gradle:23`）
- Gradle Wrapper：`7.5.1`（Gradle 输出）
- 编译/目标 SDK：`31`（`android/build.gradle:7-8`）
- Hermes 启用：`enableHermes: true`（`android/app/build.gradle:48-51`）

## 环境要求（Windows）
- Node.js：建议使用 `16.x`（仓库包含 `.node-version:1`，亦兼容 18）
- JDK：必须使用 `17`（避免 Java 24 导致 Gradle 报错）
- Android Studio：安装 SDK Platform 31、Platform Tools、AVD（虚拟设备）
- ANDROID_HOME：指向 `C:\Users\<你的用户名>\AppData\Local\Android\Sdk`

## 快速开始
1. 安装依赖：
   ```
   npm install
   ```
2. 启动 Metro：
   ```
   npm run start
   ```
3. 运行 Android：
   ```
   npm run android
   ```

## 常见问题与解决

### 1) Unsupported class file major version 68
- 现象：Gradle 报错 “Unsupported class file major version 68”（对应 Java 24）。
- 原因：项目的 AGP/Gradle（`7.2.1/7.5.1`）仅兼容 JDK 11/17，不支持 JDK 24。
- 解决：安装 JDK 17 并设置环境变量（PowerShell 示例）：
  ```
  $env:JAVA_HOME = "C:\\Program Files\\Java\\jdk-17.0.x"
  $env:PATH = "$env:JAVA_HOME\\bin;$env:PATH"
  ```
  可选：在 `android/gradle.properties` 添加：
  ```
  org.gradle.java.home=C:\\Program Files\\Java\\jdk-17.0.x
  ```
  验证：
  ```
  d:\GitHub\merchant_registration_app\android\gradlew.bat -v
  ```
  输出中的 `JVM:` 应为 `17.x`。

### 2) `'adb' 不是内部或外部命令`
- 原因：未安装 Platform Tools 或未将其加入 PATH。
- 解决：Android Studio 安装 “Android SDK Platform-Tools”，并加入 PATH：
  ```
  $env:ANDROID_HOME = "C:\\Users\\<你>\\AppData\\Local\\Android\\Sdk"
  $env:PATH = "$env:ANDROID_HOME\\platform-tools;$env:PATH"
  adb version
  adb devices
  ```

### 3) `No emulators found` 无法自动启动模拟器
- 在 Android Studio → Device Manager 创建 AVD（API Level 31），点击启动；或连接真机并启用 USB 调试。
- 确认设备：
  ```
  adb devices
  ```

## npm 脚本
- `start`：启动 Metro（`package.json:8`）
- `android`：构建并安装到设备（`package.json:6`）
- `ios`：在 macOS 上运行 iOS（`package.json:7`）
- `lint`：运行 ESLint（`package.json:10`）
- `test`：运行 Jest（`package.json:9`）

## 目录与关键配置
- `android/build.gradle:23`：AGP 版本 `com.android.tools.build:gradle:7.2.1`
- `android/app/build.gradle:48-51`：Hermes 开关与 React 配置
- `android/gradle.properties:11`：Gradle JVM 参数（可添加 `org.gradle.java.home`）
- `android/settings.gradle:1-4`：原生模块与插件加载

## 提示
- 终端建议使用 PowerShell；若使用命令提示符，请按需调整环境变量语法。
- 初次构建可能需要额外时间下载 Gradle/SDK 组件，请保持网络畅通。