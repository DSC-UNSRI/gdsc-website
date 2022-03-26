
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "pattern": "url('/public/bg-pattern.svg')",
            },
        },
        fontFamily: {
            'sans': ['"Google Sans"'],
        }
    },
    plugins: [],
}
