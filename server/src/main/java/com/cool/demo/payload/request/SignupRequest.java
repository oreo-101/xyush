package com.cool.demo.payload.request;

import java.util.*;

import lombok.Data;

@Data
public class SignupRequest {
    private String username;
    private String email;
    private Set<String> role;
    private String password;
}
