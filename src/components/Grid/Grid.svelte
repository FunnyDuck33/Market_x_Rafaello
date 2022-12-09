<script>
    import { createEventDispatcher, onMount } from 'svelte';

    import {sleep, updateStorage} from '../../helpers/index.js';

    import Card from '../Card/Card.svelte';


    const numbers = Array.from({length: 14}, (_, i) => i + 1);
    const dispatch = createEventDispatcher();

    let activeCardIndex = -1;

    export let activeIndex;

    onMount(() => {
        if (activeIndex != null) {
            activateCard(activeIndex, 'mount');
        }
    });

    const activateCard = async (index, trigger = 'click') => {
        if (activeCardIndex === -1 || index === activeCardIndex) {
            if (activeCardIndex === -1) {
                activeCardIndex = index;
                updateStorage({activeIndex: activeCardIndex})

                await sleep(300);
            }

            if (trigger === 'click') {
                dispatch('cardClick');
            }
        }
    };
</script>

<div class="Grid">
    <div class="wrapper">
        {#each numbers as number, i}
            <Card
                    {number}
                    style={`grid-area: c${i + 1};`}
                    on:click={() => activateCard(i)}
                    isActive={i === activeCardIndex}
            ></Card>
        {/each}
    </div>
</div>

<style>
    .Grid {
        box-sizing: border-box;
        /*width: 1145px;*/
        /*height: 875px;*/
        width: 100vw;
        height: 100vh;
        padding: var(--border-width);
        border-radius: var(--border-radius);

        background: linear-gradient(135.32deg, #FFDD63 8.4%, rgba(252, 255, 101, 0.53125) 49.47%, #FFDE68 96.02%)
    }

    .wrapper {
        box-sizing: border-box;
        display: grid;
        width: 100%;
        height: 100%;

        grid-gap: 15px;
        grid-template-columns: repeat(11, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-template-areas: "c1 c1 c1 c1 c1 c2 c2 c3 c3 c4 c4"
                             "c5 c5 c6 c6 c6 c6 c6 c7 c7 c4 c4"
                             "c8 c8 c9 c9 c10 c10 c10 c10 c10 c11 c11"
                             "c8 c8 c12 c12 c13 c13 c14 c14 c14 c14 c14";

        padding: 15px;

        background: linear-gradient(301.22deg, #C48E35 -8.7%, #F9E26C 28.62%, #DCB85C 62.58%, #C38E35 115.72%);
        border-radius: calc(var(--border-radius) - var(--border-width));
    }

    @media (max-width: 700px) {
        .wrapper {
            grid-gap: 5px;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(4, 1fr);
            grid-template-areas: "c1 c2 c3 c4"
                                 "c5 c6 c7 c4"
                                 "c5 c8 c9 c10"
                                 "c11 c12 c13 c14";

            padding: 8px 14px;
        }
    }
</style>
