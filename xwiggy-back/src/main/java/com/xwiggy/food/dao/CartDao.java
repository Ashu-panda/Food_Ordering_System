package com.xwiggy.food.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.xwiggy.food.model.Cart;

public interface CartDao extends MongoRepository<Cart, Integer> {

}
