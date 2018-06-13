<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="assets/css/ajax.css">
    <link rel="stylesheet" href="assets/css/calendar.css">
	<title>Form Ajax</title>
</head>
<body>
	<div class="container">
		<form action="formAjax.php" method="post" onsubmit="return(checkValidateForm());">
			<div class="form-control">
				<span>Username: </span>
				<div class="input-control">
					<input name="username" type="text" >
					<b class="show"></b>
					<?php  
					if (isset($_POST['username']) && strlen($_POST['email']) < 8){
						echo '<b class = "show">Username length min 8 letter</b>';
					}
					?>
				</div>
			</div>
			<div class="form-control">
				<span>Password: </span>
				<div class="input-control">
					<input name="password" type="password">
					<b class="show"></b>
					<?php 
					if (isset($_POST['password']) && strlen($_POST['password']) < 8 ){
						echo '<b class = "show">Password length min 8 letter</b>';
					}
					?>
				</div>
			</div>
			<div class="form-control">
				<span>Email: </span>
				<div class="input-control">
					<input name="email" type="text">
					<b class="show"></b>
					<?php 
					if (isset($_POST['email']) && strlen($_POST['email']) < 8  ){
						echo '<b class = "show">Email wrong format</b>';
					}
					?>
				</div>
			</div>
			<div class="form-control">
				<span>Birthday: </span>
				<div class="input-control form-input" id="birthday">
                    <div id="ngaysinh">
					    <input name="ngaysinh" id="nhapNgayThang" type="text">
                    <img id="imageCalendar" src="image/calendar.png" alt="calendar">
                    </div>
					<b class="show"></b>
					<?php
					if (isset($_POST['ngaysinh']) && empty($_POST['ngaysinh'])){
						echo '<b class = "show">Chưa chọn ngày sinh<b>';
					}
					?>
				</div>
			</div> 
			<div class="calendar"><div class="table"></div></div>
			<div class="form-control">
				<div class="input-control-button">
					<input type="submit" value="SUBMIT">
					<input type="reset" value="RESET">
				</div>
			</div>
		</form>
    </div>
    <script src="../jquery-3.3.1.min.js"></script>
    <script src="assets/js/formAjax.js"></script>
    <script src="assets/js/calendar.js"></script>
</body>
</html>