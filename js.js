var siteName=document.getElementById("siteName")
var siteUrl=document.getElementById("siteUrl")
var myContainer  ;
var nightModfy=document.getElementById('databox');
var nightModySearch=document.getElementsByClassName("searchBox ")



if(localStorage.getItem('myData')==null){
myContainer=[];
}else{
    myContainer=JSON.parse( localStorage.getItem('myData'));
    displayList(myContainer); 
}

function searchList(term){
    var searchList=[];
    for( var i =0; i<myContainer.length ;i++){
        if(myContainer[i].name.toLowerCase().includes(term.toLowerCase() )==true){
            searchList.push(myContainer[i]);}
  }
  displayList(searchList);
    console.log(searchList);
}

// function addUrl(){
//     myData={
//         name:document.getElementById("siteName").value,
//         url:document.getElementById("siteUrl").value
//     }
//     myContainer.push(myData);
//     localStorage.setItem("myData",JSON.stringify(myContainer));
//     displayList();
//     clearList();

// }
    document.getElementById('addUrl').addEventListener('click', function(){
        myData={
            name:document.getElementById("siteName").value,
            url:document.getElementById("siteUrl").value
        }
        myContainer.push(myData);
        localStorage.setItem("myData",JSON.stringify(myContainer));
        displayList(myContainer);
        clearList();})


function displayList(favList){
var  cartoona =``;
    for( var i =0; i<favList.length;i++){
        cartoona +=`
        <div class="myboxlist">
        <span class="fw-bolder fst-italic fs-2">${favList[i].name}</span>
        <a href="${favList[i].url} " id = "z" target="_blank" class="btn btn-primary">Visit</a>
        <button class=" btn btn-danger shadow-lg" onclick ="deletList(${i});">Delet</button>
        <button class=" btn btn-warning shadow-lg" onclick ="updateList(${i})";">update</button>

</div>  `
    }
    document.getElementById("boxList").innerHTML=cartoona;
}
function clearList(){
    document.getElementById("siteName").value="";
    document.getElementById("siteUrl").value="";
}
function deletList(deletIndex){
    myContainer.splice(deletIndex , 1);
    localStorage.setItem("myData",JSON.stringify(myContainer));

    displayList(myContainer);
};

function updateList(index){
    siteName.value=myContainer[index].name;
    siteUrl.value =document.getElementById("z");
    deletList(index);
    displayList(myContainer);
};
document.getElementById('changeCol').addEventListener('click',function(){
    document.body.style.backgroundColor="black";
    nightModfy.style.backgroundColor="#201f1f";
    nightModfy.style.color="white";
    document.getElementById("searchBox").style.backgroundColor="#201f1f";
    document.getElementById("searchBox").style.color="white";
    // document.getElementsByClassName("container")="syle='back-ground =`black`";


})
// databox