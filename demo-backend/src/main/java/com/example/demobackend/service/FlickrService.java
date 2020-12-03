package com.example.demobackend.service;

import com.example.demobackend.model.FlickrReturnObject;
import com.example.demobackend.model.FlickrPhotoMetadata;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

@Service
public class FlickrService {

    private static final Logger logger = LoggerFactory.getLogger(FlickrService.class);

    @Value("${flickrApiKey}")
    private String flickrApiKey;

    /**
     * @param urlString url to fetch result for
     * @return bytes of the content at the url
     * @throws IOException if error connecting to url
     */
    public byte[] getUrlBytes(String urlString) throws IOException {
        URL url = new URL(urlString);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        try {
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            InputStream in = connection.getInputStream();
            if (connection.getResponseCode() != HttpURLConnection.HTTP_OK) {
                throw new IOException(connection.getResponseMessage() + ": with " + urlString);
            }
            int bytesRead = 0;
            byte[] buffer = new byte[1024];
            while ((bytesRead = in.read(buffer)) > 0) {
                out.write(buffer, 0, bytesRead);
            }
            out.close();
            return out.toByteArray();
        } finally {
            connection.disconnect();
        }
    }

    /**
     * @return list of photo metadata
     */
    @Cacheable("photoMetadataCache")
    public List<FlickrPhotoMetadata> fetchPhotoMetadata() {
        try {
            String url = UriComponentsBuilder.newInstance()
                    .scheme("https").host("api.flickr.com/services/rest/")
                    .path("/").queryParam("method", "flickr.photos.search")
                    .queryParam("api_key", flickrApiKey)
                    .queryParam("tags", "fujifilm")
                    .queryParam("has_geo", "1")
                    .queryParam("format", "json")
                    .queryParam("nojsoncallback", "1")
                    .queryParam("extras", "url_s,geo").buildAndExpand().toUriString();

            logger.info("url: {}", url);

            String jsonString = getUrlString(url);

            logger.debug("Received JSON: {}", jsonString);

            FlickrReturnObject flickrPhotos = parseJson(jsonString);

            return flickrPhotos.getPhoto().getPhotos();
        } catch (Exception e) {
            logger.error("Failed to fetch items", e);
            throw new RuntimeException("Unable to get flickr images");
        }
    }

    /**
     * @param url url
     * @return contents of the url as a string
     * @throws IOException if exception getting data from url
     */
    private String getUrlString(String url) throws IOException {
        return new String(getUrlBytes(url));
    }

    /**
     * Convert json string into java object
     * @param json json string
     * @return The object converted from the json string
     */
    public FlickrReturnObject parseJson(String json) {
        Gson gson = new Gson();
        return gson.fromJson(json, FlickrReturnObject.class);
    }

}
