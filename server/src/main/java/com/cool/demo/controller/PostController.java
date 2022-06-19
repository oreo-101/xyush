package com.cool.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cool.demo.model.Post;

@RestController
public class PostController {

    @RequestMapping("/api/all_posts")
    public List<Post> allPosts() {
        final List<Post> result = new ArrayList<>();
        result.add(Post.builder().content("hard coded post hehe").build());
        return result;
    }

}
