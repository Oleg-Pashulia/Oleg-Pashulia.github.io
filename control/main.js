document.querySelector('.edit').addEventListener('click', function(){
    document.querySelector('.text-area-block').style.display = 'block'
    document.querySelector('.text-area').value = document.querySelector('.block').innerHTML
    document.querySelector('.save').style.display = 'block'
    document.querySelector('.add').style.display = 'block'
    document.querySelector('.add-save').style.display = 'flex'
    document.querySelector('.font-color').style.display = 'none'
})

document.querySelector('.save').addEventListener('click', function(){
    document.querySelector('.block').innerHTML = document.querySelector('.text-area').value   
    document.querySelector('.text-area-block').style.display = 'none'
    document.querySelector('.save').style.display = 'none'
    document.querySelector('.add').style.display = 'none'

})

document.querySelector('.add').addEventListener('click', function(){
    document.querySelector('.block').style.display = 'none'
    document.querySelector('.box2').style.display = 'none'
    document.querySelector('.text-area-block').style.display = 'none'
    document.querySelector('.add-save').style.display = 'none'
    document.querySelector('.block1').style.display = 'none'
    document.querySelector('.after-add').style.display = 'block'
})

document.querySelector('.style').addEventListener('click', function(){
    document.querySelector('.text-area-block').style.display = 'none'
    document.querySelector('.add-save').style.display = 'none'
    document.querySelector('.font-color').style.display = 'block'
})
let f3 = document.forms['f3']

for(let i = 0; i<f3.elements.length; i++){
    f3.elements[i].addEventListener('click', function(){
        if(f3.elements[i].name == 'tr'){
            document.querySelector('.block').style.fontSize = this.value
        }
        if(f3.elements[i].name == 'fonts'){
            document.querySelector('.block').style.fontFamily = this.value
        }
        if(f3.elements[i].name == 'text1'){
            if(f3.elements[i].checked == true){
            document.querySelector('.block').style.fontWeight = this.value
            }
            else if(f3.elements[i].checked == false){
                document.querySelector('.block').style.fontWeight = 'normal'
            }
        }
        if(f3.elements[i].name == 'text2'){
            if(f3.elements[i].checked == true){
            document.querySelector('.block').style.fontStyle = this.value
            }
            else if(f3.elements[i].checked == false){
                document.querySelector('.block').style.fontStyle = 'normal'
            }
        }
    })   
}

let td = ``,
tr = ``,
str = ``;
document.getElementsByClassName('table')[0].addEventListener('click', function(){
    let colo = document.getElementById('we1').value;
    let wid = document.getElementById('wid').value;
    let hei = document.getElementById('hei').value;
    let typeBorder = document.getElementById('typeBorder').value;
    let widBorder = document.getElementById('widBorder').value;
   for(let i = 0;i<document.getElementsByName('trr')[0].value;i++){
    for(let i = 0; i<document.getElementsByName('tdd')[0].value;i++){
        td += `<td style= 'width: ${wid}px; height: ${hei}px; border: ${widBorder}px ${typeBorder} ${colo}' >Item</td>`
    }   
    tr +=`<tr>${td}</tr>`
    td = ''
   }
    str = `<table>${tr}</table>`
    tr= ``
    console.log(document.getElementsByName('trr')[0].value)
    document.forms[`f2`].area.value += str
    document.getElementById('tab').checked = false
    document.querySelector('.block').style.display = 'block'
    document.querySelector('.box2').style.display = 'flex'
    document.querySelector('.text-area-block').style.display = 'block'
    document.querySelector('.block1').style.display = 'block'
    document.querySelector('.after-add').style.display = 'none'
    document.querySelector('.add-save').style.display = 'flex'
    document.querySelector('.table1').style.display = 'none'
    document.querySelector('.list1').style.display = 'none'
    document.querySelector('#wid').value = ''
    document.querySelector('#hei').value = ''
    document.querySelector('#trr').value = ''
    document.querySelector('#tdd').value = ''
    document.querySelector('#widBorder').value = ''
    document.querySelector('#typeBorder').value = 'solid'
})

let ul = ``
let li =``
document.getElementsByClassName('createList')[0].addEventListener('click', function(){
    console.log(this)
    // console.log(document.getElementsByName('countLI')[0].value)
        let listMarks = document.getElementById('we2').value;
    for(let i = 0; i<document.getElementsByName('countLI')[0].value;i++){
        li += '<li>www</li>'
    }
    ul = `<ul style='list-style-type: ${listMarks}'>${li}</ul>`;
    document.forms[`f2`].area.value += ul
    li=``
    document.getElementById('lis').checked = false
    document.querySelector('.block').style.display = 'block'
    document.querySelector('.box2').style.display = 'flex'
    document.querySelector('.text-area-block').style.display = 'block'
    document.querySelector('.block1').style.display = 'block'
    document.querySelector('.after-add').style.display = 'none'
    document.querySelector('.add-save').style.display = 'flex'
    document.querySelector('.table1').style.display = 'none'
    document.querySelector('.list1').style.display = 'none'
    document.querySelector('#countLi').value = ''
    document.querySelector('#we2').value = 'circle'
})



// document.getElementsByName('table').addEventListener('click', function(){
//     document.querySelector('.table1').style.display = 'block'
// })
document.querySelector('#tab').addEventListener('change', function(){
    if(document.getElementById('tab').checked){
        document.querySelector('.table1').style.display = 'block'
        document.querySelector('.list1').style.display = 'none'
        
    }
    
})
document.querySelector('#lis').addEventListener('change', function(){
    if(document.getElementById('lis').checked){
        document.querySelector('.list1').style.display = 'block'
        document.querySelector('.table1').style.display = 'none'
    } 
})

document.querySelector('.textColor').addEventListener('click', function(){
    document.querySelector('.main').style.display = 'flex'
    for(let i = 0; i<document.querySelector('.main').children.length; i++){
        document.querySelector('.main').children[i].addEventListener('click', function(){
            document.querySelector('.block').style.color = getComputedStyle(this).backgroundColor
            document.querySelector('.main').style.display = 'none'
            document.querySelector('.main1').style.display = 'none'
        })
    }
})

document.querySelector('.backColor').addEventListener('click', function(){
    document.querySelector('.main1').style.display = 'flex'
    for(let i = 0; i<document.querySelector('.main').children.length; i++){
        document.querySelector('.main1').children[i].addEventListener('click', function(){
            document.querySelector('.block').style.backgroundColor = getComputedStyle(this).backgroundColor
            document.querySelector('.main1').style.display = 'none'
            document.querySelector('.main').style.display = 'none'
        })
    }
})

