package com.example.demobackend.model;

import com.google.gson.annotations.SerializedName;

import java.util.List;

public class FlickrPhotos {

    @SerializedName("photo")
    private List<FlickrPhotoMetadata> photos;

    public FlickrPhotos() {
    }

    public List<FlickrPhotoMetadata> getPhotos() {
        return photos;
    }

    public void setPhotos(List<FlickrPhotoMetadata> photo) {
        this.photos = photo;
    }
}
