/**
 * Created by user on 17-1-12.
 */
window.onload = init;

function init() {
    window.options = {};




     initD();
     initC();
     initE();
   var initAObject=new initA();
   var initBObject=new initB();

    options.initAObject=initAObject;
    options.initBObject=initBObject;
}