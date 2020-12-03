# DemoApp

This is a multi module gradle application.

The application backend connects to a public Flickr api to get a list of photos with geo coordinates and exposes the
metadata about these photgraphs in a REST service.
<br>
The application frontend reads the photo metadata from the backend service and plots the photos on a map
as well as showing their metadata in a table.  User can click on the markers on the map to see the actual photo.
User can also click the icon for the image in the table which will open the photo marker popup. 

* [demo-app](demo-app) - Angular 11 front end
* [demo-backend](demo-backend)- Spring boot back end
