module.exports = {
    "env": {
        "jest": true,
        "node": true
    },
    "extends":[ "airbnb-base","plugin:prettier/recommended"],
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
        ],
        "no-console":0
    },
};