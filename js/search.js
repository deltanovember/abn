$( function() {
    
    var name = 'Woolworths';
    var postcode = '';
    var legalName = '';
    var tradingName = '';	
    var NSW = '';			
    var SA = '';			
    var ACT = '';			
    var VIC = '';			
    var WA = '';				
    var NT = '';				
    var QLD = '';			
    var TAS = '';			
    var authenticationGuid = 'c91d972c-4998-4500-bef7-38098266d475';

    $("#companyName").on("input",function() {
        var input = $("#companyName").val();
        if (input.length > 4) {

            var searchURL = 'http://abr.business.gov.au/abrxmlsearchRPC/AbrXmlSearch.asmx/' + 
    					'ABRSearchByNameSimpleProtocol?name=' + name + 
    					'&postcode=' + postcode + '&legalName=' + legalName + 
    					'&tradingName=' + tradingName + '&NSW=' + NSW + 
    					'&SA=' + SA + '&ACT=' + ACT + '&VIC=' +  VIC + 
    					'&WA=' + WA + '&NT=' + NT + '&QLD=' + QLD + 
    					'&TAS=' + TAS + '&authenticationGuid=' + authenticationGuid;
            $.ajax({
                method: "GET",
                crossDomain: true,
                dataType: 'jsonp',
                url: searchURL}).done(
                function( data ) {
                    console.log(data);
                });

        }
    });
    
 
    
    /**
     * $("#companyName").on("input", function() {
        alert($("#companyName").val());
    });
    
    /**
    
    $.get( "ajax/test.html", function( data ) {
      $( ".result" ).html( data );
      alert( "Load was performed." );
    });
    
    conn = requests.get()
    					
    #XML is returned by the webservice
    #Put returned xml into variable 'returnedXML' 
    #Output xml string to file 'output.xml' and print to console
    returnedXML = conn.text
    f = open('output.xml', 'wb')
    f.write(returnedXML)
    f.close
    print(returnedXML)
    */
    
});

