const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                'custom-footer': '#6C7C5C',
            },
        },
    },
    content: [
        // ...
        flowbite.content(),
    ],
    plugins: [
        // ...
        flowbite.plugin(),
    ],
};