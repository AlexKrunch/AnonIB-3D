<!DOCTYPE HTML PUBLIC  "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="CSS/bootstrap-hacker-theme/css/bootstrap4-neon-glow.min.css" rel="stylesheet">
    <link href="CSS/style.css" rel="stylesheet">
    <title>ADMIN OF THE BOARD</title>
  </head>
  <body>
    <div>===================</div>
  	<div>ADMIN OF THE BOARD</div>
    <div>===================</div>

  	<div>
	  	<div>Manage the database player+arts here.</div>
	  	<div style="font-size:xx-small">Map powered by LAZER&reg;</div>
	  	<br/>

      <div>Admin pswd:
      <br><input id="admin-password" type="password"/>
      </div>
      <button onClick="setPassword()">Set password</button>
      <button onClick="validPassword()">Test password</button>
      <br/>

      <div id="manage-interface">
      <div>------------------------</div>
        <div><b>List of the different WS</b></div>
        <div>
          <button onClick="initDb()">Init the Database</button>
          <button onClick="eraseDb()">Erase the Database</button><br/>
          <button onClick="initBans()">Init the Bans table</button>
          <button onClick="eraseBans()">Erase the Bans table</button><br/>
          <button onClick="initMapsAndPosts()">Init Maps snd Posts</button>
          <button onClick="eraseMapsAndPosts()">Erase Maps and Posts</button>
        </div>
      </div>

      <div>------------------------</div>
      <div><b>Web service response</b></div>
      <textarea id="admin-ws_response" type="" name="" rows="4" cols="60" placeholder="The WS response"></textarea>
      
	</div>
	<br/>
  </body>

   <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>

   <script>


   	//Manage the DB
   	function initDb(){

 		$.ajax({
 			type: "POST",
            url: "DatabaseWebService.php",
            data: {
            	'action':'initDB',
              'password': $( '#admin-password' ).val()
            },
            success:function(data){

              $("#admin-ws_response").val(data);
                  
            },
            error: function(xhr, textStatus, errorThrown){

              console("Some error happened");
              $("#admin-ws_response").val("xhr ="+xhr+"; textStatus= "+textStatus+"; errorThrown="+errorThrown);

            }
        });

   	}
     
     function initMapsAndPosts(){

      $.ajax({
        type: "POST",
            url: "DatabaseWebService.php",
            data: {
              'action':'initMapsAndPosts',
              'password': $( '#admin-password' ).val()
            },
            success:function(data){

              $("#admin-ws_response").val(data);
                  
            },
            error: function(xhr, textStatus, errorThrown){

              console("Some error happened");
              $("#admin-ws_response").val("xhr ="+xhr+"; textStatus= "+textStatus+"; errorThrown="+errorThrown);

            }
        });

    }

    function eraseDb(){

      $.ajax({
        type: "POST",
            url: "DatabaseWebService.php",
            data: {
              'action':'destroyDB',
              'password': $( '#admin-password' ).val()
            },
            success:function(data){

              $("#admin-ws_response").val(data);
                  
            },
            error: function(xhr, textStatus, errorThrown){

              console("Some error happened");
              $("#admin-ws_response").val("xhr ="+xhr+"; textStatus= "+textStatus+"; errorThrown="+errorThrown);

            }
        });
    }

    function eraseMapsAndPosts(){

    $.ajax({
      type: "POST",
          url: "DatabaseWebService.php",
          data: {
            'action':'destroyMapsAndPosts',
            'password': $( '#admin-password' ).val()
          },
          success:function(data){

            $("#admin-ws_response").val(data);
                
          },
          error: function(xhr, textStatus, errorThrown){

            console("Some error happened");
            $("#admin-ws_response").val("xhr ="+xhr+"; textStatus= "+textStatus+"; errorThrown="+errorThrown);

          }
      });
    }

  //erase bans
  function eraseBans(){

    $.ajax({
      type: "POST",
          url: "DatabaseWebService.php",
          data: {
            'action':'destroyBans',
            'password': $( '#admin-password' ).val()
          },
          success:function(data){

            $("#admin-ws_response").val(data);
                
          },
          error: function(xhr, textStatus, errorThrown){

            console("Some error happened");
            $("#admin-ws_response").val("xhr ="+xhr+"; textStatus= "+textStatus+"; errorThrown="+errorThrown);

          }
      });
  }

  //erase bans
  function initBans(){

  $.ajax({
    type: "POST",
        url: "DatabaseWebService.php",
        data: {
          'action':'initBans',
          'password': $( '#admin-password' ).val()
        },
        success:function(data){

          $("#admin-ws_response").val(data);
              
        },
        error: function(xhr, textStatus, errorThrown){

          console("Some error happened");
          $("#admin-ws_response").val("xhr ="+xhr+"; textStatus= "+textStatus+"; errorThrown="+errorThrown);

        }
    });
  }

    //Password SET
    function setPassword(){
    $.ajax({
        type: "POST",
            url: "ChanWebService.php",
            data: {
              'action':'setAdminPassword',
              'password': $( '#admin-password' ).val()
            },
            success:function(data){

              $("#admin-ws_response").val("password settings is "+data.result+";  if false it's mean there's probabably already a password");
                  
            },
            error: function(xhr, textStatus, errorThrown){

              console("Some error happened");
              $("#admin-ws_response").val("xhr ="+xhr+"; textStatus= "+textStatus+"; errorThrown="+errorThrown);

            }
        });
      }

      function validPassword(){
        $.ajax({
        type: "POST",
            url: "ChanWebService.php",
            data: {
              'action':'validAdmin',
              'password': $( '#admin-password' ).val()
            },
            success:function(data){

              $("#admin-ws_response").val("password test is "+data.result);
                  
            },
            error: function(xhr, textStatus, errorThrown){

              console("Some error happened");
              $("#admin-ws_response").val("xhr ="+xhr+"; textStatus= "+textStatus+"; errorThrown="+errorThrown);

            }
        });
      }

   </script>
</html>