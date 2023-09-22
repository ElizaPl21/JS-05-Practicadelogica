/**Write a program that asks a user for the 
 * amount of seconds needed until an alarm (message) 
 * is executed alongside a text to show once those 
 * seconds have passed in real time.
 * 
 */

let tiempo = 10
function retraso(){
    console.log(`Hora de dormir despues de ${tiempo} seg`)
}
setTimeout(retraso);
function alarm(){
    alert ("ALARMA");
}
setTimeout(alarm, tiempo*1000)

