let data = ["1", "name image", "year"];

function main()
{
  var data = {
    name: ["the lake", "look", "tower", "throne"],
    year: ["2020", "2020", "2020", "2020"],
    path: ['./resources/pictures/pic']
    };

    // <h1>d</h1>
  let bigBox = document.getElementById("contener");
  for (let i = 0; i < 4; i++) {
    let element = ft_creatChild("div", "Div", "group-divs", i);
    bigBox.appendChild(element);
    /*add pic*/
    let Div = document.getElementById("Div" + i);
    let img = document.createElement("img");
    img.className = "group-imgs";
    img.src = ft_name_pic(data.path, i + 1); 
    // img.style.height = "100px"
    Div.appendChild(img);
    /*add div comment*/
    let Dcomment = ft_creatChild("div", "div_comment", "group-comment", i);
    Div.appendChild(Dcomment);
    /*add comment*/
    let name = ft_creatChild("p", "name", "group-comment", i);
    Div.appendChild(name);
    document.getElementById("name" + i).textContent += data.name[i];
    let year = ft_creatChild("p", "year", "group-comment", i);
    Div.appendChild(year);
    document.getElementById("year" + i).textContent += data.year[i];
  }
  scrollDivs();
}

function ft_name_pic(path, nb)
{
  path = "./resources/pictures/pic-" + nb + ".JPG"
  return path;
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
    let div = document.createElement(type);
    div.id = nameId + i;
    div.className = nameClass;
    return div;
}

main();