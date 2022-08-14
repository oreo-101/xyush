package com.cool.demo.controllers;

import java.util.stream.Collectors;
import java.util.*;

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
import com.cool.demo.models.PostCategory;
import com.cool.demo.models.User;
import com.cool.demo.repository.PostCategoryRepository;
import com.cool.demo.repository.PostRepository;
import com.cool.demo.repository.UserRepository;
import com.cool.demo.security.services.UserDetailsImpl;

import lombok.extern.log4j.Log4j2;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@Log4j2
public class PostingsController {

    @Autowired
    PostRepository postRepository;

    @Autowired
    PostCategoryRepository postCategoryRepository;

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

    @PostMapping(Urls.POSTS_CREATE)
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    ResponseEntity<Boolean> createPost(@RequestBody Post newPost) {
        final UserDetailsImpl user = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        // look up categories from DB
        final Set<PostCategory> categories = new HashSet<>();
        newPost.getCategories().forEach(cat -> {
            final Optional<PostCategory> postCategory = postCategoryRepository.findByName(cat.getName());
            if (postCategory.isPresent()) {
                categories.add(postCategory.get());
            } else {
                log.warn("unrecognized post category submitted=[{}]", cat.getName());
            }
        });
        final Post newPostCopy = Post.builder()
                .content(newPost.getContent())
                .categories(categories)
                .user(userRepository.getReferenceById(user.getId()))
                .build();
        postRepository.save(newPostCopy);
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
