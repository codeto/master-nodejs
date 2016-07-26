function countChoices(obj) {
max = 1; // max. number allowed at a time

IsNew = obj.form.IsNew.checked;  // your checkboxes here
IsSale = obj.form.IsSale.checked;
 // add more if necessary

count = (IsNew ? 1 : 0) + (IsSale ? 1 : 0);
// If you have more checkboxes on your form
// add more  (box_ ? 1 : 0)  's separated by '+'

if (count > max) {
$("#notification").html("<div class='alert alert-danger'>"+
"<button type='button' "+
"class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>"+
"Chỉ chọn 1 trong 2 giá trị là Sản phẩm mới hoặc Đang Sale! "+
"</div>");
obj.checked = false;
   }
}
