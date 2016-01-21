<!DOCTYPE html>
<html>
<!-- Document Head -->
<?php include 'views/partials/head.php';?>

<body>
    <?php include 'views/partials/header.php';?>

    <div class="g-container">
        <h1>Contact Me</h1>
        <h2>I would love to work with you!</h2>
        <p>Send me a message letting me know what you are looking to create and I will get back you shortly.</p>
    </div>

    <div class="g-container-sm">
        <div class="g-btn-toggle">
            <a class="g-btn g-btn-secondary g-active">General Inquiry</a>
            <a class="g-btn g-btn-secondary">Request a Quote</a>
        </div>
        <br>
        <br>
        <form class="g-contact-form">
            <div class="line">
                <div class="g-form-group unit size1of2">
                    <label for="fName">First Name</label>
                    <input type="text" class="g-form-control" id="fName" placeholder="First Name">
                </div>
                <div class="g-form-group unit size1of2">
                    <label for="lName">Last Name</label>
                    <input type="text" class="g-form-control" id="lName" placeholder="Last Name">
                </div>
            </div>
            <div class="g-form-group">
                <label for="email">Email</label>
                <input type="text" class="g-form-control" id="email" placeholder="Email Address">
            </div>
            <div class="g-form-group">
                <label for="textBox">How can I help you?</label>
                <textarea rows="3" class="g-form-control" id="textBox" placeholder="How can I help you?"></textarea>
            </div>
            <div class="g-form-group">
                <button type="submit" class="g-btn">Submit</button>
            </div>
        </form>

        <form class="g-quote-form">
            <div class="line">
                <div class="g-form-group unit size1of2">
                    <label for="fName2">First Name</label>
                    <input type="text" class="g-form-control" id="fName2" placeholder="First Name">
                </div>
                <div class="g-form-group unit size1of2">
                    <label for="lName2">Last Name</label>
                    <input type="text" class="g-form-control" id="lName2" placeholder="Last Name">
                </div>
            </div>
            <div class="g-form-group">
                <label for="email2">Email</label>
                <input type="text" class="g-form-control" id="email2" placeholder="Email Address">
            </div>
            <div class="line">
                <div class="g-form-group unit size1of2">
                    <label for="projectType">Project Type</label>
                    <select id="projectType" class="g-form-control">
                        <option>Select an option</option>
                        <option value="volvo">Mobile Application</option>
                        <option value="saab">Website</option>
                        <option value="mercedes">E commerce Website</option>
                        <option value="audi">Custom Web Application</option>
                        <option value="audi">Other</option>
                    </select>
                </div>
                <div class="g-form-group unit size1of2">
                    <label for="budget">Budget:</label>
                    <select id="budget" class="g-form-control">
                        <option>Select an option</option>
                        <option value="volvo">$500 - $1,000</option>
                        <option value="saab">$1000 - $5,000</option>
                        <option value="mercedes">$5000 - $10,000</option>
                        <option value="audi">$10,000 - $30,000</option>
                        <option value="audi">$30,000 + </option>
                    </select>
                </div>
            </div>
            <div class="g-form-group">
                <label for="textBox2">Tell me about your project</label>
                <textarea rows="3" class="g-form-control" id="textBox2" placeholder="Tell me about your project"></textarea>
            </div>
            <div class="g-form-group">
                <button type="submit" class="g-btn">Submit</button>
            </div>
        </form>

    </div>

    <div id="map"></div>

    <?php include 'views/partials/footer.php'; ?>

    <?php include 'views/partials/scripts.php'; ?>

    <!-- Google maps -->
    <script src="https://maps.googleapis.com/maps/api/js"></script>

    <script>
        $(document).ready(function(){
            initMap();
        })
    </script>
</body>

</html>