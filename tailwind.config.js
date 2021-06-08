module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            flex: {
                '0': '0 0 100%'
            },
            animation: {
                'ticker': 'ticker 30s infinite linear'
            },
            keyframes: {
                'ticker': {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' }
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
