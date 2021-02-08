import App from "./App.svelte"

const app = new App({
    target: document.body,
    props: {
        footer: {
            acknowledgements: [
                { label: "CertBot", url: "https://certbot.eff.org/", alt: "Electronic Frontier Foundation CertBot" },
                { label: "FontPair", url: "https://fontpair.co/", alt: "FontPair for Google Fonts" },
                { label: "Montserrat", tag: ":head", url: "https://fonts.google.com/specimen/Montserrat", alt: "Montserrat Google Font" },
                { label: "Crimson Text", tag: ":body", url: "https://fonts.google.com/specimen/Crimson+Text", alt: "Crimson Text Google Font" },
                { label: "Home Icon Html #352283", url: "https://icon-library.com/icon/home-icon-html-13.html", alt: "Free Icons Library Home Icon" },
                { label: "NGINX", url: "https://www.nginx.com/", alt: "NGINX Load Balancer" },
                { label: "Open Color", url: "https://yeun.github.io/open-color/", alt: "Open Color color schemes" },
                { label: "Svelte.js", url: "https://svelte.dev/", alt: "Svelte Javascript API" },
                { label: "zero-md", url: "https://zerodevx.github.io/zero-md/", alt: "ZeroMD Javascript API" }
            ],
            copyDate: new Date().getFullYear(),
            copyHolder: "jason a. grafft",
            copyEmail: "javascript:window.location.href=atob('bWFpbHRvOmphc29uQGdyYWZmdC5jbw==')",
            copyEmailLabel: "jason \u2200\u22A5 grafft.co"
        },
        masthead: {
            bannerText: "the personal website of jason a. grafft",
            imageAltText: "Anscombe's Quartet",
            imageCaption: "Integrity is not certainty.",
            imagePath: "img/AnscombesQuartet.png"
        },
        navbar: {
            items: [
                { label: "home", path: "img/home-icon-html-13.jpg", url: "", alt: "grafft.co Home", img: true },
                { label: "about", url: "", alt: "About Jason", img: false },
                { label: "cv", url: "", alt: "Jason's CV", img: false },
                { label: "presentations", url: "", alt: "Presentations by Jason", img: false },
                { label: "Jason's GitHub", path: "img/GitHub-Mark-32px.png", url: "", alt: "Jason's GitHub", img: true },
                { label: "Jason's Observable", path: "img/Observable_logo.png", url: "", alt: "Jason's Observable notebooks", img: true }
                // { label: "Jason's LinkedIn", path: "img/LI-In-Bug.png", url: "", alt: "Jason's LinkedIn profile", img: true }
            ]
        }
    }
});

export default app;
