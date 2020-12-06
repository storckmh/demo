package com.example.demobackend;

import com.example.demobackend.model.FlickrPhotoMetadata;
import com.example.demobackend.model.FlickrReturnObject;
import com.example.demobackend.service.FlickrService;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class FlickrServiceTest {

    private static final Logger logger = LoggerFactory.getLogger(FlickrServiceTest.class);

    @Test
    public void testParseItems() {
        InputStream is = FlickrServiceTest.class.getResourceAsStream("/json/flickr.json");
        String string = getString(is);
        logger.info("File successfully converted to String");
        FlickrService flickrService = new FlickrService();
        FlickrReturnObject flickrReturnObject = flickrService.parseFlickrJson(string);

        List<FlickrPhotoMetadata> photoMetadataList = flickrReturnObject.getPhoto().getPhotos();
        assertEquals(8, photoMetadataList.size());
        FlickrPhotoMetadata item0 = photoMetadataList.get(0);
        assertEquals("33784348168", item0.getId());
        assertEquals("Xochimilco", item0.getTitle());
        assertEquals("https://live.staticflickr.com/65535/33784348168_f9ed0a8012_m.jpg",
                item0.getUrl());
        assertEquals("19.251994", item0.getLatitude());
        assertEquals("-99.110326", item0.getLongitude());
    }

    private String getString(InputStream inputStream) {
        StringBuilder sb = new StringBuilder();
        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
        try {
            for (String line = reader.readLine(); line != null; line = reader.readLine()) {
                sb.append(line);
            }
        } catch (IOException ioe) {
            logger.error("IOException", ioe);
        }
        return sb.toString();
    }
}
