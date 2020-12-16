let container = document.createElement('div');container.setAttribute('class','container');
let main = document.createElement('main');
let section = document.createElement('section');

/*section 1 CODE*/
    let section1 = document.createElement('div');section1.setAttribute('class','section1');
    let card = document.createElement('div');card.setAttribute('class','card');
    let i = document.createElement('i');i.setAttribute('class','fas fa-user');
    let h3 = document.createElement('h3');h3.innerText = 'Profile';
    let p = document.createElement('p');p.setAttribute('class','para');
    p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime aut id tempore ipsum perferendis impedit error corrupti blanditiis magnam!.';
    card.append(i,h3,p);
    section1.append(card);

    card = document.createElement('div');card.setAttribute('class','card');
    i = document.createElement('i');i.setAttribute('class','fas fa-flask');
    h3 = document.createElement('h3');h3.innerText = 'Skills';
    let ul = document.createElement('ul');
    let li = document.createElement('li');li.setAttribute('class','list java'); li.innerText = 'Python';
    ul.append(li);
    li = document.createElement('li');li.setAttribute('class','list html'); li.innerText = 'HTML';
    ul.append(li);
    li = document.createElement('li');li.setAttribute('class','list css'); li.innerText = 'CSS';
    ul.append(li);
    li = document.createElement('li');li.setAttribute('class','list js'); li.innerText = 'JavaScript';
    ul.append(li);
    card.append(i,h3,ul);
    section1.append(card);


    card = document.createElement('div');card.setAttribute('class','card');
    i = document.createElement('i');i.setAttribute('class','fas fa-briefcase');
    h3 = document.createElement('h3');h3.innerText = 'Work Experience';
    let br = document.createElement('br');
    let h4 = document.createElement('h4');h4.innerText = 'Work Designation';
    p = document.createElement('p'); p.setAttribute('class','date');p.innerText='05/2018 - 09/2020';
    let clear = document.createElement('div'); clear.setAttribute('style','clear: both;');
    ul = document.createElement('ul');ul.setAttribute('class','expUL');
    li = document.createElement('li');li.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime aut id tempore ipsum perferendis impedit error corrupti blanditiis magnam!';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime aut id tempore ipsum perferendis impedit error corrupti blanditiis magnam!';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime aut id tempore ipsum perferendis impedit error corrupti blanditiis magnam!';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime aut id tempore ipsum perferendis impedit error corrupti blanditiis magnam!';
    ul.append(li);
    card.append(i,h3,br,h4,p,clear,ul);
    section1.append(card);

/*section 2 CODE*/
    let section2 = document.createElement('div');section2.setAttribute('class','section2');
    card = document.createElement('div');card.setAttribute('class','card');
    i = document.createElement('i');i.setAttribute('class','fas fa-briefcase');
    h3 = document.createElement('h3');h3.innerText = 'Work Experience';
    br = document.createElement('br');
    h4 = document.createElement('h4');h4.innerText = 'Work Designation';
    p = document.createElement('p'); p.setAttribute('class','date');p.innerText='2017 - 2020';
    clear = document.createElement('div'); clear.setAttribute('style','clear: both;');
    ul = document.createElement('ul');ul.setAttribute('class','expUL');
    li = document.createElement('li');li.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime aut id tempore ipsum perferendis impedit error corrupti blanditiis magnam!';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime aut id tempore ipsum perferendis impedit error corrupti blanditiis magnam!';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime aut id tempore ipsum perferendis impedit error corrupti blanditiis magnam!';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime aut id tempore ipsum perferendis impedit error ';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime aut id tempore ipsum perferendis impedit error corrupti blanditiis magnam!';
    ul.append(li);
    card.append(i,h3,br,h4,p,clear,ul);
    section2.append(card);



    card = document.createElement('div');card.setAttribute('class','card');
    i = document.createElement('i');i.setAttribute('class','fas fa-graduation-cap');
    h3 = document.createElement('h3');h3.innerText = 'Education';
    br = document.createElement('br');
    clear = document.createElement('div'); clear.setAttribute('style','clear: both;');
    ul = document.createElement('ul');ul.setAttribute('class','expUL');
    li = document.createElement('li');li.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime aut id tempore ipsum perferendis impedit error corrupti blanditiis magnam!';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime aut id tempore ipsum perferendis impedit error corrupti blanditiis magnam!';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime aut id tempore ipsum perferendis impedit error corrupti blanditiis magnam!';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime aut id tempore ipsum perferendis impedit error ';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime aut id tempore ipsum perferendis impedit error corrupti blanditiis magnam!';
    ul.append(li);
    card.append(i,h3,br,h4,p,clear,ul);
    section2.append(card);


/*header*/
    let header = document.createElement('header');
    let header1 = document.createElement('div'); header1.setAttribute('class','header1');
    let img = document.createElement('img'); 
    img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabw0bV39dO0NRh0h-BCmfYhVktRgGIKieww&usqp=CAU');
    img.setAttribute('alt','Profile Picture');
    img.setAttribute('class','logo');
    img.setAttribute('width','192px');
    img.setAttribute('height','200px');
    header1.append(img);

    let header2 = document.createElement('div'); header2.setAttribute('class','header2');
    let h2 = document.createElement('h2'); h2.innerText = 'Robert C.Martin';
    header2.append(h2);

    let header3 = document.createElement('div'); header3.setAttribute('class','header3');

    let header4 = document.createElement('div'); header4.setAttribute('class','header4');
    p = document.createElement('p');p.innerText = 'American software engineer | +91-8999 **** ** | best-selling author.';
    header4.append(p);
    header.append(header1,header2,header3,header4);

    
section.append(section1, section2);
main.append(section);
container.append(header, main);
document.body.append(container);