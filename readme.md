
# 환경 설정.


react-native init Counter
cd Counter
npm install --save styled-components
npm install --save-dev typescript @types/react @types/react-native @types/styled-components babel-plugin-root-import

yarn add styled-components
yarn add typescript @types/react @types/react-native @types/styled-components babel-plugin-root-import

#type script 설정
tsconfig.json
    {
    "compilerOptions": {
        "allowJs": true,
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "isolatedModules": true,
        "jsx": "react",
        "lib": [
            "es6"
        ],
        "moduleResolution": "node",
        "noEmit": true,
        "strict": true,
        "target": "esnext",
        "baseUrl": "./src",
        "paths": {
            "~/*": [
                "*"
            ],
        },
    },
    "exclude": [
        "node_modules",
        "*.config.js"
    ]
}

#절대 경로 babel.config.js
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    ["babel-plugin-root-import", { rootPathPrefix: "~", rootPathSuffix: "src" }]
  ]
};


#단축키 
    js reformat ctrl + shift + f
    

#icon
    https://material.io/resources/icons/?search=add&style=baseline    