<script>
        import Footer from "./Footer.svelte"
        import MarkdownContent from "./MarkdownContent.svelte"
        import Masthead from "./Masthead.svelte"
        import Navbar from "./Navbar.svelte"

        export let footer, masthead, navbar
</script>

<r-grid columns=9>
        <!-- Padding Top -->
        <r-cell span=row></r-cell>

        <Masthead {masthead} />
        <Navbar {navbar}  />
        <MarkdownContent />
        <Footer {footer} />

        <!-- Padding Bottom -->
        <r-cell span=row></r-cell>
</r-grid>
