<!DOCTYPE html>
<html>
<!-- Document Head -->
<?php include 'views/partials/head.php';?>

<?php

$companies = array(
  array("chrysler-white.png", "chrysler.png"),
  array("asc-white.png", "asc.png"),
  array("dodge-white.png", "dodge.png"),
  array("res-white.png", "res.png"),
  array("chrome-data-white.png", "chrome-data.png"),
  array("infiniti-white.png", "infiniti.png"),
  array("ram-white.png", "ram.png"),
  array("fiat-white.png", "fiat.png"),
  array("cc-white.png", "cc.png"),
  array("jeep-white.png", "jeep.png"),
  array("verto-white.png", "verto.png"),
  array("gm-white.png", "gm.png"),
  array("fhmatch-white.png", "fhmatch.png"),
  array("inner-geek-white.png", "inner-geek.png"),
 );

$featured = array(
  array("Fitness Health Match", "FHMatch is a social networking platform that connects people with a broad range of local fitness, health, and wellness professionals.", "http://www.fhmatch.com/", 'img/work/fhm5.png', 
  	array(array('Fitness Health Match Homepage', 'img/work/fhm1.png'), 
		array('Create an account screen.', 'img/work/fhm2.png'), 
		array('Browse fitness and health related articles.', 'img/work/fhm3.png'), 
		array('Easily find health and fitness professional in your area.', 'img/work/fhm4.png'), 
		array('Connect with professional to book appointments.', 'img/work/fhm5.png'),)),

  array("Redeemer University", "Redeemer University College is an undergraduate university known for providing a high-quality liberal arts and sciences university education.", "https://www.redeemer.ca/", 'img/work/redeemer1.png', 
	array(array('Redeemer University Homepage', 'img/work/redeemer1.png'), 
		array('Stories - view and filter testimonials about the College by Students, Alumni and Faculty.', 'img/work/redeemer2.png'), 
		array('Art - Program Page. Learn about programs that the College offers.', 'img/work/redeemer3.png'), 
		array('Admission Counsellors - find your admissions counsellor to help with whatever you need.', 'img/work/redeemer4.png'),  
		array('Campus Tour - Interactive map of different locations around the campus.', 'img/work/redeemer5.png'),
		array('Redeemer Today - Easily find current events and news happening around the campus.', 'img/work/redeemer6.png'),)),

   array("Build & Price", "Chrysler's Build & Price web application.", "http://www.chrysler.com/hostc/bmo/CUC201501/models.do?", 'img/work/bp1.png', 
	array(array('Chrysler trim selector page.', 'img/work/bp1.png'), 
		array('Chrysler trim selector page.', 'img/work/bp2.png'), 
		array('Dodge trim selector page.', 'img/work/bp3.png'), 
		array('Fiat trim selector page.', 'img/work/bp4.png'), 
		array('Jeep trim selector page.', 'img/work/bp5.png'), 
		array('Ram trim selector page.', 'img/work/bp6.png'), 
		array('Chrysler powertrain selections.', 'img/work/bp7.png'), 
		array('Dodge powertrain selection.', 'img/work/bp8.png'), 
		array('Fiat powertrain selection.', 'img/work/bp9.png'), 
		array('Jeep powertrain selection.', 'img/work/bp10.png'), 
		array('Chrysler trim selector page.', 'img/work/bp11.png'), 
		array('Chrysler trim selector page.', 'img/work/bp12.png'), 
		array('Chrysler trim selector page.', 'img/work/bp13.png'), 
		array('Chrysler trim selector page.', 'img/work/bp14.png'), 
		array('Chrysler trim selector page.', 'img/work/bp15.png'), 
		array('Chrysler trim selector page.', 'img/work/bp16.png'), 
		array('Chrysler trim selector page.', 'img/work/bp17.png'), 
		array('Chrysler trim selector page.', 'img/work/bp18.png'), 
		array('Chrysler trim selector page.', 'img/work/bp19.png'), 
		array('Chrysler trim selector page.', 'img/work/bp20.png'), 
		array('Chrysler trim selector page.', 'img/work/bp21.png'), 
		array('Chrysler trim selector page.', 'img/work/bp22.png'), 
		array('Chrysler trim selector page.', 'img/work/bp23.png'), 
		array('Chrysler trim selector page.', 'img/work/bp24.png'),)),

 );

