package com.example.service.impl;

import com.example.bookshop.User;
import com.example.service.BookService;
import com.example.service.ServiceInterface;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl implements ServiceInterface<User> {
    private Long Uid=300L;
    private Map<Long, User> UserMap = new HashMap<Long, User>();

   {
       for (int i=0; i<5;i++){
           User u = new User();
           u.setId(Uid+i);
           u.setFirstname("John");
           u.setLastname("Doe ");
           u.setPhotourl("temp");
           u.setContact(999888222L);
           u.setEmail("someone@example.com");
           u.setBalance(2994.43);
           UserMap.put(u.getId(),u);
       }
    }

    @Override
    public Collection<User> findAll() {
        return UserMap.values();
    }

    @Override
    public User findById(Long id) {
        return UserMap.get(id);
    }

    @Override
    public User save(User user) {
        Long newid=Uid++;
        user.setId(newid);
        UserMap.put(user.getId(),user);
        return UserMap.get(newid);
    }

    @Override
    public User update(User user) {
        Uid=user.getId();
        if(UserMap.get(Uid)!=null){
            UserMap.put(Uid,user);
            return UserMap.get(Uid);
        }
        return null;
    }

    @Override
    public User deleteById(Long id) {
        if(UserMap.get(id)!=null){
            return UserMap.remove(id);
        }
        return null;
    }
}
