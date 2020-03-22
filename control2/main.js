document.querySelector('.start').addEventListener('click', function(){
    document.querySelector('.forText').style.justifyContent = 'flex-start'
    document.querySelector('.start').style.boxShadow='0px 0px 15px 0px black';
    document.querySelector('.start').style.backgroundColor='lightgray'
    document.querySelector('.center').style.boxShadow='';
    document.querySelector('.center').style.backgroundColor=''
    document.querySelector('.end').style.boxShadow='';
    document.querySelector('.end').style.backgroundColor=''
})
document.querySelector('.center').addEventListener('click', function(){
    document.querySelector('.forText').style.justifyContent = 'center'
    document.querySelector('.start').style.boxShadow='';
    document.querySelector('.start').style.backgroundColor=''
    document.querySelector('.center').style.boxShadow='0px 0px 15px 0px black';
    document.querySelector('.center').style.backgroundColor='lightgray'
    document.querySelector('.end').style.boxShadow='';
    document.querySelector('.end').style.backgroundColor=''
})
document.querySelector('.end').addEventListener('click', function(){
    document.querySelector('.forText').style.justifyContent = 'flex-end'
    document.querySelector('.start').style.boxShadow='';
    document.querySelector('.start').style.backgroundColor=''
    document.querySelector('.center').style.boxShadow='';
    document.querySelector('.center').style.backgroundColor=''
    document.querySelector('.end').style.boxShadow='0px 0px 15px 0px black';
    document.querySelector('.end').style.backgroundColor='lightgray'
})
document.querySelector('.colr').addEventListener('click',function(){
    document.querySelector('.mod').style.display='flex'
    document.querySelector('.colr').style.boxShadow='0px 0px 15px 0px black';
    document.querySelector('.colr').style.backgroundColor='lightgray'
    document.querySelector('.modalFont').style.display = 'none'
    document.querySelector('.backA').style.boxShadow = '';
    document.querySelector('.backA').style.backgroundColor = '';
    aSize = true;
    document.querySelector('.pxMain').style.display = 'none'
    document.querySelector('.backT').style.boxShadow = '';
    document.querySelector('.backT').style.backgroundColor = '';
    tSize = true;
    for(let i = 0; i<document.querySelector('.main').children.length; i++){
        document.querySelector('.main').children[i].addEventListener('click', function(){
            document.querySelector('.textMain').style.color = getComputedStyle(this).backgroundColor
        })
    }
})
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.mod').style.display = 'none'
    document.querySelector('.colr').style.boxShadow='';
    document.querySelector('.colr').style.backgroundColor=''
})
document.querySelector('.unlock').addEventListener('click',function(){
    document.querySelector('.modEnd').style.display='flex'
    document.querySelector('.unlock').style.boxShadow='0px 0px 15px 0px black';
    document.querySelector('.unlock').style.backgroundColor='lightgray'
})
document.querySelector('.can').addEventListener('click',function(){
    document.querySelector('.modEnd').style.display='none'
    document.querySelector('.unlock').style.boxShadow='';
    document.querySelector('.unlock').style.backgroundColor=''
})
document.querySelector('.sinOut').addEventListener('click', function(){
    document.querySelector('.modEnd').style.display='none'
    document.querySelector('.lock').style.display = 'flex'
    document.querySelector('.unlock').style.display = 'none'
    document.querySelector('.lock').style.boxShadow= '' 
    document.querySelector('.lock').style.backgroundColor = ''
    document.getElementById('log').value = ''
    document.getElementById('pass').value = ''
    document.querySelector('.val0').style.display = 'none'
    document.querySelector('.valFalse').style.display = 'none'
    document.querySelector('.changePage').style.backgroundColor='lightgray'
    document.querySelector('.changePage').addEventListener('mouseover',function(){
        document.querySelector('.changePage').style.boxShadow='';
    }) 
    document.querySelector('.changePage').addEventListener('click',function(){
        document.querySelector('.headerOne').style.display='flex'
        document.querySelector('.second').style.display='none'
        document.querySelector('.text-area-block').style.display = 'none'
        document.querySelector('.textMain').style.display = 'block'
        document.querySelector('.text-area').value = document.querySelector('.textMain').innerHTML
    })   
    
})
document.querySelector('.lock').addEventListener('click',function(){
    document.querySelector('.mod4').style.display='flex'
    document.querySelector('.lock').style.boxShadow='0px 0px 15px 0px black';
    document.querySelector('.lock').style.backgroundColor='lightgray'
    document.querySelector('.modalFont').style.display = 'none'
    document.querySelector('.backA').style.boxShadow = '';
    document.querySelector('.backA').style.backgroundColor = '';
    aSize = true;
    document.querySelector('.pxMain').style.display = 'none'
    document.querySelector('.backT').style.boxShadow = '';
    document.querySelector('.backT').style.backgroundColor = '';
    tSize = true;
})
document.querySelector('.closeLock').addEventListener('click',function(){
    document.querySelector('.mod4').style.display='none'
    document.querySelector('.lock').style.boxShadow='';
    document.querySelector('.lock').style.backgroundColor=''
    document.querySelector('.val0').style.display = 'none'
    document.querySelector('.valFalse').style.display = 'none'
    document.getElementById('log').value = ''
    document.getElementById('pass').value = ''
})
document.querySelector('.sig').addEventListener('click', function(){
    if(document.getElementById('log').value == 'admin' && document.getElementById('pass').value == 1111){
        document.querySelector('.mod4').style.display='none'
        document.querySelector('.lock').style.display = 'none'
        document.querySelector('.unlock').style.display = 'flex'
        document.querySelector('.unlock').style.boxShadow='';
        document.querySelector('.unlock').style.backgroundColor=''
        document.querySelector('.changePage').style.backgroundColor='white'
        document.querySelector('.changePage').addEventListener('click',function(){
            document.querySelector('.headerOne').style.display='none'
            document.querySelector('.second').style.display='flex'
            document.querySelector('.text-area-block').style.display = 'block'
            document.querySelector('.textMain').style.display = 'none'
            document.querySelector('.text-area').value = document.querySelector('.textMain').innerHTML
        })
        document.querySelector('.changePage').addEventListener('mouseover',function(){
            document.querySelector('.changePage').style.boxShadow='0px 0px 15px 0px black';
        })    
        document.querySelector('.changePage').addEventListener('mouseout',function(){
            document.querySelector('.changePage').style.boxShadow='';
        })    
    }
    else if(document.getElementById('log').value == '' && document.getElementById('pass').value == ''){
        document.querySelector('.val0').style.display = 'block'
        document.querySelector('.valFalse').style.display = 'none'
    }
    else{
        document.querySelector('.valFalse').style.display = 'block'
        document.querySelector('.val0').style.display = 'none'
    }
})
document.querySelector('.secondSave').addEventListener('click',function(){
    document.querySelector('.second').style.display='none'
    document.querySelector('.headerOne').style.display='flex'
    document.querySelector('.text-area-block').style.display = 'none'
    document.querySelector('.textMain').style.display = 'block'
    document.querySelector('.textMain').innerHTML = document.querySelector('.text-area').value
})
document.querySelector('.secondSave').addEventListener('mouseover',function(){
    document.querySelector('.secondSave').style.boxShadow='0px 0px 15px 0px black';
})    
document.querySelector('.secondSave').addEventListener('mouseout',function(){
    document.querySelector('.secondSave').style.boxShadow='';
})  
let bol = true
document.querySelector('.bold').addEventListener('click',function(){
    if(bol){
        document.querySelector('.textMain').style.fontWeight='bold';
        document.querySelector('.bold').style.boxShadow='0px 0px 15px 0px black';
        document.querySelector('.bold').style.backgroundColor='lightgray'
        bol = false;
    }
    else{
        document.querySelector('.textMain').style.fontWeight='';
        document.querySelector('.bold').style.border='';
        document.querySelector('.bold').style.boxShadow='';
        document.querySelector('.bold').style.backgroundColor=''
        bol=true;
    }
})  
let ita = true;
document.querySelector('.italic').addEventListener('click',function(){
    if(ita){
        document.querySelector('.textMain').style.fontStyle='italic';
        document.querySelector('.italic').style.boxShadow='0px 0px 15px 0px black';
        document.querySelector('.italic').style.backgroundColor='lightgray'
        ita = false;
    }
    else{
        document.querySelector('.textMain').style.fontStyle='';
        document.querySelector('.italic').style.boxShadow='';
        document.querySelector('.italic').style.backgroundColor=''
        ita=true;
    }
})
let unde = true;
document.querySelector('.underlined').addEventListener('click',function(){
    if(unde){
        document.querySelector('.textMain').style.textDecoration='underline';
        document.querySelector('.underlined').style.boxShadow='0px 0px 15px 0px black';
        document.querySelector('.underlined').style.backgroundColor='lightgray'
        document.querySelector('.crossedOut').style.boxShadow='';
        document.querySelector('.crossedOut').style.backgroundColor=''
        unde = false;
        cros=true;
    }
    else{
        document.querySelector('.textMain').style.textDecoration='';
        document.querySelector('.underlined').style.boxShadow='';
        document.querySelector('.underlined').style.backgroundColor=''
        unde=true;
    }
})
let cros = true;
document.querySelector('.crossedOut').addEventListener('click',function(){
    if(cros){
        document.querySelector('.textMain').style.textDecoration='line-through';
        document.querySelector('.crossedOut').style.boxShadow='0px 0px 15px 0px black';
        document.querySelector('.crossedOut').style.backgroundColor='lightgray'
        document.querySelector('.underlined').style.boxShadow='';
        document.querySelector('.underlined').style.backgroundColor=''
        cros = false;
        unde=true;
    }
    else{
        document.querySelector('.textMain').style.textDecoration='';
        document.querySelector('.crossedOut').style.boxShadow='';
        document.querySelector('.crossedOut').style.backgroundColor=''
        cros=true;
    }
})
let tSize = true;
document.querySelector('.backT').addEventListener('click',function(){
    if(tSize){
        document.querySelector('.pxMain').style.display='block';
        document.querySelector('.backT').style.boxShadow='0px 0px 15px 0px black';
        document.querySelector('.backT').style.backgroundColor='lightgray'
        tSize = false;
        for(let i = 0; i<document.querySelector('.pxMain').children.length; i++){
            document.querySelector('.pxMain').children[i].addEventListener('click', function(){
                document.querySelector('.textMain').style.fontSize = getComputedStyle(this).fontSize
                document.querySelector('.pxMain').style.display = 'none';
                document.querySelector('.backT').style.boxShadow = '';
                document.querySelector('.backT').style.backgroundColor = '';
            })
        }
        document.querySelector('.modalFont').style.display = 'none';
        document.querySelector('.backA').style.boxShadow = '';
        document.querySelector('.backA').style.backgroundColor = '';
        aSize = true;
    }
    else{
        document.querySelector('.pxMain').style.display = 'none';
        document.querySelector('.backT').style.boxShadow = '';
        document.querySelector('.backT').style.backgroundColor = '';
        tSize = true;
    }
})
let aSize = true
document.querySelector('.backA').addEventListener('click',function(){
    if(aSize){
        document.querySelector('.modalFont').style.display='block';
        document.querySelector('.backA').style.boxShadow='0px 0px 15px 0px black';
        document.querySelector('.backA').style.backgroundColor='lightgray'
        aSize = false;
        for(let i = 0; i<document.querySelector('.modalFont').children.length; i++){
            document.querySelector('.modalFont').children[i].addEventListener('click', function(){
                document.querySelector('.textMain').style.fontFamily = getComputedStyle(this).fontFamily
                document.querySelector('.modalFont').style.display = 'none'
                document.querySelector('.backA').style.boxShadow = '';
                document.querySelector('.backA').style.backgroundColor = '';
                aSize = true;
            })
        }
        document.querySelector('.pxMain').style.display = 'none';
        document.querySelector('.backT').style.boxShadow = '';
        document.querySelector('.backT').style.backgroundColor = '';
        tSize = true;
    }
    else{
        document.querySelector('.modalFont').style.display = 'none';
        document.querySelector('.backA').style.boxShadow = '';
        document.querySelector('.backA').style.backgroundColor = '';
        aSize = true;
    }
})
document.querySelector('.secondTable').addEventListener('click', function(){
    document.querySelector('.modTable').style.display = 'flex'
    document.querySelector('.secondTable').style.boxShadow='0px 0px 15px 0px black';
    document.querySelector('.secondTable').style.backgroundColor='lightgray'
})
document.getElementsByClassName('tapReset')[0].addEventListener('click', function(){
    document.getElementById('colorBorder').value = '';
    document.getElementById('widthTD').value = '';
    document.getElementById('widthBorder').value = '';
    document.getElementById('typeBorder').value = '';
    document.getElementById('heightTD').value = '';
    document.getElementById('countTR').value = '';
    document.getElementById('countTD').value = '';
    document.getElementById('colorBorder').style.border = '1px solid lightgray';
    document.getElementById('widthTD').style.border = '1px solid lightgray';
    document.getElementById('widthBorder').style.border = '1px solid lightgray';
    document.getElementById('typeBorder').style.border = '1px solid lightgray';
    document.getElementById('heightTD').style.border = '1px solid lightgray';
    document.getElementById('countTR').style.border = '1px solid lightgray';
    document.getElementById('countTD').style.border = '1px solid lightgray';
    document.querySelector('.inv').style.display = 'none'
    document.querySelector('.in').style.display = 'none'
})
let td = ``,
tr = ``,
str = ``;
document.getElementsByClassName('createTable')[0].addEventListener('click', function(){
    let colorBorder = document.getElementById('colorBorder').value;
    let widthTD = document.getElementById('widthTD').value;
    let widthBorder = document.getElementById('widthBorder').value;
    let typeBorder = document.getElementById('typeBorder').value;
    let heightTD = document.getElementById('heightTD').value;
    if(colorBorder != '' && widthTD != '' && widthBorder != '' && typeBorder != '' && heightTD != '' && document.getElementById('countTD').value != '' && document.getElementById('countTR').value != ''){ 
        for(let i = 0; i<document.getElementById('countTR').value; i++){
            for(let i = 0; i<document.getElementById('countTD').value;i++){
                td += `<td style= 'width: ${widthTD}px; height: ${heightTD}px; border: ${widthBorder}px ${typeBorder} ${colorBorder}' >Item</td>`
            }   
            tr +=`<tr>${td}</tr>`
            td = ''
        }
        str = `<table>${tr}</table>`
        tr= ``
        document.forms[`f1`].area.value += str
        document.querySelector('.inv').style.display = 'none'
        document.querySelector('.in').style.display = 'none'
    }
    else{
        document.querySelector('.inv').style.display = 'block' 
        document.querySelector('.in').style.display = 'block' 
    }
       if(document.getElementById('countTR').value == ''){
           document.getElementById('countTR').style.border = '1px solid red'
       }
       else{
        document.getElementById('countTR').style.border = '1px solid lightgray'
       }
       if(document.getElementById('countTD').value == ''){
           document.getElementById('countTD').style.border = '1px solid red'
       }
       else{
        document.getElementById('countTD').style.border = '1px solid lightgray'
       }
       if(colorBorder == ''){
           document.getElementById('colorBorder').style.border = '1px solid red'
       }
       else{
        document.getElementById('colorBorder').style.border = '1px solid lightgray'
       }
       if(widthTD == ''){
           document.getElementById('widthTD').style.border = '1px solid red'
       }
       else{
        document.getElementById('widthTD').style.border = '1px solid lightgray'
       }
       if(widthBorder == ''){
           document.getElementById('widthBorder').style.border = '1px solid red'
       }
       else{
        document.getElementById('widthBorder').style.border = '1px solid lightgray'
       }
       if(typeBorder == ''){
           document.getElementById('typeBorder').style.border = '1px solid red'
       }
       else{
        document.getElementById('typeBorder').style.border = '1px solid lightgray'
       }
       if(heightTD == ''){
           document.getElementById('heightTD').style.border = '1px solid red'
       }
       else{
        document.getElementById('heightTD').style.border = '1px solid lightgray'
       }
})
document.querySelector('.closeTable').addEventListener('click', function(){
    document.querySelector('.modTable').style.display = 'none'
    document.querySelector('.secondTable').style.boxShadow='';
    document.querySelector('.secondTable').style.backgroundColor=''
})
document.querySelector('.secondOl').addEventListener('click',function(){
    document.querySelector('.mod44').style.display='flex'
    document.querySelector('.secondOl').style.boxShadow='0px 0px 15px 0px black';
    document.querySelector('.secondOl').style.backgroundColor='lightgray'
})
document.querySelector('.closeNum').addEventListener('click', function(){
    document.querySelector('.mod44').style.display='none'
    document.querySelector('.secondOl').style.boxShadow='';
    document.querySelector('.secondOl').style.backgroundColor=''
})
let ol = ``
let li1 =``
document.getElementsByClassName('createOL')[0].addEventListener('click', function(){
    let listMarks = document.getElementById('olSel').value;
    if(listMarks != '' && document.querySelector('#olSel1').value != ''){
        for(let i = 0; i<document.getElementsByClassName('olLi')[0].value; i++){
            li1 += '<li>www</li>'
        }
        ol = `<ol type = ${listMarks} style='list-style-position: inside'>${li1}</ol>`;
        document.forms[`f1`].area.value += ol
        li1=``
        document.querySelector('.inv1').style.display = 'none'
    }
    else{
        document.querySelector('.inv1').style.display = 'block'
    }
    if(document.getElementById('olSel').value == ''){
        document.getElementById('olSel').style.border = '1px solid red'
    }
    else{
     document.getElementById('olSel').style.border = '1px solid lightgray'
    }
    if(document.getElementById('olSel1').value == ''){
        document.getElementById('olSel1').style.border = '1px solid red'
    }
    else{
     document.getElementById('olSel1').style.border = '1px solid lightgray'
    }
})
document.querySelector('.rer1').addEventListener('click', function(){
    document.getElementById('olSel').value = '';
    document.getElementById('olSel').style.border = '1px solid lightgray';
    document.getElementById('olSel1').value = '';
    document.getElementById('olSel1').style.border = '1px solid lightgray';
    document.querySelector('.inv1').style.display = 'none'
})
document.querySelector('.secondUl').addEventListener('click',function(){
    document.querySelector('.mod55').style.display='flex'
    document.querySelector('.secondUl').style.boxShadow='0px 0px 15px 0px black';
    document.querySelector('.secondUl').style.backgroundColor='lightgray'
})
document.querySelector('.closeCir').addEventListener('click', function(){
    document.querySelector('.mod55').style.display='none'
    document.querySelector('.secondUl').style.boxShadow='';
    document.querySelector('.secondUl').style.backgroundColor=''
})
let ul = ``
let li2 =``
document.getElementsByClassName('createUL')[0].addEventListener('click', function(){
    let listMarks1 = document.getElementById('ulSel').value;
    if(listMarks1 != '' && document.querySelector('#ulSel1').value != ''){
        for(let i = 0; i<document.getElementsByClassName('ulLi')[0].value; i++){
            li2 += '<li>www</li>'
        }
        ul = `<ul style='list-style-type: ${listMarks1}; list-style-position: inside'>${li2}</ul>`;
        document.forms[`f1`].area.value += ul
        li2=``
        document.querySelector('.inv2').style.display = 'none'
    }
    else{
        document.querySelector('.inv2').style.display = 'block'
    }
    if(document.getElementById('ulSel').value == ''){
        document.getElementById('ulSel').style.border = '1px solid red'
    }
    else{
     document.getElementById('ulSel').style.border = '1px solid lightgray'
    }
    if(document.getElementById('ulSel1').value == ''){
        document.getElementById('ulSel1').style.border = '1px solid red'
    }
    else{
     document.getElementById('ulSel1').style.border = '1px solid lightgray'
    }
})
document.querySelector('.rer2').addEventListener('click', function(){
    document.getElementById('ulSel').value = '';
    document.getElementById('ulSel').style.border = '1px solid lightgray';
    document.getElementById('ulSel1').value = '';
    document.getElementById('ulSel1').style.border = '1px solid lightgray';
    document.querySelector('.inv2').style.display = 'none'
})
//
document.querySelector('.backAll').addEventListener('click',function(){
    document.querySelector('.mod3').style.display='flex'
    document.querySelector('.backAll').style.boxShadow='0px 0px 15px 0px black';
    document.querySelector('.backAll').style.backgroundColor='lightgray'
    document.querySelector('.modalFont').style.display = 'none'
    document.querySelector('.backA').style.boxShadow = '';
    document.querySelector('.backA').style.backgroundColor = '';
    aSize = true;
    document.querySelector('.pxMain').style.display = 'none'
    document.querySelector('.backT').style.boxShadow = '';
    document.querySelector('.backT').style.backgroundColor = '';
    tSize = true;
})
document.querySelector('.closeBack').addEventListener('click', function(){
    document.querySelector('.mod3').style.display='none'
    document.querySelector('.backAll').style.boxShadow='';
    document.querySelector('.backAll').style.backgroundColor=''
})