?>

<body class="g-homepage">
	<?php include 'views/partials/header.php';?>

	<div class="g-banner g-container-sm g-hp-section">
		<h1>Hello, and welcome!</h1>
		<h2>My name is Justine Lileikis. I create websites, mobile apps and custom web applications.</h2>
	</div>


	<div class="g-container-lg g-hp-section">
		<div class="line margin-bottom">
	        <div class="size1of3 sm-size1of3 xs-size1of1 unit">
	            <div class="g-ads">
            		<span class="ti-desktop"></span>
            		<h3>Web</h3>
            		<p>From simple small business Wordpress sites to large custom designed e-commerce online businesses.</p>
	            </div>
	        </div>
	        <div class="size1of3 sm-size1of3 xs-size1of1 unit">
	            <div class="g-ads">
            		<span class="ti-mobile"></span>
            		<h3>Mobile</h3>
            		<p>Website mobile versions and IOS and/or android apps.</p>
	            </div>
	        </div>
	        <div class="size1of3 sm-size1of3 xs-size1of1 unit">
	            <div class="g-ads">
            		<span class="ti-tablet"></span>
            		<h3>Custom Apps</h3>
            		<p>Professional custom designed and built from scratch web applications tailored to suit your clients specific needs.</p>
	            </div>
	        </div>
	    </div>
	</div>
	<div class="g-container">
		<div class="line margin-bottom">
			<div class="size1of1 unit">
				<h2>Companies I've worked with</h2>
			</div>
		</div>	
	</div>

	<div class="line no-gutter">
		<?php


		foreach ($companies as $i => $row)
		{

		    echo '<div class="size1of7 sm-size1of7 xs-size1of2 unit flip-container">
		    		<div class="flipper">
			            <div class="g-company front" style="background-image: url(img/' . $row[1] . ');">

			            </div>
			            <div class="g-company back" style="background-image: url(img/' . $row[1] . ');">

			            </div>
		            </div>
		        </div>';
	    }

		?>
		
    </div>

	

    <div class="g-featured-container g-container g-hp-section">
		<div class="line margin-bottom">
			<div class="size1of1 unit">
				<h2>Projects I've worked on</h2>
			</div>
	        	<?php
    
			foreach ($featured as $i => $row){	
			?>

			<div class="g-featured size1of3 unit">
				<a class="g-img" onclick="openFancyBox('.fancy-box-<?php echo $i; ?>');" style="background-image:url(<?php echo $row[3]; ?>); background-size: 90% auto; background-repeat: no-repeat; background-position: center center;">
					
				</a>
				<div class="g-text">
					<h3><?php echo $row[0]; ?></h3>
				</div>
				<div>
					<?php $images = $row[4];
					foreach ($images as $y => $row2){
					?>
					<a class="fancybox fancy-box-<?php echo $i; ?>" rel="gallery<?php echo $i; ?>" href="<?php echo $row2[1]; ?>" title="<?php echo $row2[0]; ?>"></a>
					<?php } ?>
				</div>
			</div>
		<?php } ?>
		</div>

	    <div class="line margin-bottom">
	    	<div class="size1of1 unit g-text-center">
				<br>
	            <a href="/work.php" class="g-btn g-btn-primary">See more of my work</a>
	            <a href="/contact.php" class="g-btn g-btn-secondary">Contact me</a>
	            <br>
	        </div>
	    </div>
	</div>

	<div class="g-bg-color-quaternary g-hp-contact">
		<div class="g-container-sm">
			<div class="line margin-bottom">
				<div class="size1of1 unit g-text-center">
					<h2>Do you have a project in mind?</h2>
					<h3>I would love to work with you!</h3>
					<br>
					<a href="/contact.php" class="g-btn g-btn-lg g-btn-quaternary">Get in touch</a>
				</div>
			</div>
		</div>
	</div>

	
	
	<?php include 'views/partials/footer.php'; ?>

	<?php include 'views/partials/scripts.php'; ?>
</body>

</html>