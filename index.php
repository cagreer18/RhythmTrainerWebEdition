<?php
	
    include ('functions.php');

    function parse_path() {
  		$path = array();
  		if (isset($_SERVER['REQUEST_URI'])) {
    		$request_path = explode('?', $_SERVER['REQUEST_URI']);
		    $path['base'] = rtrim(dirname($_SERVER['SCRIPT_NAME']), '\/');
		    $path['call_utf8'] = substr(urldecode($request_path[0]), strlen($path['base']) + 1);
		    $path['call'] = utf8_decode($path['call_utf8']);
		    if ($path['call'] == basename($_SERVER['PHP_SELF'])) {
		    	$path['call'] = '';
		    }
    		$path['call_parts'] = explode('/', $path['call']);
	    	$path['query_utf8'] = urldecode($request_path[1]);
	    	$path['query'] = utf8_decode(urldecode($request_path[1]));
	    	$vars = explode('&', $path['query']);
	    	foreach ($vars as $var) {
      			$t = explode('=', $var);
      			$path['query_vars'][$t[0]] = $t[1];
    		}
  		}
		return $path;
	}

	$path = parse_path();
    $page = $path['call_parts'][0];

    switch(strtolower($page)) {
		case 'trackselect': include('TrackSelectScreen.php');
			break;
		case 'gamescreen': include('GameScreen.php');
			break;
		case 'login': include('LoginScreen.php');
			break;
		case 'register': include('RegistrationScreen.php');
			break;
		case 'home': include('HomeScreen.html');
			break;
		default:
			include('HomeScreen.html');
			break;
	}

	include('footer.php');

?>