document.querySelector('.img01').addEventListener('click', function(){
    document.querySelector('.main1').style.display = 'none'
    document.querySelector('.ww').style.display = 'flex'
    document.querySelector('.rear').style.display = 'none'
    document.querySelector('.img01').style.border = '1px solid lightgrey'
    document.querySelector('.img01').style.color = 'gray'
    document.querySelector('.col01').style.border = 'none'
    document.querySelector('.col01').style.color = 'rgb(0, 195, 255)'
    document.querySelector('.fil01').style.border = 'none'
    document.querySelector('.fil01').style.color = 'rgb(0, 195, 255)'
})
document.querySelector('.col01').addEventListener('click', function(){
    document.querySelector('.main1').style.display = 'flex'
    document.querySelector('.ww').style.display = 'none'
    document.querySelector('.rear').style.display = 'none'
    document.querySelector('.img01').style.border = 'none'
    document.querySelector('.img01').style.color = 'rgb(0, 195, 255)'
    document.querySelector('.col01').style.border = '1px solid lightgrey'
    document.querySelector('.col01').style.color = 'gray'
    document.querySelector('.fil01').style.border = 'none'
    document.querySelector('.fil01').style.color = 'rgb(0, 195, 255)'
})
document.querySelector('.fil01').addEventListener('click', function(){
    document.querySelector('.main1').style.display = 'none'
    document.querySelector('.ww').style.display = 'none'
    document.querySelector('.rear').style.display = 'block'
    document.querySelector('.img01').style.border = 'none'
    document.querySelector('.img01').style.color = 'rgb(0, 195, 255)'
    document.querySelector('.fil01').style.border = '1px solid lightgrey'
    document.querySelector('.fil01').style.color = 'gray'
    document.querySelector('.col01').style.border = 'none'
    document.querySelector('.col01').style.color = 'rgb(0, 195, 255)'
})
for(let i = 0; i<document.querySelector('.main1').children.length; i++){
    document.querySelector('.main1').children[i].addEventListener('click', function(){
        document.querySelector('body').style.background = getComputedStyle(this).backgroundColor
    })
}
for(let i = 0; i<document.querySelector('.ww').children.length; i++){
    document.querySelector('.ww').children[i].addEventListener('click', function(){
        document.querySelector('body').style.background = getComputedStyle(this).backgroundImage
    })
}
document.querySelector('.cla').addEventListener('change', function(){
    let url = URL.createObjectURL(this.files[0]);
    document.body.style.background = `url(${url})`;
})