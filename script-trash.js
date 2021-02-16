function main()
{
    // <h1>d</h1>
    let bigBox = document.getElementById("big-box");

    let headDiv = ft_creatChild("div", "item", "sin", 1);
    ft_style_miniBox_headFooter(headDiv);
    bigBox.appendChild(headDiv);
    ft_creat_head_bar(headDiv);

    
    let bodyDiv = ft_creatChild("div", "item", "sin", 2);
    ft_style_miniBox_body(bodyDiv)
    bigBox.appendChild(bodyDiv);

    let footerDiv = ft_creatChild("div", "item", "sin", 3);
    ft_style_miniBox_headFooter(footerDiv);
    bigBox.appendChild(footerDiv);
    
    // const tst = document.getElementById(headDiv.id);
    // tst.style.backgroundColor = "#00000";
}

function ft_creat_head_bar(contener)
{
    let bigBox = document.getElementById(contener);
    for (let i = 1; i <= 4; i++)
    {
        let item = ft_creatChild("a", "item_bar", "bar", i);
        ft_style_head_bar(item);
        contener.appendChild(item);
    }
    document.querySelector("#item_bar1").innerHTML = "D";
    document.querySelector("#item_bar2").innerHTML = "works";
    document.querySelector("#item_bar3").innerHTML = "shop";
    document.querySelector("#item_bar4").innerHTML = "contact";
}


/*style*/ 
function ft_style_miniBox_headFooter(Div)
{
    Div.style.width = "100%";
    Div.style.height = "20%";
    Div.style.backgroundColor = "#EA4C89";
}

function ft_style_miniBox_body(Div)
{
    Div.style.width = "100%";
    Div.style.height = "60%";
    Div.style.backgroundColor = "#336699";
}

function ft_style_head_bar(element)
{
    element.style.backgroundColor = "#336699";
}

/*creat element*/
function ft_creatChild(type, nameId, nameClass, i)
{
    let div = document.createElement(type, i);
    div.id = nameId + i;
    div.className = nameClass;
    return div;
}

main();