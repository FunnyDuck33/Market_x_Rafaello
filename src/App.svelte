<script>
    import { fade } from 'svelte/transition';
    import {getStorage, resetStorageIfNecessary, updateStorage} from './helpers/index.js';

    import './App.css';
    import Grid from './components/Grid/Grid.svelte';
    import Popup from './components/Popup/Popup.svelte';

    const PROMOCODE_TITLE_1 = 'Ваш сегодняшний подарок&nbsp;&mdash; промокод';
    const PROMOCODE_TITLE_2 = 'С&nbsp;наступающим! Ваш сегодняшний подарок&nbsp;&mdash; промокод';

    const popupContentArray = [
        {
            id: 1,
            title: PROMOCODE_TITLE_1,
            promocode: 'FERRERO10%,',
            text: `
                который дает скидку&nbsp;10% на&nbsp;покупку конфет в&nbsp;коробках от&nbsp;Ferrero Rocher, Raffaello или Collection.
                <br><br>
                Чтобы получить скидку, положите товар в&nbsp;корзину на&nbsp;Яндекс Маркете и&nbsp;введите промокод в&nbsp;специальное поле перед оплатой. Используйте промокод до&nbsp;8&nbsp;января.
            `
        },
        {
            id: 2,
            title: PROMOCODE_TITLE_2,
            promocode: 'FERRERO15%,',
            text: `
                который дает скидку&nbsp;15% на&nbsp;покупку конфет в&nbsp;коробках от&nbsp;Ferrero Rocher, Raffaello или Collection.
                <br><br>
                Чтобы получить скидку, положите товар в&nbsp;корзину на&nbsp;Яндекс Маркете и&nbsp;введите промокод в&nbsp;специальное поле перед оплатой. Используйте промокод до&nbsp;8&nbsp;января.
            `
        },
        {
            id: 3,
            title: PROMOCODE_TITLE_1,
            promocode: 'FERRERO50,',
            text: `
                который дает 50&nbsp;рублей скидки на&nbsp;покупку конфет от&nbsp;Ferrero Rocher, Raffaello или Ferrero Collection при условии покупки конфет Ferrero Rocher, Raffaello или Ferrero Collection на&nbsp;сумму от&nbsp;500&nbsp;рублей.
                <br><br>
                Чтобы получить скидку, положите товар в&nbsp;корзину на&nbsp;Яндекс Маркете и&nbsp;введите промокод в&nbsp;специальное поле перед оплатой. Используйте промокод до&nbsp;8&nbsp;января.
            `
        },
        {
            id: 4,
            title: PROMOCODE_TITLE_1,
            promocode: 'FERRERO100,',
            text: `
                который дает скидку 100 рублей скидки на&nbsp;покупку конфет от&nbsp;Ferrero Rocher, Raffaello или Ferrero Collection при условии покупки конфет Ferrero Rocher, Raffaello или Ferrero Collection на&nbsp;сумму от&nbsp;800&nbsp;рублей.
                <br><br>
                Чтобы получить скидку, положите товар в&nbsp;корзину на&nbsp;Яндекс Маркете и&nbsp;введите промокод в&nbsp;специальное поле перед оплатой. Используйте промокод до&nbsp;8&nbsp;января.
            `
        },
        {
            id: 5,
            title: PROMOCODE_TITLE_1,
            promocode: 'FERRERO200,',
            text: `
                который дает скидку 200 рублей скидки на&nbsp;покупку конфет от&nbsp;Ferrero Rocher, Raffaello или Ferrero Collection при условии покупки конфет Ferrero Rocher, Raffaello или Ferrero Collection на&nbsp;сумму от&nbsp;1500&nbsp;рублей.
                <br><br>
                Чтобы получить скидку, положите товар в&nbsp;корзину на&nbsp;Яндекс Маркете и&nbsp;введите промокод в&nbsp;специальное поле перед оплатой. Используйте промокод до&nbsp;8&nbsp;января.
            `
        },
        {
            id: 6,
            title: 'С наступающим!',
            text: 'Желаем сказки и&nbsp;исполнения желаний. Возвращайтесь завтра, чтобы испытать удачу и&nbsp;получить подарок от&nbsp;Ferrero Rocher и&nbsp;Raffaello.'
        },
        {
            id: 7,
            title: 'Сказочных праздников!',
            text: 'Проведите их&nbsp;так, чтобы они запомнились на&nbsp;весь год. Возвращайтесь завтра, чтобы испытать удачу и&nbsp;получить подарок от&nbsp;Ferrero Rocher и&nbsp;Raffaello.'
        },
        {
            id: 8,
            title: 'Хороших каникул!',
            text: 'Пусть исполнятся все желания, которые вы&nbsp;загадаете под бой курантов.Возвращайтесь завтра, чтобы испытать удачу и&nbsp;получить подарок от&nbsp;Ferrero Rocher и&nbsp;Raffaello.'
        },
        {
            id: 9,
            title: 'Удачи в новом году!',
            text: 'Пусть наступающий год станет началом чего-то прекрасного. Возвращайтесь завтра, чтобы испытать удачу и&nbsp;получить подарок от&nbsp;Ferrero Rocher и&nbsp;Raffaello.'
        },
        {
            id: 10,
            title: 'Счастливого нового года!',
            text: 'Желаем провести праздники в&nbsp;кругу самых близких и&nbsp;родных людей. Возвращайтесь завтра, чтобы испытать удачу и&nbsp;получить подарок от&nbsp;Ferrero Rocher и&nbsp;Raffaello.'
        },
        {
            id: 11,
            title: 'С Новым годом!',
            text: 'Пусть каждый месяц 2023 года будет ярким и&nbsp;незабываемым. Возвращайтесь завтра, чтобы испытать удачу и&nbsp;получить подарок от&nbsp;Ferrero Rocher и&nbsp;Raffaello.'
        },
        {
            id: 12,
            title: 'Удачного года!',
            text: 'Желаем хорошего настроения на&nbsp;ближайшие 365&nbsp;дней. Возвращайтесь завтра, чтобы испытать удачу и&nbsp;получить подарок от&nbsp;Ferrero Rocher и&nbsp;Raffaello.'
        },
        {
            id: 13,
            title: 'С праздниками!',
            text: 'Пусть желание, загаданное под бой курантов, точно исполнится. Возвращайтесь завтра, чтобы испытать удачу и&nbsp;получить подарок от&nbsp;Ferrero Rocher и&nbsp;Raffaello.'
        },
        {
            id: 14,
            title: 'Поздравляем с наступающим!',
            text: 'Желаем, чтобы новый год стал для вас особенным. Возвращайтесь завтра, чтобы испытать удачу и&nbsp;получить подарок от&nbsp;Ferrero Rocher и&nbsp;Raffaello.'
        }
    ];

    resetStorageIfNecessary();
    let {contentId, activeIndex} = getStorage();

    let shouldShowPopup = false;
    let popupContent;

    const togglePopup = () => {
        shouldShowPopup = !shouldShowPopup;

        if (shouldShowPopup) {
            if (contentId == null) {
                contentId = popupContentArray[Math.floor(Math.random() * popupContentArray.length)]?.id;
                updateStorage({contentId});
            }

            popupContent = popupContentArray.find(({id}) => id === contentId);
        }
    };
</script>

<Grid on:cardClick={togglePopup} activeIndex={activeIndex} />
{#if shouldShowPopup}
    <div transition:fade>
        <Popup on:click|once={togglePopup} {...popupContent} />
    </div>
{/if}
