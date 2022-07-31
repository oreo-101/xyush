package com.cool.demo.controllers;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cool.demo.models.Post;
import com.cool.demo.models.User;
import com.cool.demo.repository.PostRepository;
import com.cool.demo.repository.UserRepository;
import com.cool.demo.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class PostingsController {

    @Autowired
    PostRepository postRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping(Urls.POSTS_ALL)
    ResponseEntity<?> getAllPosts() {
        return ResponseEntity.ok(postRepository.findAll().stream()
                .map(post -> {
                    post.setUser(sanitizeUserInfo(post.getUser()));
                    return post;
                })
                .collect(Collectors.toList()));
    }

    // test
    @PostMapping(Urls.POSTS_CREATE)
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    ResponseEntity<Boolean> createPost(@RequestBody String content) {
        final UserDetailsImpl user = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        final Post newPost = Post.builder()
                .content(content)
                .user(userRepository.getReferenceById(user.getId()))
                .build();
        postRepository.save(newPost);
        return ResponseEntity.ok(true);
    }

    private User sanitizeUserInfo(User user) {
        if (user != null) {
            user.setPassword("");
            user.setEmail("");
        }
        return user;
    }
}
