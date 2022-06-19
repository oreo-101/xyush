package com.cool.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class AccessConfiguration {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                // Our public endpoints
                .antMatchers("/hello").permitAll()
                .antMatchers("/public/**").permitAll()
                .antMatchers(HttpMethod.GET, "/api/**").permitAll()
                // Our private endpoints
                .anyRequest().authenticated();
        return http.build();
    }
}
