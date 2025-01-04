/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "~/components/**/*.{js,vue,ts}",
        "~/layouts/**/*.vue",
        "~/pages/**/*.vue",
        "~/plugins/**/*.{js,ts}",
        "~/app.vue",


    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                accent: 'var(--accent)',
                background: 'var(--background)',
                text: 'var(--text)',
                action: 'var(--action)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('tailwindcss-primeui')
    ],
    important: true,
    darkMode: 'class',
}