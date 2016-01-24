// JScript source code
$(document).ready(function() {
    $("#aboutImage img").mouseover(function() {
        $(this).fadeOut(300, function() {
            this.src = 'images/HR_GrowWithUs.jpg';
            $(this).fadeIn();
        });
    });

    $("#aboutImage img").mouseout(function() {
        $(this).fadeOut(300, function() {
            this.src = 'images/HR_LetsWorkTogether.jpg';
            $(this).fadeIn();
        });
    });

    $("#panel1, #panel2, #panel3, #panel4, #panel5, #panel6").css('cursor', 'pointer');

    for (var x = 0; x < 7; x++) {
        $("#panel" + x).click(function() {
            var string = this.id;
            var number = string.slice(5, 6);
            $("#body" + number).slideToggle();
        });
    }

    $("#article1, #article2, #article3, #article4, #article5, #article6").css('cursor', 'pointer');

    $("#mediaAll").click(function() {
        for (var x = 0; x < 6; x++) {
            $("#article00" + x).removeClass('active');
        }
        $("#mediaArticles").removeClass('hidden');
        $("#mediaContent").addClass('hidden');
        $(this).addClass('active');
    });

    for (var x = 0; x < 6; x++) {

        $("#article00" + x + ", #button_00" + x).click(function() {

            $("#mediaContent").empty();
            $("#mediaContent").removeClass('hidden');
            $("#mediaArticles").addClass('hidden');
            var string = this.id;
            var number = string.slice(7, 10);
            var name = "article" + number;

            for (var x = 0; x < 6; x++) {
                $("#article00" + x + ",#mediaAll").removeClass('active');
            }

            $("#" + name).addClass('active');

            var file = "json/" + name + ".json";

            $.getJSON(file, function(data) {
                var items = [];
                $.each(data, function(key, val) {

                    items.push("<div id='" + key + "'>" + val + "</div>");
                });
                $("<div/>", {
                    "class": "my-new-article",
                    html: items.join("")
                }).prependTo("#mediaContent");
            });
        });
    }
});


function initialize() {
    
    setTimeout(function() {

        var london = new google.maps.LatLng(42.9986266, -81.1880956999999);
        var windsor = new google.maps.LatLng(42.304297, -82.932749);
        var troy = new google.maps.LatLng(42.563605, -83.193876);

        var myCenter = new google.maps.LatLng(42.746004, -82.129669);

        var mapOptions = {
            zoom: 7,
            center: myCenter,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);


        var marker = new google.maps.Marker({
            position: london,
            map: map,
            title: 'Corporate Headquarters'
        });

        var marker2 = new google.maps.Marker({
            position: windsor,
            map: map,
            title: 'Canadian Regional Office'
        });

        var marker3 = new google.maps.Marker({
            position: troy,
            map: map,
            title: 'U.S. Regional Office'
        });

        var contentString = '<h4>Corporate Headquarters</h4>' +
          '<p>345 Saskatoon Street <br>' +
          'London, Ontario, Canada N5W 4R4 <br><br>' +
          '<b>Toll Free:</b> 1-800-263-2384 <br>' +
          '<b>Phone:</b> (519) 451-2323 <br>' +
          '<b>Fax:</b> (519) 451-6615  </p>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var contentString2 = '<h4>Canadian Regional Office</h4>' +
          '<p>2885 Lauzon Parkway, Unit 104 <br>' +
          'Windsor, Ontario, Canada N8T 3J9</p>';

        var infowindow2 = new google.maps.InfoWindow({
            content: contentString2
        });

        var contentString3 = '<h4>U.S. Regional Office</h4>' +
          '<p>3290 W. Big Beaver Road, Suite #117<br>' +
          'Troy, Michigan 48084</p>';

        var infowindow3 = new google.maps.InfoWindow({
            content: contentString3
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });

        google.maps.event.addListener(marker2, 'click', function() {
            infowindow2.open(map, marker2);
        });

        google.maps.event.addListener(marker3, 'click', function() {
            infowindow3.open(map, marker3);
        });
    
    }, 100);  
}
