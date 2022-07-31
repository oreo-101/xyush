package com.cool.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cool.demo.models.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

}
