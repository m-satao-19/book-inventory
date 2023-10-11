package com.example.bookshop;

public class Book {
    private Long id;
    private String author;
    private String title;
    private String photourl;
    //C:\Users\Madhura\IdeaProjects\bookshop\src\main\img
    private Long isbnno;
    private String language;
    private Double price;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPhotourl() {
        return photourl;
    }

    public void setPhotourl(String photourl) {
        this.photourl = photourl;
    }

    public Long getIsbnno() {
        return isbnno;
    }

    public void setIsbnno(Long isbnno) {
        this.isbnno = isbnno;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
