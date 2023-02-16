function scrollup() {
    document.getElementById("d").scrollTop -= 50;
    document.getElementById("d").scrollLeft -= 50;
  }
  function scrolldown() {
    document.getElementById("d").scrollTop += 50;
    document.getElementById("d").scrollLeft += 50;
  }

  var snacks = [{"itemNo":1,"itemName":"Streamed Bun","price":10.50},
               {"itemNo":2,"itemName":"Streamed Timsum","price":11.50},
               {"itemNo":3,"itemName":"Deep Fry Timsum","price":12.50},
               {"itemNo":4,"itemName":"Bake","price":13.50},
               {"itemNo":5,"itemName":"Noodle/Dumplings","price":15.50},
               {"itemNo":6,"itemName":"Porridge","price":16.20},
               {"itemNo":7,"itemName":"Beverage","price":17.80},
               {"itemNo":8,"itemName":"Fry Timsum","price":12.50},
               {"itemNo":9,"itemName":"Dumplings","price":18.70},
               {"itemNo":10,"itemName":"Jam Bun","price":19.60},
               {"itemNo":11,"itemName":"French Fries","price":20.10},
               {"itemNo":12,"itemName":"Nuggets","price":15.10},
               {"itemNo":13,"itemName":"Chips","price":18.10}
               ]

 var drinks = [{"itemNo":16,"itemName":"Coffee Black","price":10.20},
               {"itemNo":17,"itemName":"Tea Black","price":12.50},
               {"itemNo":18,"itemName":"Chrysanthemum Tea","price":13.50},
               {"itemNo":19,"itemName":"Coffee","price":10.20},
               {"itemNo":20,"itemName":"Tea","price":10.00},
               {"itemNo":21,"itemName":"Chinese Tea","price":13.50},
               {"itemNo":22,"itemName":"Iced Coffee Black","price":15.00},
               {"itemNo":23,"itemName":"Iced Tea Black","price":15.50},
               {"itemNo":24,"itemName":"Soya Milk","price":14.10},
               {"itemNo":25,"itemName":"Iced Coffee","price":13.50},
               {"itemNo":26,"itemName":"Iced Tea","price":13.10},
               {"itemNo":27,"itemName":"Grass Jelly","price":8.00},
               {"itemNo":28,"itemName":"Coffee C","price":11.10},
               {"itemNo":29,"itemName":"Tea C","price":11.00},
               {"itemNo":30,"itemName":"Black & White","price":18.10},
               {"itemNo":31,"itemName":"Milo","price":16.00},
               {"itemNo":32,"itemName":"Iced Milo","price":16.50},
               {"itemNo":33,"itemName":"Takeaway (water)","price":9.00}
              ]
            //   console.log(parseFloat(drinks[0].price).toFixed(2))
var pantry = snacks.concat(drinks);


const inFields = document.getElementsByTagName("input");
const inClicked = e =>{
  var i = e.target.id;
  var hidden = document.getElementById("hidden");
  hidden.textContent = i;
}

for (let field of inFields) {
  field.addEventListener("focus", inClicked);
}

function dis(val) {
  var hidden = document.getElementById("hidden");
  var hid = hidden.textContent;
  if(hid==="itm-no"){
    document.getElementById("itm-no").value += val;
  }
  else if(hid==="qty"){
    document.getElementById("qty").value += val;
  }
  else if(hid==="table-no"){
    document.getElementById("table-no").value += val;
  }
  else if(hid==="noCover"){
    document.getElementById("noCover").value += val;
  }
}

function allClear(){
  document.getElementById("itm-no").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("table-no").value = "";
  document.getElementById("noCover").value = "";
  var hidden = document.getElementById("hidden");
  hidden.textContent = "";
}

function clean(){
  var hidden = document.getElementById("hidden");
  var hid = hidden.textContent;
  if(hid==="itm-no"){
    document.getElementById("itm-no").value = "";
  }
  else if(hid==="qty"){
    document.getElementById("qty").value = "";
  }
  else if(hid==="table-no"){
    document.getElementById("table-no").value = "";
  }
  else if(hid==="noCover"){
    document.getElementById("noCover").value = "";
  }
  var hidden = document.getElementById("hidden");
  hidden.textContent = "";
}

