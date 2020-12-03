package com.example.demobackend.model;

import com.google.gson.annotations.SerializedName;

public class FlickrPhotoMetadata {

    private String id;
    private String title;
    private String latitude;
    private String longitude;

    @SerializedName("url_s")
    private String url;

    public FlickrPhotoMetadata() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }
}
