const IS_PROD = process.env.NODE_ENV === 'production'
module.exports = {
    root: true,
    extends: [
        // "react-app",
        // "react-app/jest",
        'cmyr'
    ],
    rules: {
    },
}
