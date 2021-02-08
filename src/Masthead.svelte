<script>
        export let masthead;
</script>

<style>
        .imageCaption {
           font-family: "Montserrat", sans-serif;
           font-size: 1.85em;
           font-style: italic;
           font-weight: 400;
           margin: 1% 0% 1.5% 0%;
        }

        .bannerText {
           border-bottom: 1px solid var(--oc-gray-5);
           border-top: 1px solid var(--oc-gray-5);
           color: var(--oc-gray-8);
           display: block;
           font-family: "Montserrat", sans-serif;
           font-size: 1.35em;
           margin-bottom: 1%;
           margin-left: auto;
           margin-right: auto;
           width: 66%;
        }

        img {
            display: block;
            margin: auto;
        }

        r-cell {
               text-align: center;
        }
</style>

<r-cell span=3-7>
     <img class="h-20 fill" src={masthead.imagePath} alt={masthead.imageAltText} />
     <div class="imageCaption">{masthead.imageCaption}</div>
     <div class="bannerText">{masthead.bannerText}</div>
</r-cell>