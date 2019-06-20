$( document ).ready(function() {
   $("#fb-root").append(`<script> var Check = function() {  
      var SercurityCode = $('#txtSercurityCode').val();
        var SercurityCodeValue = $('#txtSecurityCodeValue').val();
        var MaSV = document.getElementById('ucRight1_txtMaSV').value;
        var MatKhau = document.getElementById('ucRight1_txtMatKhau').value;
        document.getElementById('ucRight1_txtEncodeMatKhau').value = MD5(MatKhau);
          EncryptData();
        return true;
    }  
	    </script> `);
});