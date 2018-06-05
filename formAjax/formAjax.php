<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="assets/css/style.css">
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
					if (isset($_POST['email']) && strlen($_POST['email']) < 8 ){
						echo '<b class = "show">Email wrong format</b>';
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
					if (isset($_POST['password']) && strlen($_POST['password']) < 8  ){
						echo '<b class = "show">Password length min 8 letter</b>';
					}
					?>
				</div>
			</div>
			<div class="form-control">
				<span>Birthday: </span>
				<div class="input-control" id="birthday">
					<input name="ngaysinh" id="nhapNgayThang" type="text" onclick="showCalendar()">
					<img onclick="showCalendar()" src="image/calendar.png" alt="ảnh">
					<b class="show"></b>
					<?php
					if (isset($_POST['ngaysinh']) && empty($_POST['ngaysinh'])){
						echo '<b class = "show">Chưa chọn ngày sinh<b>';
					}
					?>
				</div>
			</div> 
			<div class="calendar">
				<table onclick="calendar()" id="calendar">
					<tr>
						<th><input type="button" value="<<" onclick="changeYear(-1)" ></th>
						<th><input type="button" value="<" onclick="changeMonth(-1)" ></th>
						<th colspan="2">
							<select onchange="changeDate()" name="month" id="month">
							</select>
						</th>
						<th>
							<select onchange="changeDate()" name="year" id="year">
							</select>
						</th>
						<th><input type="button" value=">" onclick="changeMonth(1)" ></th>
						<th><input type="button" value=">>" onclick="changeYear(1)" ></th>
					</tr>
					<tr id="date">
						<td>Sun</td>
						<td>Mon</td>
						<td>Tue</td>
						<td>Wed</td>
						<td>Thu</td>
						<td>Fri</td>
						<td>Sat</td>
					</tr>
				</table>
			</div>
			<div class="form-control">
				<div class="input-control-button">
					<input type="submit" value="SUBMIT">
					<input type="reset" value="RESET">
				</div>
			</div>
		</form>
	</div>
	<script src="assets/js/formAjax.js"></script>
	<script src="assets/js/ajax.js"></script>
	<script src="assets/js/script.js"></script>
</body>
</html>