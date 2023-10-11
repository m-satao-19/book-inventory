package com.example.service;

import com.example.bookshop.Book;

import java.util.Collection;

public interface ServiceInterface<T> {
    Collection<T> findAll();
    T findById(Long id);
    T save(T t);
    T update(T t);
    T deleteById(Long id);
}
