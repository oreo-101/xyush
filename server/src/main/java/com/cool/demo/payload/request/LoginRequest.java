package com.cool.demo.payload.request;

import lombok.Data;

@Data
public class LoginRequest {
    String username;
    String password;
}
