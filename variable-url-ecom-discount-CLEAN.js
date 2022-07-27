<!-- Variable Name: url-ecom-discount-CLEAN -->
<!-- Calculates a Discount Value by subtracting 2 Variables  -->
function(){
  var clean_purchased_list_price = {{url-ecom-purchased_list_price-CLEAN}};
  var clean_final_price = {{url-ecom-final_price-CLEAN}};
  var clean_discount = clean_purchased_list_price - clean_final_price;
 return clean_discount;
   
}