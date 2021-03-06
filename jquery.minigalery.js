jQuery.fn.extend({
  setMiniGalery: function ( cJson ){
  var _this = this;
  var id = jQuery( _this ).attr( "id" ); 
   _this.each( function(){
     jQuery( _this ).css( { "width": "180px", "height":"130px","position":"relative" , "overflow": "hidden"} ); 
    
     for ( var indice in cJson[ "items" ]  ) 
           jQuery( _this ).append( "<img data-original=" + cJson[ "items" ][ indice ].img + " src='PlaceHolder_hotel.jpg' id='lazy"+id+indice+"'>" );
   
     jQuery( _this ).children( "img" ).css( {"width" : "100%", "height": "100%" } ); 
     var objHijos = jQuery( _this ).children( "img" );
     var iTotalImg = objHijos.length;
     $( "#lazy"+id+"0" ).lazyload({
         effect : "fadeIn",
         threshold : 200
     } );

     objHijos.hide();
     var i = 0;
     objHijos.eq( i ).show();
     jQuery( _this ).append( "<div class='divMiniGaleryControls'><span class='miniGaleryControlAnt controls' id='ant"+id+"'></span><div class='center-fotos'><div class='controls controlcenter'></div><span class='iTotMinGalery' id='conGalery"+id+"'></span></div><span class='miniGaleryControlSig controls' id='sig"+id+"'></span></div>" );
           
    jQuery( "#sig" + id ).click( function(){ 
      objHijos.hide(); 
      i +=1;
      
      if ( i < objHijos.length )               
         { 
          
           objHijos.eq( i ).show();
           LazyLoad( objHijos.eq( i ) );
         }
    
      else{
        i = 0;
       objHijos.eq( i ).show(); 
      }
      jQuery( "#conGalery" + id ).html( ( i+ 1 )+ "/" + iTotalImg  );
    } );

    jQuery( "#ant"+id ).click( function(){
       objHijos.hide();
     
       i -=1;

      if ( i > 0 )  
         {
            objHijos.eq( i ).show();
            LazyLoad( objHijos.eq( i ) );
         }
      else if( i == 0){
          i = 0;
          objHijos.eq( i ).show(); 
          LazyLoad( objHijos.eq( i ) );
      }
      else if( i < 0 ){
       
        i = objHijos.length -1 ;
        objHijos.eq( i ).show();
        LazyLoad( objHijos.eq( i ) );
      }

      jQuery( "#conGalery" + id ).html( ( i+ 1 )+ "/" + iTotalImg  );
    } ); 

    var LazyLoad = function( objImg ){
      if ( objImg.attr( "src" ) !=  objImg.attr( "data-original" ) )
         { 
            jQuery( "#"+objImg.attr( "id" ) ).lazyload( {
                    effect : "fadeIn",
                    threshold : 400
             } );
         }
   } 

  } );
} 
  
 	
} );

