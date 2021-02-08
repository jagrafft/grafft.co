<script>
        export let navbar;
</script>

<style>
        img {
            display: inline;
            width: 2.5%;
        }

        li {
           display: inline;
           padding: 1.5%;
        }

        li:hover {
                 color: var(--oc-gray-5);
                 cursor: pointer;
        }
        
        r-cell {
               text-align: center;
        }

        ul {
           font-size: 1.33em;
           list-style-type: none;
           margin: 0;
           padding: 0;
           text-align: center;
        }
</style>

<r-cell span=3-7>
<ul>{#each navbar.items as item, index}<li>{#if item.img}<img src={item.path} alt={item.alt} />{:else}<span>{item.label}</span>{/if}</li>{/each}</ul>
</r-cell>