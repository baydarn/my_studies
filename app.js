///immediately-invoked function
//1-tanımlanmayan anında çağrılan8immediately-invoked
//!function (){ console.log("izle ve öğren") })();

 //2 tanımlanan anında çağıran fonksiyon
// var foobar= function(){
//     arguments.callee();
// }

// (function (){
//         var i=0;
//         var name= "DefaultName"+i;
//         i=i+1;
//         return name;
        
// })();
//     var name= createName();
//     name2=createName();
//     console.log(name + " "+name2);

// (function IIFE(msg,times){
//     for(var i=1;i<=times;i++)
//       {
//         console.log(msg);
//       }           
                       
//     }("Merhaba!", 5));

                 //NAMESPACE KULLANIMI////
// function user()
// {
//     this.yas = 25;
// }
// user.prototype.getYas= function()
// {
//     return this.yas;
// }
//->ŞİMDİ DAHA YÖNETİLEBİLİR OLACAK


// if(!UserNamespace) UserNamespace = {};
// UserNamespace.user = function() 
// {
//     this.yas = 24;
// };
// UserNamespace.user.prototype.getYas = function()
// {
//     return this.yas;
// };


// var u = new UserNamespace.user()
// alert( u.getYas() );



// let value;

// const value1 =10;
// const value2= 4;

// /Aritmetik operatörler///////

// value = value1 + value2;
// value = value1-value2;

// console.log(value1 + value2);


//  value = Math.PI;
//  value = Math.E;

//  value = Math.round(3.6);
//  value = Math.ceil(3.7);

// value = Math.abs(-10);

// value = Math.random()* 20 +1;

// console.log(value);


// let value;
// const firstName = "Louis";
// ///const lastName "Armstrong";

// const langs= "Java,Python,C++";

// value = "mustafa murat";
// value += "coşkun"; ///value =value +"coşkun";

// value= firstName.length;


// value = firstName.concat(" ",lastName," ","Caz");
// value = firstName.toLowerCase();
// value=firstName.toUpperCase();

// value =firstName[0];

// value =firstName[2];

// value =firstName[4];

// value = firstName[firstName.length -1];



// ///INDEX OF

// value=firstName.indexOf("L");
// value=firstName.indexOf("o");
// value=firstName.indexOf("l");

// console.log(value);

// ///char at

// value= firstName.charAt(0);
// value=firstName.charAt(firstName.length -1);

// ///SPLIT

// value = langs.split(",");

// //replace

// value = langs.replace("Python","CSS");

// //include
// value =langs.includes()

// const name = "Mustafa Murat Coşkun";
// const department = "Bilişim";
// const salary = 4000;


//const a= "isim:"+ name + "\n" + "Departman:" + department +"\n"+ "maaş:" + salary;

// console.log(a);

//const a='isim:${name}\nDepartmnet:${department}\nMaaş:${salary}';


///TEMPLATE LITERAL

// const html="<ul>"+
// "<li>"+name+"</li>"
// "<li>"+department+"</li>"
// "<li>"+salary+"</li>"
// "</ul>";

// document.body.innerHTML=html;







