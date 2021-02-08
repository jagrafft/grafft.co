import App from "./App.svelte"

const app = new App({
    target: document.body,
    props: {
        footer: {
            acknowledgements: [
                { label: "CertBot", url: "" },
                { label: "FontPair", url: "" },
                { label: "Montserrat (head)", url: "" },
                { label: "Crimson Text (body)", url: "" },
                { label: "Home Icon Html #352283", url: "" },
                { label: "NGINX", url: "" },
                { label: "Open Color", url: "" },
                { label: "Svelte.js", url: "" },
                { label: "zero-md", url: "" }
            ],
            copyDate: new Date().getFullYear(),
            copyHolder: "jason a. grafft"
            copyEmail: "",
            copyEmailLabel: "jason &#x2200;&#x22A5 grafft.co"
        },
        masthead: {
            bannerText: "the personal website of jason a. grafft",
            image: "img/AnscombesQuartet.png",
            imageAltText: "Anscombe's Quartet",
            imageCaption: "Integrity is not certainty."
        },
        navbar: {
            items: [
                { label: "", url: "" },
                { label: "about", url: "" },
                { label: "cv", url: "" },
                { label: "presentations", url: "" },
                { img: "", url: "" },  // GitHub
                { img: "", url: "" }  // Observable
                // { img: "", url: "" }  // LinkedIn
            ]
        }
    }
});

export default app;
