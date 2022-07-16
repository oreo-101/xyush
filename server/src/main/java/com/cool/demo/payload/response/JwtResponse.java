package com.cool.demo.payload.response;

import lombok.Builder;
import lombok.Data;

import java.util.*;

@Data
@Builder
public class JwtResponse {
    final String type = "Bearer";
    String token;
    Long id;
    String username;
    String email;
    List<String> roles;
}
