$(document).ready(function(){
   var sample={
        "status": "1",
        "data": [
            { "id": 1, "name": "Computer", "description": "", "rate": 10, "status": 1 }, 
            { "id": 2, "name": "Mobile", "description": "", "rate": 10, "status": 0 }, 
            { "id": 3, "name": "Tv", "description": "", "rate": 10, "status": 1 }, 
            { "id": 4, "name": "Laptop", "description": "", "rate": 10, "status": 0 }, 
            { "id": 5, "name": "Tab", "description": "", "rate": 10, "status": 1 },
            { "id": 3, "name": "Ipad", "description": "", "rate": 10, "status": 0 }, 
            { "id": 3, "name": "MemoryCard", "description": "", "rate": 10, "status": 1 }, 
            { "id": 3, "name": "Wifi Adapter", "description": "", "rate": 10, "status": 1 }
        ]
    };
    // console.log(sample.text);
    var product= JSON.parse(JSON.stringify(sample));
    var productLen=(product.data.length); 
    for(i=0; i<productLen; i++){
        // console.log(i);
        if(product.data[i].status !=0){
            // console.log(product.data[i].text);
            $(".productName").append($('<option>'+product.data[i].name+'</option>'));   
        }
    }
    var customerName= [       
        { "name": "Ashwin"  },
        { "name": "Virat"  },
        { "name": "Sachin"  },
        { "name": "Smith"  }
      ];
    // var productName= [       
    //     { "name": "Computer"  },
    //     { "name": "Laptop"  },
    //     { "name": "Tv"  },
    //     { "name": "Mobile"  }
    //   ];
    // var select = $(".productName");
      //    alert("select");
    //   productName.forEach(function(data){
    //     $(".productName").append($('<option>'+data.name+'</option>'));
    //    });       
       customerName.forEach(function(data){
        $(".customerName").append($('<option>'+data.name+'</option>'));
       });  
    var newRowId=2,previousRowId;
    var productQty,productPrice;
    var productTotalAmt;
        
    $(".addRow").click(function(){
        previousRowId=newRowId-1;
        $('#tableRow'+newRowId).html($('#tableRow'+previousRowId).html()).find("td:first-child").html(newRowId);
        $('.tableProduct').append('<tr id="tableRow'+(newRowId+1)+'"></tr>'); //creating Dummy Row
          newRowId++;
        // alert($('.tableProduct tbody tr').length);
        //   alert(newRowId);
    });

    $(".tableProduct").on('click', '.deleteRow', function () {
        if(newRowId>2){
            $(this).closest('tr').remove();
            var rowId=0;
            $("tr").each(function(){
                $(this).attr("id","tableRow"+rowId).find("td:first-child").html(rowId);
                // $(this).find("td:first-child").html(rowId);
            rowId++;
            //    newRowId=rowId;
            });
            newRowId=$('.tableProduct tbody tr').length;
            grandTotal();
            // alert(newRowId);
            // console.log(newRowId);
        }
        
    });
    $('.tableProduct').on('keyup', 'input', function(){
        // console.log($(this).closest('tr').attr('id'));
        var currentRow=$(this).closest('tr');
        var productQty=$(currentRow).find(".productQty").val();
         var productPrice=$(currentRow).closest('tr').find(".productPrice").val();
         $(this).closest('tr').find(".totalAmt").val(productQty*productPrice);
        grandTotal();
    });

    $('.taxPercentage').keyup(function(){
        grandTotal();
    });
    
    function grandTotal(){
    var subTotal=0;
    $(".totalAmt").each(function(){
        subTotal+=parseInt($(this).val());
    });
    $("#subTotal").val(subTotal);
    var taxPercentage=$('.taxPercentage').val();
    // alert(taxPercentage);
    var taxAmount=(subTotal/100)*taxPercentage;
    // alert(taxAmount);
    // alert(taxAmount+10);
    $('.taxAmt').val(taxAmount);
    // console.log(parseInt(s)+10);
    $('.grandTotal').val((taxAmount+subTotal));
}
});