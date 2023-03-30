package com.xwiggy.food.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.xwiggy.food.model.Food;

public interface FoodDao extends MongoRepository<Food, String> {

}
