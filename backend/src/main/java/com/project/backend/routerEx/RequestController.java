package com.project.backend.routerEx;

import org.springframework.context.annotation.Configuration;
import static org.springframework.web.reactive.function.server.RequestPredicates.POST;
import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RequestPredicates.PUT;
import static org.springframework.web.reactive.function.server.RequestPredicates.DELETE;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import com.project.backend.handlers.RequestHandler;

@Configuration
public class RequestController {
    
    @Autowired
    RequestHandler requestHandler;


    //checked
    @Bean
    public RouterFunction<?> requestInsert() {
        return RouterFunctions.route(POST("/null"), requestHandler::insert);
    }

    @Bean 
    public RouterFunction<?> requestDelete() {
        return RouterFunctions.route(DELETE("/delete"), requestHandler::delete);
    }
    
    //checked
    @Bean 
    public RouterFunction<?> selectRequestByCategory() {
        return RouterFunctions.route(POST("/null"), requestHandler::selectByCategory);
    }
    
    //checked
    @Bean 
    public RouterFunction<?> selectAll() {
        return RouterFunctions.route(GET("/ttt"),requestHandler::selectAll);
    }
    

    @Bean 
    public RouterFunction<?> selectRequestsByTagContext() {
        return RouterFunctions.route(POST("/asd"),requestHandler::selectRequestsByTagContext);
    }
    
}