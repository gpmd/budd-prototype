<!DOCTYPE html>

<html lang="en">

<!-- Hello to Jason Issacs! -->

<head>

    <meta charset="utf-8">
    <title>Budd Shirtmakers Prototype 1.0</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Budd Shirtmakers Prototype 1.0">
    <meta name="author" content="Matt Bailey">
    
    <!-- Styles -->
    <link href="/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="/bootstrap/css/responsive.css" rel="stylesheet">
    <!-- Fontawesome is simply awesome! http://fortawesome.github.com/Font-Awesome/ -->
    <link href="/css/font-awesome.css" rel="stylesheet">
    <link href="/css/budd-styles.css" rel="stylesheet">

    <!-- Fonts -->
    <script type="text/javascript">
    WebFontConfig = {
        custom: { families: ['Copperplate Light'],
        urls: [ 'http://f.fontdeck.com/s/css/hi+m0MhxUhCyiQvnvxIW+b+x7PM/budd-style-guide.mbailey.local/20880.css' ] }
    };

    (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();
    </script>

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

</head>

<body id="top-anchor">

    <div class="wrapper container">
        <div class="page">
			<?php include 'inc/header.php'; ?>
			<?php include 'inc/main-home.php'; ?>
			<?php include 'inc/footer.php'; ?>
		</div><!-- .page -->
    </div><!-- .wrapper -->
    
    <!-- Javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
    <script src="/bootstrap/js/bootstrap-transition.js"></script>
    <script src="/bootstrap/js/bootstrap-alert.js"></script>
    <script src="/bootstrap/js/bootstrap-modal.js"></script>
    <!-- bootstrap-dropdown.js disabled - using standard css hover behaviour -->
    <!--<script src="/bootstrap/js/bootstrap-dropdown.js"></script>-->
    <script src="/bootstrap/js/bootstrap-scrollspy.js"></script>
    <script src="/bootstrap/js/bootstrap-tab.js"></script>
    <script src="/bootstrap/js/bootstrap-tooltip.js"></script>
    <script src="/bootstrap/js/bootstrap-popover.js"></script>
    <script src="/bootstrap/js/bootstrap-button.js"></script>
    <script src="/bootstrap/js/bootstrap-collapse.js"></script>
    <script src="/bootstrap/js/bootstrap-carousel.js"></script>
    <script src="/bootstrap/js/bootstrap-typeahead.js"></script>
    <!-- Codekit minfied js -->
    <script src="/js/plugins-ck.js"></script>
    <script src="/js/scripts-ck.js"></script>

</body>

</html>