function addItems(){
  var itemTable = document.getElementById("item-list");
  var itemNum = document.getElementById("itm-no").value;
  var itemQty = document.getElementById("qty").value;
  var tableData = ``;
  var totalPrice = 0;
  var check = false;
  var eitem = "";

  if(itemTable.rows.length>=2 && itemQty.length===0){
    for(let j=0,len = pantry.length;j<len;j++){
      if(parseInt(itemNum)===pantry[j].itemNo){
          eitem = pantry[j].itemName;
          break;
      }
    }
    for(let z=1;z<itemTable.rows.length;z++){
    if(itemTable.rows[z].cells[0].innerHTML===eitem){
      var uqty = parseInt(itemTable.rows[z].cells[1].innerHTML);
      var upqty = parseInt(1) + uqty;
      itemTable.rows[z].cells[1].innerHTML = upqty;
      var tableprice_str = itemTable.rows[z].cells[2].innerHTML;
      var str = tableprice_str.replace('$','');
      var tableprice = parseFloat(str);
      var upPrice = ((upqty*tableprice).toFixed(2));
      itemTable.rows[z].cells[3].innerHTML = "$"+upPrice;
      check = true;
      break;
    }
  }
  }


      if(itemTable.rows.length>=2 && itemQty.length>0){
        for(let j=0,len = pantry.length;j<len;j++){
          if(parseInt(itemNum)===pantry[j].itemNo){
              eitem = pantry[j].itemName;
              break;
          }
        }
        for(let z=1;z<itemTable.rows.length;z++){
        if(itemTable.rows[z].cells[0].innerHTML===eitem){
          var uqty = parseInt(itemTable.rows[z].cells[1].innerHTML);
          var upqty = parseInt(itemQty) + uqty;
          itemTable.rows[z].cells[1].innerHTML = upqty;
          var tableprice_str = itemTable.rows[z].cells[2].innerHTML;
          var str = tableprice_str.replace('$','');
          var tableprice = parseFloat(str);
          var upPrice = ((upqty*tableprice).toFixed(2));
          itemTable.rows[z].cells[3].innerHTML = "$"+upPrice;
          check = true;
          break;
        }
      }
      }

      if(check===false && itemQty.length===0){
        for(let i=0,len = pantry.length;i<len;i++){
          if(parseInt(itemNum)===pantry[i].itemNo){
            totalPrice = ((pantry[i].price*1).toFixed(2));
            var item_price = ((pantry[i].price.toFixed(2)));
            tableData+=`<tr>
            <td>${pantry[i].itemName}</td>
            <td style="text-align: right;">${1}</td>
            <td style="text-align: right;">${("$"+item_price)}</td>
            <td style="text-align: right;">${("$"+totalPrice)}</td>
            `
            $('#item-list').append(tableData);
            break;
          }
        }
      }

    if(check===false && itemQty.length>0){
    for(let i=0,len = pantry.length;i<len;i++){
      if(parseInt(itemNum)===pantry[i].itemNo){
        totalPrice = ((pantry[i].price*itemQty).toFixed(2));
        var item_price = ((pantry[i].price.toFixed(2)));
        tableData+=`<tr>
        <td>${pantry[i].itemName}</td>
        <td style="text-align: right;">${itemQty}</td>
        <td style="text-align: right;">${("$"+item_price)}</td>
        <td style="text-align: right;">${("$"+totalPrice)}</td>
        `
        $('#item-list').append(tableData);
        break;
      }
    }
  }

  var table_total_price = document.getElementById("table-tp");
  var table_total_price_str = table_total_price.textContent;
  var table_total_price_num = parseFloat(table_total_price_str);
  table_total_price_num = 0.00;
  for(let x = 1;x<itemTable.rows.length;x++){
      var Str = itemTable.rows[x].cells[3].innerHTML;
      var updatedStr = Str.replace('$','');
      table_total_price_num = table_total_price_num  + parseFloat(updatedStr);
  }
  var finVal = table_total_price_num.toFixed(2);
  table_total_price.textContent = finVal;
  
  allClear();
}

function callButton(myButton){  
  var itemVal = myButton.value;
  var itemTable = document.getElementById("item-list");
  var tableDisItem = "";
  var itemPrice = 0;
  var Totalprice = 0;
  var c = false;
  var condition = false;
  var tableData = ``;
  for(let i=0,len=pantry.length;i<len;i++){
    if(itemVal===pantry[i].itemName){
      tableDisItem = pantry[i].itemName;
      itemPrice = pantry[i].price;
      Totalprice = itemPrice.toFixed(2);
      condition = true;
      break;
    }
  }
  if(itemTable.rows.length>=2 && condition===true){
    for(let z=1;z<itemTable.rows.length;z++){
      if(itemTable.rows[z].cells[0].innerHTML===tableDisItem){
          var Quantity = parseInt(itemTable.rows[z].cells[1].innerHTML);
          var quantityNum = Quantity+1;
          itemTable.rows[z].cells[1].innerHTML = quantityNum;
          var Table_price_str = itemTable.rows[z].cells[3].innerHTML;
          var str = Table_price_str.replace('$','');
          var Table_price = parseFloat(str);
          var updatedPrice = ((Table_price+itemPrice).toFixed(2));
          itemTable.rows[z].cells[3].innerHTML = "$"+updatedPrice;
          c = true;

      }
    }
  }
  if(c===false && condition===true){
    tableData+=`<tr>
        <td>${tableDisItem}</td>
        <td style="text-align: right;">${1}</td>
        <td style="text-align: right;">${("$"+Totalprice)}</td>
        <td style="text-align: right;">${("$"+Totalprice)}</td>
        `
        $('#item-list').append(tableData);
  }
  var table_total_price = document.getElementById("table-tp");
  var table_total_price_str = table_total_price.textContent;
  var table_total_price_num = parseFloat(table_total_price_str);
  table_total_price_num = 0.00;
  for(let x = 1;x<itemTable.rows.length;x++){
      var Str = itemTable.rows[x].cells[3].innerHTML;
      var updatedStr = Str.replace('$','');
      table_total_price_num = table_total_price_num  + parseFloat(updatedStr);
  }
  var finVal = table_total_price_num.toFixed(2);
  table_total_price.textContent = finVal;

}

