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
					$count = 0;
					if (isset($_POST['username']) && strlen($_POST['username']) < 8){
						echo '<b class = "show">Username length min 8 letter</b>';
						$count++;
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
							$count++;
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
					$count++;
				}
				if (isset($_POST['email']) && strlen($_POST['email']) > 8){
					$email = $_POST['email'];
					$emailLength = strlen($email);
					$viTriA = 0;
					$countA = 0;
					$viTriCham = 0;
					$countCham = 0;
					for ($i = 0; $i < $emailLength; $i++){
						if ($email[$i] == '@'){
							$viTriA = $i; 
							$countA++;
						}
						if ($email[$i] =='.'){
							$viTriCham = $i;
							$countCham++;
						}
					}
					function message($countA, $countCham, $viTriA, $viTriCham, $emailLength){
						if ($countA > 1){
							return 'Chỉ được 1 dấu @';
						}
						if ($countCham > 1){
							return 'Chỉ được 1 dấu "."';
						}
						if ($countCham == 0 || $countA == 0){
							return 'Thiếu ký tự @ hoặc .';
						}
						if ($viTriA > $viTriCham){
							return 'Phải đặt dấu chấm sau @';
						}
						if ($viTriA < 3){
							return "Tên email phải dài hơn 3";
						}
						if ($viTriCham - $viTriA < 3){
							return "Tên miền email phải dài hơn 3";
						}
						if ($emailLength - $viTriCham <3){
							return "Sau dấu chấm ít nhất 3 ký tự";
						}
					}
					$text = message($countA, $countCham, $viTriA, $viTriCham, $emailLength);
					if (strlen($text) > 0 ){
						echo '<b class="show">'.$text.'</b>';
						$count++;
					}
				} 
				?>
				</div>
			</div>
			<div class="form-control">
				<span>Birthday: </span>
				<div class="input-control form-input" id="birthday">
                    <div id="ngaysinh">
					    <input name="ngaysinh" id="nhapNgayThang" type="text"  >
                    <img id="imageCalendar" src="image/calendar.png" alt="calendar">
                    </div>
					<b class="show"></b>
					<?php
					if (isset($_POST['ngaysinh']) && strlen($_POST['ngaysinh'])< 8){
						echo '<b class = "show">Chưa chọn ngày sinh<b>';
						$count++;
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
			<?php
			if($count == 0 && isset($_POST['username'])){
				include_once('server.php');
				echo $count;
			}
			?>
		</form>
	</div>
	<div class="showTime"></div>
    <script src="../jquery-3.3.1.min.js"></script>
    <script src="assets/js/formAjax.js"></script>
    <script src="assets/js/calendar.js"></script>
	<script src="assets/js/ajaxs.js"></script>
</body>
</html>