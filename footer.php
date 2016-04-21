		<footer>
			<p>Credits: Concept by <a href="http://lovelythinking.com">Dr. Wiley</a> Develeopment Team: Coul Greer, Kevin Hannan, Bradford Barclay, Collin Clayton</p>
		</footer>
	    <?php if(isset($_SESSION['email'])){ ?>
	    	<div class="content right">
	        	<a href="Logout.php">Sign Out</a>
	    	</div>	
	    <?php } else { ?>
	    	<div>
	    		<a href="http://willshare.com/RhythmTrainerWebEdition/Login">Sign In</a>
	    	</div>
	    <?php } ?>
    </body>
</html>
