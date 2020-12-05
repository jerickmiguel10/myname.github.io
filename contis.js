function cm(){
  document.getElementById("cake-1").src = "https://www.manilacakeshop.com/images/detailed/7/cake-31.jpg";
  var quantity = document.getElementById("ocm").value;
  var price1 = document.getElementById("pcm").value;
  quantity++;
  var price = 0 + 725;
  var order = price*quantity;
  
  document.getElementById("ocm").value = quantity;
  document.getElementById("pcm").value = order;
  document.getElementById("cm").innerHTML = order + " (" + quantity + ")";
}
function ss(){
  document.getElementById("cake-1").src = "https://www.flowershop.ph/images/thumbnails/500/500/detailed/2/cake-43.jpg";
  var quantity = document.getElementById("oss").value;
  var price1 = document.getElementById("pss").value;;
  quantity++;
  var price = 0 + 975 
  var order = price*quantity;
  
  document.getElementById("oss").value = quantity;
  document.getElementById("pss").value = order;
  document.getElementById("ss").innerHTML = order + " (" + quantity + ")";
}
function co(){
  document.getElementById("cake-1").src = "https://www.flowershop.ph/images/detailed/2/cake-30.jpg";
  var quantity = document.getElementById("oco").value;
  var price1 = document.getElementById("pco").value;
  quantity++;
  var price = 0 + 995; 
  var order = price*quantity;
  
  document.getElementById("oco").value = quantity;
  document.getElementById("pco").value = order;
  document.getElementById("co").innerHTML = order + " (" + quantity + ")";
}
function mb(){
  document.getElementById("cake-1").src = "https://s3-ap-southeast-1.amazonaws.com/giftgo/giftgoimages/mangobravo.jpg";
  var quantity = document.getElementById("omb").value;
  var price1 = document.getElementById("pmb").value;;
  quantity++;
  var price = 0 + 1480;
  var order = price*quantity;
  
  document.getElementById("omb").value = quantity;
  document.getElementById("pmb").value = order;
  document.getElementById("mb").innerHTML = order + " (" + quantity + ")";
}
function sc(){
  document.getElementById("cake-1").src = "https://www.manilacakeshop.com/images/detailed/7/cake-42.jpg";
  var quantity = document.getElementById("osc").value;
  var price1 = document.getElementById("psc").value;
  quantity++;
  var price = 0 + 895;
  var order = price*quantity;
  
  document.getElementById("osc").value = quantity;
  document.getElementById("psc").value = order
  document.getElementById("sc").innerHTML = order + " (" + quantity + ")";
}
function cc(){
  document.getElementById("cake-1").src = "https://www.philippinesflorist.com/images/thumbnails/465/465/detailed/4/cookies-cheesecake.jpg";
  var quantity = document.getElementById("occ").value;
  var price1 = document.getElementById("pcc").value;
  quantity++;
  var price = 0 + 675;
  var order = price*quantity;
  
  document.getElementById("occ").value = quantity;
  document.getElementById("pcc").value = order
  document.getElementById("cc").innerHTML = order + " (" + quantity + ")";
}
function sr(){
  document.getElementById("cake-1").src = "https://www.contis.ph/wp-content/uploads/2019/06/SansRival_2.jpg";
  var quantity = document.getElementById("osr").value;
  var price1 = document.getElementById("psr").value;
  quantity++;
  var price = 0 + 795;
  var order = price * quantity;
  
  document.getElementById("osr").value = quantity;
  document.getElementById("psr").value = order
  document.getElementById("sr").innerHTML = order + " (" + quantity + ")";
}
function bc(){
  document.getElementById("cake-1").src = "https://www.contis.ph/wp-content/uploads/2019/06/Blueberry-Cheesecake.jpg";
  var quantity = document.getElementById("obc").value;
  var price1 = document.getElementById("pbc").value;
  quantity++;
  var price = 0 + 675;
  var order = price * quantity;
  
  document.getElementById("obc").value = quantity;
  document.getElementById("pbc").value = order
  document.getElementById("bc").innerHTML = order + " (" + quantity + ")";
}
function mc(){
  document.getElementById("cake-1").src = "https://www.philippinesflorist.com/images/detailed/4/moist-chocolate-cake.jpg";
  var quantity = document.getElementById("omc").value;
  var price1 = document.getElementById("pmc").value;
  quantity++;
  var price = 0 + 695;
  var order = price * quantity;
  
  document.getElementById("omc").value = quantity;
  document.getElementById("pmc").value = order
  document.getElementById("mc").innerHTML = order + " (" + quantity + ")";
}
function bv(){
  document.getElementById("cake-1").src = "https://www.flowershop.ph/images/detailed/2/cake-28_lo0s-9n.jpg";
  var quantity = document.getElementById("obv").value;
  var price1 = document.getElementById("pbv").value;
  quantity++;
  var price = 0 + 1195;
  var order = price * quantity;
  
  document.getElementById("obv").value = quantity;
  document.getElementById("pbv").value = order
  document.getElementById("bv").innerHTML = order + " (" + quantity + ")";
}
function total(){
  var cm = parseInt(document.getElementById("pcm").value);
  var ss = parseInt(document.getElementById("pss").value);
  var co = parseInt(document.getElementById("pco").value);
  var mb = parseInt(document.getElementById("pmb").value);
  var sc = parseInt(document.getElementById("psc").value);
  var cc = parseInt(document.getElementById("pcc").value);
  var sr = parseInt(document.getElementById("psr").value);
  var bc = parseInt(document.getElementById("pbc").value);
  var mc = parseInt(document.getElementById("pmc").value);
  var bv = parseInt(document.getElementById("pbv").value);
  var total = cm + ss + co + mb + sc + cc + sr + bc + mc + bv;
 
  var ordercm = parseInt(document.getElementById("ocm").value);
  var orderss = parseInt(document.getElementById("oss").value);
  var orderco = parseInt(document.getElementById("oco").value);
  var ordermb = parseInt(document.getElementById("omb").value);
  var ordersc = parseInt(document.getElementById("osc").value);
  var ordercc = parseInt(document.getElementById("occ").value);
  var ordersr = parseInt(document.getElementById("osr").value); 
  var orderbc = parseInt(document.getElementById("obc").value);
  var ordermc = parseInt(document.getElementById("omc").value);
  var orderbv = parseInt(document.getElementById("obv").value);
  var order = ordercm+ orderss + orderco + ordermb + ordersc + ordercc + ordersr + orderbc + ordermc + orderbv;
  document.getElementById("t").innerHTML = total + "(" + order + ")";
}
function blank(){
  document.getElementById("cake-1").src = "https://www.clker.com/cliparts/o/4/5/q/P/2/dark-green-question-mark-md.png";
  document.getElementById("cm").innerHTML = " ";
  document.getElementById("ss").innerHTML = " ";
  document.getElementById("co").innerHTML = " ";
  document.getElementById("mb").innerHTML = " ";
  document.getElementById("sc").innerHTML = " ";
  document.getElementById("cc").innerHTML = " ";
  document.getElementById("sr").innerHTML = " ";
  document.getElementById("bc").innerHTML = " ";
  document.getElementById("mc").innerHTML = " ";
  document.getElementById("bv").innerHTML = " ";
  document.getElementById("t").innerHTML = " ";
  
  document.getElementById("pcm").value = "0";
  document.getElementById("pss").value = "0";
  document.getElementById("pco").value = "0";
  document.getElementById("pmb").value = "0";
  document.getElementById("psc").value = "0";
  document.getElementById("pcc").value = "0";
  document.getElementById("psr").value = "0";
  document.getElementById("pbc").value = "0";
  document.getElementById("pmc").value = "0";
  document.getElementById("pbv").value = "0";
  
  document.getElementById("ocm").value = "0";
  document.getElementById("oss").value = "0";
  document.getElementById("oco").value = "0";
  document.getElementById("omb").value = "0";
  document.getElementById("osc").value = "0";
  document.getElementById("occ").value = "0";
  document.getElementById("osr").value = "0";
  document.getElementById("obc").value = "0";
  document.getElementById("omc").value = "0";
  document.getElementById("obv").value = "0";
  document.getElementById("t").value = "0";
}