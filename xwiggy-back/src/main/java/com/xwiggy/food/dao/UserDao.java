package com.xwiggy.food.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.xwiggy.food.model.User;

public interface UserDao extends MongoRepository<User, String> {
}
