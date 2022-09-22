// // let butn = document.getElementById("btn")
// // butn.addEventListener("click" , ()=>{
// //     butn.style.backgroundColor = "red"
// //     console.log("clicked")
// // })

// // let tm =document.getElementById("time")
// // function timeout(){
// //     if(tm.innerHTML != 0){
// //         tm.innerHTML -=1;
// //     }
// // }
// // let coumter = setInterval(timeout , 1000);

// // let n1 = [10,30,10,20];
// // let n2 = [30,20,10];

// // console.log([...n1 , ...n2].length*Math.max(...(new Set(n1))))

// // let re = /(\w|http?)+(\w)+.+(org)$/ig

// // let url1 = "elzero.org"
// // let url2 = "http:elzero.org"
// // let url3 = "https:elzero.org"

// // console.log(url1.match(re))
// // console.log(url2.match(re))
// // console.log(url3.match(re))

// // let date = new Date()
// // document.write(`the date today is ${date.getDate()}/${date.getUTCMonth() + 1}/${date.getFullYear()}`)

let tarea = document.getElementById("codes")
let remove = document.getElementById("remove")
let play = document.getElementById("play")
let result = document.getElementById("result")

play.onclick = ()=>{
    result.innerHTML = tarea.value
    localStorage.setItem("RESULT" , tarea.value)
    
}

remove.onclick = ()=>{
    tarea.value = "";
    result.innerHTML = ""
}

onload = ()=>{
    result.innerHTML = localStorage.getItem("RESULT")
    
}