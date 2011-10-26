var forIform = function(data){
   alert("here is your data "+data);
};
$(document).ready(function(){
    var iform=$('#Form'),
        fperrorslink = $('#fperrorslink');
    
    iform.validate({
        invalidHandler: function(form, validator){
            fperrorslink.click();
            var html = '';
            for (var key in validator.submitted){
                var label=$('label[for^="'+key+'"]').not('[generated]');
                var legend=label.closest('fieldset').find('.ui-controlgroup-label');
                var fieldname = legend.length ? legend.text() : label.text();
                html += '<li>' + fieldname +'</li>';
            };
            $("#formpageerrors ul").html(html);
        },
        submitHandler: function(){
            var data = iform.serializeArray();
            alert("form submitted");
            forIForm(data);
        }
    });
});






/* local Storage
   - localStorage.setItem('storedName', varName)
   - localStorage.getitem('storedName')
   - localStorage.clear()


var regExp=/\b[0-9]{2}-[0-9]{2}-[0-9]{2}\b/;
function storeItems(id){
    var pworkout = document.getElementById("pworkout").value;
    var name     = document.getElementById("name").value;
    if (name == ""){
        alert("enter a name, please");
        document.getElementById("name").style.border = "2px solid red";
        return false;
    }else {
        document.getElementById("name").style.border = "2px solid gray";
    }
    var yes      = document.getElementById("yes").value;
    if (yes == "on") {
        yes = "favorite";
    }
    var reps     = document.getElementById("reps").value;
    var wkdate1   = document.getElementById("wkdate").value;
    var regExp=/\b[0-9]{2}-[0-9]{2}-[0-9]{2}\b/;
    var good=regExp.exec(wkdate1);
    if (!good){
       alert("please enter a workout date.");
       document.getElementById("wkdate1").value;
       return false;
    }
    var comments = document.getElementById("comments").value;
    localStorage.setItem("apppworkout",pworkout);
    localStorage.setItem("appname",name);
    localStorage.setItem("appyes",yes);
    localStorage.setItem("appreps",reps);
    localStorage.setItem("appwkdate",wkdate1);
    localStorage.setItem("appcomments",comments);
    alert("Form Saved"); 
    getItems();
}
function getItems(){
    var pworkout = localStorage.getItem("apppworkout");
    var name     = localStorage.getItem("appname");
    var yes      = localStorage.getItem("appyes");
    var reps     = localStorage.getItem("appreps");
    var wkdate   = localStorage.getItem("appwkdate");
    var comments = localStorage.getItem("appcomments");
        
    var viewInfo = [
        pworkout,
        name,
        yes,
        reps,
        wkdate,
        comments
    ];
    
    
    
    // here is where i tryed to colapse
    
    document.getElementById("main").style.display = "none";
    document.getElementById("clear").style.display = "block";

    var getListdiv = document.getElementById("list");
    for ( var i =0 , j=viewInfo.length; i < j ; i ++) {
          var newParas = document.createElement("p");
          var itemTxt  = document.createTextNode(viewInfo[i]);
          newParas.appendChild(itemTxt);
          getListdiv.appendChild(newParas); 
    
    }
    var wkoutimg = localStorage.getItem("apppworkout");
    if (wkoutimg=="Benchpress" || wkoutimg=="Pushups" || wkoutimg=="Incline") {
        document.getElementById("chest").style.display ="block";
    }else if (wkoutimg=="Situps" || wkoutimg=="Sidebends" || wkoutimg=="Legraise") {
        document.getElementById("abs").style.display ="block";
    }else if (wkoutimg=="Squats" || wkoutimg=="Legpress" || wkoutimg=="Calfraise") {
        document.getElementById("legs").style.display ="block";
    }
    

    
    //alert(viewInfo);
       
    
 
  
  
  
  
  // add delete item link
  
  var deletelink = document.createElement("a");
  var setHref = deleteLink.setAttribute("href", "#");
  var setOnClick = deleteLink.setAttribute("onclick","deleteItem("+ key +");");
  var deleteText = document.createTextNode("delete item");
  deleteLink.appendChild(deleteText);
  newDiv.appendChild(deleteLink);
  
  
  
  // add edit item link
  
  
  var editLink = document.createElement("a");
  var setEditHref = editLink.setAttribute("href","#");
  var setEditOnClick = editLink.setAttribute("onclick","editItem("+ key +");");
  var editText = document.createTextNode("edit item");
  editLink.appendChild(editText);
  newDiv.appendChild(editLink);


   
 
    
}


function clearLocal() {
    alert("form cleared");
    localStorage.clear();
    return false;
}

// edit single items ***********************





function editItem(id){


          var value = localStorage.getItem(id);
          var itemId = id ;
          // alert(itemId);
          value = value.split(';');
          var pworkout     = value[0];
          var name         = value[1];
          var yes          = value[2];
          var reps         = value[3];
          var wkdate       = value[4];
          var comments     = value[5];
          
          
          
          
          // populates form fields with localStorage Values
          
          document.getElementById('pworkout').value = pworkout;
          document.getElementById('name').value = name ;
          if(yes == "on"){
             document.getElementById('yes').setAttribute("checked","checked");
          }
          document.getElementById('reps').value = reps;
          document.getElementById('wkdate').value = wkdate ;
          document.getElementById('comments').value = comments ;
          
          
          
          // reveal editItem button, hide submit button
          
          var editItem = document.getElementById('editItem');
          editItem.style.display = "block";
          var submit = document.getElementById('submit');
          submit.style.display = "none" ;
          
         
         
          // capture editItem button's click
          document.getElementById('editItem').onclick = function (){
            //alert(itemId);
            var pworkout  = document.getElementById('pworkout').value;
            var name      = document.getElementById('name').value;
            var yes       = document.getElementById('yes').value;
            var reps      = document.getElementById('reps').value;
            var wkdate    = document.getElementById('wkdate').value;
            var comments  = document.getElementById('comments').value;
            var allItems =[
                pworkout,
                name,
                yes,
                reps,
                wkdate,
                comments
            ];
            if (name != "" && wkdate != "" ){
                localStorage.setItem(itemId, allItems.join(';'));
            } else {
                    alert("all fields required ");
            }
            
          
        };




}




// Delete Single items ...........

function deleteItems(id){
      var ask = confirm("Are you sure?");
      if (ask){
          localStorage.removeItem(id);
          window.location.reload();
      } else {
         alert("Items not removed!")
      }

}



*/















