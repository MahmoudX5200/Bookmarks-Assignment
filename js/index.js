
var NameInput = document.getElementById("NameId") ;  
var UrlInput = document.getElementById("URLId") ; 
var cartoona=[] ; 

if(  localStorage.getItem("localProducts") == null )
{
    cartoona = [] ;
}
else
{
      cartoona =  JSON.parse(localStorage.getItem("localProducts")) ;
      display()
}

var regex_Name = /^\w{3,}(\s+\w+)*$/
var regex_Url = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
function add_Date()
{
    if( regex_Name.test(NameInput.value) && regex_Url.test(UrlInput.value) )
    {
        var Bookmark_opject = {

            Name : NameInput.value ,
            Url: UrlInput.value ,
        }
    
        cartoona.push(Bookmark_opject);
    
        localStorage.setItem("localProducts" ,  JSON.stringify(cartoona)  )
    
        display()
    
        clearInputs()
    }
    else
    {
        alert(
             "Site Name or Url is not valid, Please follow the rules below :"  ,               
               `-->Site name must contain at least 3 characters

              --> Site URL must be a valid one
               ` ,
               "error"
            );    
    }
}

function clearInputs()
{
    NameInput.value = null;
    UrlInput.value = null;
}

function display()
{    
    var box = ``;
    for(var  i =1 ; i < cartoona.length ; i++)
    {
        //cartoona[i] ====> tr
      box +=  
      `<tr>
            <td>${i}</td>
            <td>${cartoona[i].Name}</td>
            <td>
             <a class="btn btn-primary" href="${cartoona[i].Url}" target="_blank"> Visit</a>
            </td>
            <td>
             <button onclick="Delete_btn(${i})" class="btn btn-outline-danger">Delete</button>
            </td>
      </tr>`
    }
    document.getElementById("tBody").innerHTML = box;
}

function Delete_btn(form)
{
    cartoona.splice( form , 1 ) 
    localStorage.setItem("localProducts" , JSON.stringify(  cartoona ))
    display() 
}