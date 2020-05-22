// eslint-disable-next-line no-undef
module.exports = {
    ignorePatterns: ['dist/*.js','webpack.*.js'],
    extends: [
        "eslint:recommended",
    ],
    parser: "babel-eslint",
    env: {
        browser: true,
        node: true
    }
};