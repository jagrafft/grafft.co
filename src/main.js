import App from "./App.svelte"

const app = new App({
    target: document.body,
    props: {
        copyDate: new Date().getFullYear()
    }
});

export default app;
