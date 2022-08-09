package com.cool.demo.controllers;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cool.demo.models.PostCategory;
import com.cool.demo.payload.request.CreatePostCategoryRequest;
import com.cool.demo.repository.PostCategoryRepository;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class PostCategoryController {

    @Autowired
    private PostCategoryRepository postCategoryRepository;

    @GetMapping(Urls.POST_CATEGORY_ALL)
    public List<PostCategory> getAllCategories() {
        return postCategoryRepository.findAll();
    }

    @PostMapping(Urls.POST_CATEGORY_CREATE)
    @ResponseBody
    public boolean createNewPostCategory(@RequestBody CreatePostCategoryRequest request) {
        // no duplicate
        final PostCategory postCategory = PostCategory.builder().name(request.getName().trim()).build();
        final ExampleMatcher matcher = ExampleMatcher.matching()
                .withIgnorePaths("id");

        final Example<PostCategory> example = Example.of(postCategory, matcher);
        final Optional<PostCategory> result = postCategoryRepository.findOne(example);
        if (result.isEmpty()) {
            postCategoryRepository.save(postCategory);
            return true;
        } else {
            return false;
        }
    }

    @PostMapping(Urls.POST_CATEGORY_DELETE)
    public boolean createNewPostCategory(@RequestBody Long id) {
        try {
            final PostCategory postCategory = postCategoryRepository.getReferenceById(id);
            postCategoryRepository.delete(postCategory);
        } catch (Exception e) {

        }
        return false;
    }

}
