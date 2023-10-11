package com.example.resource.impl;


import com.example.bookshop.User;
import com.example.resource.Resource;
import com.example.service.BookService;
import com.example.service.ServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserResourceImpl implements Resource<User> {

    @Autowired
    private ServiceInterface<User> userService;

    @GetMapping
    public ResponseEntity<Collection<User>> findAll() {
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<User> findById(@PathVariable Long id) {
        return new ResponseEntity<>(userService.findById(id),HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<User> save(@RequestBody User user) {
        return new ResponseEntity<>(userService.save(user),HttpStatus.CREATED);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<User> update(@RequestBody User user) {
        return new ResponseEntity<>(userService.update(user),HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<User> deleteById(@PathVariable Long id) {
        return new ResponseEntity<>(userService.deleteById(id),HttpStatus.OK);
    }
}
