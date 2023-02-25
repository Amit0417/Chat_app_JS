// let html= "";

// let input_text_one = document.getElementById("input_text_one").value;
// console.log(input_text_one);
let area_one = document.getElementById("area_one");
let area_two = document.getElementById("area_two");

let admin_one_send = document.getElementById("admin_one_send");
let admin_two_send = document.getElementById("admin_two_send")
let count_admin_one = 1;
let count_admin_two = 1;

// working code
// let arr = [];
admin_one_send.addEventListener("click", function () {
  let input_text_one = document.getElementById("input_text_one").value;

  area_one.innerHTML += ` 
    <div >
        <div id="msg_${count_admin_one}" data-toggle="modal" data-target="#myModal" class="col-sm-3 admin_one_messege messeges_one messeges">${input_text_one}</div>
    </div>`;

    
  // arr.push(input_text_one);

  // for (let i = 0; i < arr.length; i++) {
    area_two.innerHTML += `
    <div  >
        <div id="msg_${count_admin_one}" data-toggle="modal" data-target="#myModal_two" class="col-sm-3 admin_two_messege messeges_two messeges">${input_text_one}</div>
    </div>`;
    document.getElementById("input_text_one").value = "";
  // }
  count_admin_one++;
});


// let arr2 = [];
admin_two_send.addEventListener("click", function () {
  let input_text_two = document.getElementById("input_text_two").value;
  area_one.innerHTML += ` 
        <div>
            <div id="msg_two_${count_admin_two}" data-toggle="modal" data-target="#myModal_four" class="col-sm-3 admin_two_messege two_messeges_two messeges2">${input_text_two}</div>
        </div>`;
  // arr2.push(input_text_two);

  // for (let i = 0; i < arr2.length; i++) {
    area_two.innerHTML += `
        <div>
            <div id="msg_two_${count_admin_two}" data-toggle="modal" data-target="#myModal_three" class="col-sm-3 admin_one_messege two_messeges_one messeges2">${input_text_two}</div>
        </div>`;
    document.getElementById("input_text_two").value = "";
  // }
  count_admin_two++;
});
/*** DELETION LOGIC ****/ 
/**** GET MESSAGE DIV ***/ 
global_div_msg1 = '';
$("#area_one").on("click",".messeges_one", function() {
  global_div_msg1 = this;
});

$("#area_two").on("click",".messeges_two", function() {
  global_div_msg1 = this;
  // console.log(global_div_msg1);
});

global_div_msg2 = '';
$("#area_two").on("click",".two_messeges_one", function () {
  global_div_msg2 = this;
  // console.log(global_div_msg2);
})

$("#area_one").on("click",".two_messeges_two", function () {
  global_div_msg2 = this;
  // console.log(global_div_msg2);
})

/*** DELETE ONLY ONE SIDE MESSAGE ***/ 
function delete_msg(){
  global_div_msg1.remove();
}
function delete_msg2() {
  global_div_msg1.remove();
  
}
function delete_msg3() {
  global_div_msg2.remove();
  
}
function delete_msg3() {
  global_div_msg2.remove();
  
}

/*** DELETE BOTH MESSAGES ****/ 
function delete_all(){
  $(".messeges").each(function(){
    if($(global_div_msg1).attr("id")==$(this).attr("id")){
      this.remove();

      // console.log(this);
    }
  });
}
// function delete_all(){
//   global_div_msg1=document.querySelectorAll(".messeges");
//   //  console.log(global_div_msg1);
//    global_div_msg1.forEach(box => { 
//     box.remove();
//   });
// }
function delete_all2(){
  $(".messeges2").each(function(){
    if($(global_div_msg2).attr("id")==$(this).attr("id")){
      this.remove();
      // console.log(this);
    }
  });
}

/*** DELETION LOGIC END ****/ 
// working on this code
// admin_one_send.addEventListener("click", function () {
//      let input_text_one = document.getElementById("input_text_one").value;
//      let arr = [];
//      arr.push(input_text_one);

//      for (let i = 0; i < arr.length; i++) {
//       area_one.innerHTML += ` 
//       <div id = "remove_1">
//             <div  id="admin_one_messege"  data-toggle="modal" data-target="#myModal" class="col-sm-3 ">${arr[i]}</div>
//         </div>`;
      
//     }

//     for (let i = 0; i < arr.length; i++) {
//       area_two.innerHTML += `
//       <div  id="remove_2">
//           <div id="admin_two_messege"  ondblclick="this.style.display='none'" class="col-sm-3 ">${arr[i]}</div>
//       </div>`;
      
//     }
//      document.getElementById("input_text_one").value = "";
  
//     //  for (let i = 0; i < arr.length; i++) {
      
//     //  }
//    });

//    let delete_messege = document.getElementById("delete_messege");
//    let delete_messege_for_all = document.getElementById("delete_messege_for_all");
//    let admin_one_messege =document.getElementById("admin_one_messege");
//    let admin_two_messege =document.getElementById("admin_two_messege");

//    delete_messege.addEventListener("click",function() {
//      if (delete_messege) {
//       //  console.log(delete_messege).target;
       
//       // admin_one_messege.style.display= "none";
//       admin_one_messege.style.display= "none";
       
//      }
//      else if (delete_messege_for_all) {
//       admin_one_messege.display= "none";
//       admin_two_messege.display= "none";
       
//      }
     
//    })

//    function delete_func() {
//     if (admin_one_messege) {
//       this.style.display="none";
      
//     }
    
//   }
   




// function reMove() {
//   if (id = "remove_1") {
//     const element = document.getElementById("remove_1");
//     element.parentNode.removeChild(element);
//   } else if (id = "remove_4") {
//     const element = document.getElementById("remove_4");
//     element.parentNode.removeChild(element);
//   }
// }
//  function remove_1() {
//   const element = document.getElementById("remove_1");
//   element.parentNode.removeChild(element);
   
//  }
//  function remove_2() {
//   const element = document.getElementById("remove_4");
//   element.parentNode.removeChild(element);
   
//  }
// function reMove() {
//     document.getElementById("remove").remove();
// }

// $("#delete_messege").on("click",function () {
  //   let messeges_div = document.querySelectorAll(".messeges_one");
  //   console.log(messeges_div);
  //   console.log(this);
  // })
