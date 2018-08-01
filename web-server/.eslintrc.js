module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
        "node": true
    },
    "extends":[ "airbnb-base","plugin:prettier/recommended"],
    "parserOptions": {
        "ecmaVersion": 2017
    },
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
};