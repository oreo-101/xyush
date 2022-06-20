package com.cool.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cool.demo.model.User;
import com.cool.demo.repository.UserRepository;

@RestController
public class AdminController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/api/admin")
    public List<User> getAllUsers() {
        userRepository.save(User.builder()
                .username("newName2" + System.currentTimeMillis())
                .display_name("random")
                .password("password")
                .build());
        final List<User> ret = userRepository.findAll();
        ret.add(User.builder().username("yee").build());
        return ret;
    }
}
