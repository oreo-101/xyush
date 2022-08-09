package com.cool.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cool.demo.models.PostCategory;

public interface PostCategoryRepository extends JpaRepository<PostCategory, Long> {

}
