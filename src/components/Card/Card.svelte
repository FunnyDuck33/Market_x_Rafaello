<script>
    import InlineSVG from 'svelte-inline-svg';

    import topSvg from './assets/number-top.svg';
    import bottomSvg from './assets/number-bottom.svg';

    export let number;
    export let style;
    export let isActive;

    $: className = `Card Card_active_${isActive}`;
</script>

<div class={className} {style} on:click>
    <div class="defaultWrapper">
        <div class="outerBorder">
            <div class="outer"></div>
        </div>
        <div class="contentBorder">
            <div class="content">
                <div class="numberWrapper">
                    <InlineSVG src={topSvg} class='numberTopSvg' focusable="false" tabindex="-1" />
                    <div class="number">{number}</div>
                    <InlineSVG src={bottomSvg} class="numberBottomSvg" focusable="false" tabindex="-1" />
                </div>
            </div>
        </div>
    </div>

    <div class="activeWrapper">
        <div class="outerBorder">
            <div class="outer"></div>
        </div>
        <div class="contentBorder">
            <div class="content">
                <div class="numberWrapper">
                    <InlineSVG src={topSvg} class="numberTopSvg" focusable="false" tabindex="-1" />
                    <div class="number">{number}</div>
                    <InlineSVG src={bottomSvg} class="numberBottomSvg" focusable="false" tabindex="-1" />
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .Card {
        position: relative;
        overflow: hidden;

        user-select: none;
        transition: box-shadow .5s, opacity .2s;
        cursor: pointer;
        border-radius: var(--border-radius);
    }

    .Card:hover {
        box-shadow: 0px 0px 50px #610000;
    }

    .Card:active {
        opacity: .8;
    }

    .Card_active_false .activeWrapper {
        opacity: 0;
    }

    .Card * {
        box-sizing: border-box;
    }

    .activeWrapper,
    .defaultWrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        transition: opacity .5s;
    }

    .outerBorder {
        width: 100%;
        height: 100%;
        padding: var(--border-width);

        background: linear-gradient(-258.53deg, #c08e43 1.96%, #f0c452 48.29%, #c08e43 99.72%);
        border-radius: var(--border-radius);
    }

    .outer {
        width: 100%;
        height: 100%;
        padding: 9px;

        background: linear-gradient(-244.7deg, #c5913a 9.96%, #f9db6c 34.45%, #f3e497 56.73%, #c7994b 91.59%);
        border-radius: calc(var(--border-radius) - var(--border-width));
    }

    .contentBorder {
        position: absolute;
        left: 50%;
        top: 50%;
        width: calc(100% - 16px);
        height: calc(100% - 16px);
        padding: var(--border-width);

        transform: translate(-50%, -50%);

        border-radius: calc(var(--border-radius) - var(--border-width));
        background: linear-gradient(-258.53deg, #c08e43 1.96%, #f0c452 48.29%, #c08e43 99.72%);
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;
        padding: 9px;

        background: linear-gradient(-246.11deg, #c5913a 1.93%, #f9db6c 30.08%, #f3e497 55.69%, #c7994b 95.76%);
        border-radius: calc(var(--border-radius) - var(--border-width));
    }

    .numberWrapper {
        position: relative;
    }

    .number {
        /* Фикс артефактов в safari */
        transform: translate3d(0px, 0px, 0px);

        font-size: 101px;
        line-height: 117px;
        /*font-size: 8.82vw;*/
        /*line-height: 10.21vw;*/
        font-family: YesevaOne, serif;
        color: rgba(63, 0, 0, 0.5);
    }

    :global(.numberTopSvg),
    :global(.numberBottomSvg) {
        position: absolute;
        display: block;
        left: 50%;
        width: 75px;
        /*width: 6.55vw;*/
        outline: 0;

        transform: translateX(-50%);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    :global(.numberTopSvg) {
        top: -10px;
    }

    :global(.numberBottomSvg) {
        bottom: -10px;
    }

    :global(.activeWrapper .strokePath) {
        stroke: #FFE688;
        stroke-opacity: 1;
    }

    :global(.activeWrapper .fillPath) {
        fill: #FFE688;
        fill-opacity: 1;
    }

    .activeWrapper .content {
        background: linear-gradient(-253.99deg, #A20006 2.35%, #DC292E 31.9%, #FE464B 58.79%, #A10006 98.9%);
    }

    .activeWrapper .outer {
        background: linear-gradient(-253.99deg, #A20006 2.35%, #DC292E 31.9%, #FE464B 58.79%, #A10006 98.9%);
    }

    .activeWrapper .outerBorder {
        padding: 5px;
    }

    .activeWrapper .contentBorder {
        width: calc(100% - 20px);
        height: calc(100% - 20px);
    }

    .activeWrapper .number {
        background: linear-gradient(-167.41deg, #E1AE59 16.98%, #FFE688 37.12%, #FFF3B4 55.45%, #DCAC5B 84.13%);
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }

    .numberWrapper {
        background-origin: content-box;
    }

    @media (max-width: 700px) {
        .contentBorder {

            width: calc(100% - 6px);
            height: calc(100% - 6px);
        }

        .content {
            border-radius: 3px;
        }

        .number {
            font-size: 10vw;
            line-height: 110%;
        }

        :global(.numberTopSvg),
        :global(.numberBottomSvg) {
            /*width: 34px;*/
            width: 9.04vw;
        }

        :global(.numberTopSvg) {
            top: -15px;
        }

        :global(.numberBottomSvg) {
            bottom: -15px;
        }
    }
</style>
