#import urllib.request as req
import requests

#Search parameters for ABRSearchByNameSimpleProtocol service
#Note, this service requires all parameters to be specified, even if you specify no query parameter
#The parameters specified below will search for an entity with  the name 'coles' with postcode '2250'
#In this case, unspecified search parameters all default to 'Y' 
#(i.e. will search for the legal & trading name 'coles' in all States and Territories
name = 'Woolworths'
postcode = ''
legalName = ''		
tradingName = ''	
NSW = ''			
SA = ''				
ACT = ''			
VIC = ''			
WA = ''				
NT = ''				
QLD = ''			
TAS = ''			
authenticationGuid = 'c91d972c-4998-4500-bef7-38098266d475'		#Your GUID should go here

#Constructs the URL by inserting the search parameters specified above
#GETs the url (using urllib.request.urlopen)
conn = requests.get('http://abr.business.gov.au/abrxmlsearchRPC/AbrXmlSearch.asmx/' + 
					'ABRSearchByNameSimpleProtocol?name=' + name + 
					'&postcode=' + postcode + '&legalName=' + legalName + 
					'&tradingName=' + tradingName + '&NSW=' + NSW + 
					'&SA=' + SA + '&ACT=' + ACT + '&VIC=' +  VIC + 
					'&WA=' + WA + '&NT=' + NT + '&QLD=' + QLD + 
					'&TAS=' + TAS + '&authenticationGuid=' + authenticationGuid)
					
#XML is returned by the webservice
#Put returned xml into variable 'returnedXML' 
#Output xml string to file 'output.xml' and print to console
returnedXML = conn.text
f = open('output.xml', 'wb')
f.write(returnedXML)
f.close
print(returnedXML)
