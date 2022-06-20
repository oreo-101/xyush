package com.cool.demo.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Post {
    private String content;
}
