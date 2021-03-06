package com.project.backend.Model;

import org.springframework.data.relational.core.mapping.Table;

@Table("tags")
public class Tag {
    int tagId;
    String conText;
    int bidCount;
    int clickCount;

 

    public Tag(int tagId, String conText, int bidCount, int clickCount) {
        this.tagId = tagId;
        this.conText = conText;
        this.bidCount = bidCount;
        this.clickCount = clickCount;
    }

    public Tag() {
    }

    public int getTagId() {
        return tagId;
    }

    public void setTagId(int tagId) {
        this.tagId = tagId;
    }

    public String getConText() {
        return conText;
    }

    public void setConText(String conText) {
        this.conText = conText;
    }

    public int getBidCount() {
        return bidCount;
    }

    public void setBidCount(int bidCount) {
        this.bidCount = bidCount;
    }

    public int getClickCount() {
        return clickCount;
    }

    public void setClickCount(int clickCount) {
        this.clickCount = clickCount;
    }
}