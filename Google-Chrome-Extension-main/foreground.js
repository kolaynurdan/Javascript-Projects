const button = document.createElement('button');
button.innerText ="Scan Followers";
document.querySelector('header').appendChild(button);

function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

var namesFollow =[]
var namesFollower =[]
var FinalList =[]


async function followerFunc(){
    document.querySelector('a.-na13').click();
    button.remove();
    ht=1;
    last_ht=0;
    while(ht!=last_ht){
        last_ht=ht;
        await sleep(1000);
        document.querySelector('div.isgrP').scrollTo(0,document.querySelector('div.isgrP').scrollHeight);
        ht=document.querySelector('div.isgrP').scrollHeight;
        linksFollower = document.querySelectorAll('a.FPmhX.notranslate.0imsa');

    }
}
async function followFunc(){
    ht=1;
    last_ht = 0;
    while(ht!=last_ht){
        last_ht = ht;
        await sleep(1000);
        document.querySelector('div.isgrP').scrollTo(0,document.querySelector('div.isgrP').scrollHeight);
        ht=document.querySelector('div.isgrP').scrollHeight;
        linksFollow = document.querySelectorAll('a.FPmhX.notranslate.0imsa');
    }
}
button.addEventListener('click', async ()=>{
    await followerFunc();
    linksFollower.forEach(element =>{
        namesFollower.push(element.innerText);
    });
    document.querySelector("body > div.RnEpo.Yx5HN > div > div > div:nth-child(1) > div > div:nth-child(3) > button").click();
    await sleep(1000);
    document.querySelector("#react-root > section > main > div > header > section > ul > li:nth-child(3) > a").click();
    await sleep(1000);
    await followFunc();
    linksFollow.forEach(element => {
        namesFollow.push(element.innerText);
    });
    namesFollow.forEach(element=>{
        if(namesFollower.includes(element))return;
        FinalList.push(element);
    });
    document.querySelector("body > div.RnEpo.Yx5HN > div > div > div:nth-child(1) > div > div:nth-child(3) > button").click();
    await sleep(1000);

    const container = document.createElement('div');
    container.class="container";
    container.id = 'div';
    const h1 = document.createElement('h1');
    h1.innerText = "They don't follow you";
    h1.id="title";
    container.appendChild(h1);
    const list = document.createElement('ul');
    list.id = 'ul';
    container.appendChild(list);

    document.querySelector('header').appendChild(container);
    await sleep(1000);
    FinalList.forEach(element => {
        const li = document.createElement('li');
        li.innerText ='@'+element;
        li.id = 'li';
        list.appendChild(li);
    })

});