function cancelItem(){
  var itemTable = document.getElementById("item-list");
  if(itemTable.rows.length>1){
    $('#item-list tr:last').remove();
  }
  var table_total_price = document.getElementById("table-tp");
  var table_total_price_str = table_total_price.textContent;
  var table_total_price_num = parseFloat(table_total_price_str);
  table_total_price_num = 0.00;
  for(let x = 1;x<itemTable.rows.length;x++){
      var Str = itemTable.rows[x].cells[3].innerHTML;
      var updatedStr = Str.replace('$','');
      table_total_price_num = table_total_price_num  + parseFloat(updatedStr);
  }
  var finVal = table_total_price_num.toFixed(2);
  table_total_price.textContent = finVal;
}

function newBill(){
  document.getElementById("total").style.display = "block";
  document.getElementById("change").style.display = "none";

  $("#item-list tbody tr").remove();
  var table_total_price = document.getElementById("table-tp");
  table_total_price.textContent = ((parseFloat(0.00)).toFixed(2));

  var Amount = document.getElementById("amt");
  Amount.textContent = ((parseFloat(0.00)).toFixed(2));

  var Topchange = document.getElementById("changePrice");
  Topchange.textContent = ((parseFloat(0.00)).toFixed(2));

  var GSTamt = document.getElementById("gstamt");
  GSTamt.textContent = ((parseFloat(0.00)).toFixed(2));

  var TogivAmt = document.getElementById("pay");
  TogivAmt.textContent = ((parseFloat(0.00)).toFixed(2));

  var Tender = document.getElementById("tender");
  Tender.textContent = ((parseFloat(0.00)).toFixed(2));

  var Botchange = document.getElementById("rest");
  Botchange.textContent = ((parseFloat(0.00)).toFixed(2));

}

function genBill(){
  document.getElementById("total").style.display = "none";
  document.getElementById("change").style.display = "block";

  var totalFinAmount_strP = document.getElementById("table-tp");
  var totalFinAmount_str = totalFinAmount_strP.textContent;
  var totalFloat = parseFloat(totalFinAmount_str);
  var totalFinAmount = (totalFloat.toFixed(2));

  var disAmt = document.getElementById("amt");
  disAmt.textContent = totalFinAmount;

  var gst = totalFloat*0.08;
  var disGst = document.getElementById("gstamt");
  disGst.textContent = gst.toFixed(2);

  var payNum = totalFloat+gst;
  var payable = document.getElementById("pay");
  payable.textContent = payNum.toFixed(2);
  
}


function twoDollar(){
  var dollar = document.getElementById("tender");
  var dollarStr = dollar.textContent;
  var dollarNum = parseFloat(dollarStr);
  var dollarNumF = (dollarNum + 2.00).toFixed(2);
  dollar.textContent = dollarNumF;
  remaining();
}

function tenDollar(){
  var dollar = document.getElementById("tender");
  var dollarStr = dollar.textContent;
  var dollarNum = parseFloat(dollarStr);
  var dollarNumF = (dollarNum + 10.00).toFixed(2);
  dollar.textContent = dollarNumF;
  remaining();
}

function fiveDollar(){
  var dollar = document.getElementById("tender");
  var dollarStr = dollar.textContent;
  var dollarNum = parseFloat(dollarStr);
  var dollarNumF = (dollarNum + 5.00).toFixed(2);
  dollar.textContent = dollarNumF;
  remaining();
}

function fiftyDollar(){
  var dollar = document.getElementById("tender");
  var dollarStr = dollar.textContent;
  var dollarNum = parseFloat(dollarStr);
  var dollarNumF = (dollarNum + 50.00).toFixed(2);
  dollar.textContent = dollarNumF;
  remaining();
}

function remaining(){
  var TenderStrP = document.getElementById("tender");
  var TenderStr = TenderStrP.textContent;
  var TenderNum = parseFloat(TenderStr);
  var Payable = document.getElementById("pay");
  var PayableStr = Payable.textContent;
  var PayableNum = parseFloat(PayableStr);
  var Rest = document.getElementById("rest");
  var FinalChange = document.getElementById("changePrice");
  var dummy = 0.00;
  if(TenderNum>PayableNum){
    dummy = TenderNum-PayableNum;
    Rest.textContent = dummy.toFixed(2);
    FinalChange.textContent = dummy.toFixed(2);
  }
}

function printItem(){
  var prtContent = document.getElementById("total");
  var prtcontent = document.getElementById("change");
  var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
  WinPrint.document.write(prtContent.innerHTML);
  WinPrint.document.write(prtcontent.innerHTML);
  WinPrint.document.close();
  WinPrint.focus();
  WinPrint.print();
  WinPrint.close();
}