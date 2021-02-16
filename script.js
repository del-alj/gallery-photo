let data = ["1", "name image", "year"];

function main()
{
    // <h1>d</h1>
    let bigBox = document.getElementById("contener");
    for (let i = 0; i < 10; i++)
    {
        let element = ft_creatChild("div", "Div", "group-divs", 1);
        ft_style_Div(element);
        bigBox.appendChild(element);
        // ft_creatChaildsOfChaild(element, data);
    }
    scrollDivs();
}

function ft_style_Div(element)
{
    // element.style.width = "200px";
    // element.style.height = "100px";
    // element.style.backgroundColor = randomColor();
}

function randomColor()
{
    const color = "#" + Math.floor(Math.random()*16777215).toString(16);
    return color;
}

function scrollDivs()
{
    const slider = document.querySelector('#contener');
    let isDown = false;
    let startx;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
    
      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
      });
    
      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
      });
    
      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;  // stop the fn from running
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3;
        slider.scrollLeft = scrollLeft - walk;
      });
}

/*creat element*/
function ft_creatChild(type, nameId, nameClass, i)
{
    let div = document.createElement(type, i);
    div.id = nameId + i;
    div.className = nameClass;
    return div;
}

function ft_creatChaildsOfChaild(parent, data)
{
    // let child = document.getElementById(parent);
    //     // let element1 = ft_creatChild("img", "Imag", "group-imags", 1);
    //     // ft_style_Image/(element1);
    //     // child.appendChild(element1);

    //     let ul = ft_creatChild("ul", "Ul", "group-ul", 1);
    //     child.appendChild(ul);
    //     // ul.style.backgroundColor = "#000000";
    //     for (let i = 0; i < 3; i++) {
    //       let el = data[i];
          
    //       let listItem =  ft_creatChild("li", "Li", "group-li", i);
    //       // listItem.textContent = el;
    //       // listItem.style.alignContent.color = "#fefefe";
    //       ul.appendChild(listItem);

        // }
        let element = ft_creatChild("div", "Div", "group-divs", 1);
        // ft_style_Div(element);
        bigBox.appendChild(element);
        ft_creatChaildsOfChaild(element, data);
}

main();