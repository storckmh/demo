package com.example.demobackend.controller;

import com.example.demobackend.model.FlickrPhotoMetadata;
import com.example.demobackend.service.FlickrService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PhotoController {

    private static final Logger logger = LoggerFactory.getLogger(PhotoController.class);

    @Autowired
    private FlickrService flickrService;

    /**
     * @return list of photo metadata
     */
    @GetMapping("api/photos")
    public List<FlickrPhotoMetadata> getPhotos() {
        logger.info("get photos");
        return flickrService.fetchPhotoMetadata();
    }
}
