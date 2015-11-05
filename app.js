/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    phrase_en : "I'm a man",        // sentence in english
 *    phrase_de : "Ich bin ein Mann"  // sentence in german
 *  }
 */ 

var tmpl = ' <li id="ID" class="current">' +
           '  <h3>SENTENCE</h3>' +
           ' </li> ';

var punteggio=0;
var current;

$(document).ready(function(){

      for (var i = 0; i < data.length; i++) {
            var add_to_ul = tmpl.replace("ID", i)                                 
                                .replace("SENTENCE", data[i].phrase_en);
            
            $(".sentences").replaceWith(add_to_ul);
            $('.sentences').removeClass('sentences').addClass('current');
            console.log(i);
            current=0;
          
          while(current===0){
          
            var currentID = i;    //creo una variabile in cui mi salvo l'id corrente
            var currentText = $('.options').attr("text");

            //alert(data[i].phrase_en);
            
            $('.opt-continue').on('click', function(){   //function onclick
                    
                alert(i);
            
                if(currentText === data[currentID].phrase_de){
                    
                    punteggio++;
                    
                }
                current++;
            
                /*alert(currentID);
                
                alert(currentText);*/
                //if(){

                  //  $('.candrink').text("You can't drink!");
                   // $('.candrink').removeClass("candrink").addClass('nodrink'); //rimuovo la classe candrink
               // }

            })
          }
    }
    
    
});







