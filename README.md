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


### How to run for development
1. There must be a flickr api key pasted into the `demo-backend/src/main/resources/application.properties` file.
2. Start the `demo-backend/DemoBackendApplication` spring boot app.
3. Navigate to `demo-app` and run `npm install`
4. While in `demo-app` and run `npm start`


### How to build and run in 'production' mode
1. run `./gradlew bootJar` to build the angular project and put it inside a spring boot runnable jar. Jar will be 
located at `demo\demo-backend\build\libs\demo.jar`
2. run `java -jar demo.jar`
3. Open browser and navigate to http://localhost:8080/demo

