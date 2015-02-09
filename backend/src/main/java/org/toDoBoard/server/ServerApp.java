package org.toDoBoard.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@EnableAutoConfiguration
@ComponentScan
public class ServerApp {

    public static void main(String[] args) {
        SpringApplication.run(ServerApp.class, args);
    }
}