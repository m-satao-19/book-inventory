package com.example.service.impl;
import com.example.bookshop.Book;
import com.example.service.BookService;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service
public class BookServiceImpl implements BookService {
    private Long bookid = 100L;
    private Map<Long, Book> Bookmap = new HashMap<Long, Book>();

    {
        Book book = new Book();
        book.setId(bookid);
        book.setAuthor("Madhura");
        book.setLanguage("English");
        book.setPrice(145.62);
        book.setIsbnno(1442423233L);
        book.setTitle("Hello");
        Bookmap.put(book.getId(),book);
    }

    @Override
    public Collection<Book> findAll() {
        return Bookmap.values();
    }

    @Override
    public Book findById(Long id) {
        return Bookmap.get(id);
    }

    @Override
    public Book save(Book book) {
        Long newid=++bookid;
        book.setId(newid);
        Bookmap.put(book.getId(),book);
        return Bookmap.get(newid);
    }

    @Override
    public Book update(Book book) {
        bookid=book.getId();
        if(Bookmap.get(bookid)!=null){
            Bookmap.put(bookid,book);
            return Bookmap.get(bookid);
        }
        return null;
    }

    @Override
    public Book deleteById(Long id) {
        if(Bookmap.get(id)!=null){
            return Bookmap.remove(id);
        }
        return null;
    }
}
