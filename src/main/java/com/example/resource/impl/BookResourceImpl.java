package com.example.resource.impl;

import com.example.bookshop.Book;
import com.example.resource.Resource;
import com.example.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "http://localhost:3000")
public class BookResourceImpl implements Resource<Book> {
    @Autowired
    private BookService bookService;

    @GetMapping
    public ResponseEntity<Collection<Book>> findAll() {

        return new ResponseEntity<>(bookService.findAll(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Book> findById(@PathVariable Long id) {

        return new ResponseEntity<>(bookService.findById(id), HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Book> save(@RequestBody Book book) {

        return new ResponseEntity<>(bookService.save(book), HttpStatus.CREATED);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Book> update(@RequestBody Book book) {

        return new ResponseEntity<>(bookService.update(book), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Book> deleteById(@PathVariable Long id) {

        return new ResponseEntity<>(bookService.deleteById(id), HttpStatus.OK);
    }
}
