const context = {
    title: 'Последние Уроки',
    titleEng: 'Latest Lessons',
    cards: [
        {
        date: '29.10.2020',
        image: 'https://abs.twimg.com/emoji/v2/svg/1f3a8.svg',
        name: 'smth else',
        description: 'Courtesy phrases',
        link3: '#',
        linkText3: 'Nothing yet'
        },
        {
        date: '20.10.2020',
        image: 'https://abs.twimg.com/emoji/v2/svg/1f44b.svg',
        name: 'Фразы вежливости',
        description: 'Courtesy phrases',
        link3: 'https://bit.ly/yev-lesson-1',
        linkText3: 'Presentation',
        },
    ]
};

const templateElement = document.getElementById("templateHB");

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById("lessons").innerHTML = compiledHtml;
  