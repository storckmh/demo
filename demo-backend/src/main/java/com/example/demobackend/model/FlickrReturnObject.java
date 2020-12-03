package com.example.demobackend.model;

import com.google.gson.annotations.SerializedName;

public class FlickrReturnObject {

    @SerializedName("photos")
    private FlickrPhotos photo;

    public FlickrReturnObject() {
    }

    public FlickrPhotos getPhoto() {
        return photo;
    }

    public void setPhotos(FlickrPhotos photo) {
        this.photo = photo;
    }
}
