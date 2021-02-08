<script>
        export let footer;
</script>

<style>
        a {
            color: var(--oc-orange-7);
        }

        r-cell {
             text-align: center;
        }
</style>

<!-- Copyright and Email -->
<r-cell span=4-6>&copy; {footer.copyDate} {footer.copyHolder} &lt;<a href={footer.copyEmail}>{footer.copyEmailLabel}</a>&gt;</r-cell>

<!-- Acknowledgements -->
<r-cell span=2-8>
        <code>({#each footer.acknowledgements as acknowledgement, index}
               ({#if acknowledgement.hasOwnProperty("tag")}{acknowledgement.tag},&nbsp;{/if}<a href={acknowledgement.url} alt={acknowledgement.alt} tabindex={index+1} target="_blank">{acknowledgement.label}</a>),{/each})</code>
</r-cell>