<script>
    import imageSrc from './assets/image.png';
    import imageMobileSrc from './assets/image-mobile.png';
    import closeSrc from './assets/close.svg';
    import closeMobileSrc from './assets/close-mobile.svg';

    import {isMobile} from "../../helpers";

    export let title;
    export let promocode;
    export let text;

    $: className = `Popup Popup_withPromocode_${!!promocode}`;
</script>

<div class="shadow" on:click>
    <div class={className} on:click|stopPropagation={() => {}}>
        <div class="outerBorder">
            <div class="outer">
                <div class="contentBorder">
                    <div class="contentWrapper">
                        <div class="content">
                            <div class="title">{@html title}</div>
                            {#if promocode}
                                <div class="promocode">{promocode}</div>
                            {/if}
                            <div class="text">{@html text}</div>
                            <img class="image" src="{isMobile() ? imageMobileSrc : imageSrc}" alt="подарки">
                        </div>
                        <div class="background"></div>
                        <img class="close" src={isMobile() ? closeMobileSrc : closeSrc} alt="закрыть" on:click>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .Popup {
        position: absolute;
        overflow: hidden;
        box-sizing: border-box;
        width: 700px;

        animation-duration: .5s;
        animation-fill-mode: forwards;

        transition: box-shadow .5s, opacity .2s;
        border-radius: 20px;
        cursor: default;
        font-family: "YandexSans";
        color: white;
    }

    .Popup * {
        box-sizing: border-box;
    }

    .shadow {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;

        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

        background-color: rgba(93, 47, 34, 0.6);
        cursor: pointer;
    }

    .outerBorder {
        width: 100%;
        height: 100%;
        padding: 10px;

        background: linear-gradient(-258.53deg, #c08e43 1.96%, #f0c452 48.29%, #c08e43 99.72%);
        border-radius: 20px;
    }

    .outer {
        width: 100%;
        height: 100%;
        padding: 10px;

        background: linear-gradient(136.96deg, #F70000 -9.98%, #A50000 29.83%, #BD0000 72.07%, #F70000 103.13%);
        border-radius: 10px;
    }

    .contentBorder {
        width: 100%;
        height: 100%;
        padding: 2px;

        border-radius: 10px;
        background: linear-gradient(-258.53deg, #c08e43 1.96%, #f0c452 48.29%, #c08e43 99.72%);
    }

    .contentWrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;
        padding: 21px 0 4px;

        background: linear-gradient(136.96deg, #F70000 -9.98%, #A50000 29.83%, #BD0000 72.07%, #F70000 103.13%);
        border-radius: 8px;
    }

    .content {
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .background {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 300px;
        height: 170px;
        background-color: #FF912C;
        filter: blur(70px);
    }

    .close {
        z-index: 2;
        position: absolute;
        top: 12px;
        right: 12px;

        cursor: pointer;
    }

    .title {
        font-size: 20px;
        line-height: 110%;
        color: #FFE688;
    }

    .promocode {
        margin-top: 5px;

        font-weight: 700;
        font-size: 40px;
        line-height: 110%;
    }

    .text {
        margin: 10px 80px 20px;

        font-size: 18px;
        line-height: 110%;
    }

    .image {
        width: 480px;
    }

    @media (max-width: 700px) {
        .Popup {
            width: 100vw;
            height: auto;
        }

        .Popup_withPromocode_true {
            height: 100vw;
        }

        .Popup_withPromocode_true .contentWrapper {
            /*padding: 8px 7px 1px;*/
            padding: 2.13vw 1.86vw 0.26vw;
        }

        .Popup_withPromocode_true .title {
            /*font-size: 16px;*/
            font-size: 4.26vw;
        }

        .Popup_withPromocode_true .text {
            /*margin: 16px 0 0;*/
            /*font-size: 14px;*/
            margin: 4.26vw 0 0;
            font-size: 3.73vw;
        }

        .Popup_withPromocode_true .image {
            /*width: 225px;*/
            width: 60vw;
        }

        .outer {
            /*padding: 6px;*/
            padding: 1.6vw;
        }

        .contentWrapper {
            /*padding: 14px 7px 1px;*/
            padding: 3.73vw 1.86vw 0.26vw;
        }

        .content {
            width: 100%;
            height: 100%;
        }

        .title {
            text-align: center;
            /*font-size: 20px;*/
            font-size: 5.33vw;
        }

        .text {
            flex-grow: 1;
            /*margin: 22px 0 0;*/
            /*font-size: 16px;*/
            margin: 5.86vw 0 0;
            font-size: 4.26vw;
        }

        .promocode {
            /*margin-top: 8px;*/
            /*font-size: 25px;*/
            margin-top: 2.13vw;
            font-size: 6.66vw;
        }

        .image {
            width: 100%;
        }

        .close {
            top: -18px;
            right: -18px;

            cursor: pointer;
        }
    }
</style>
