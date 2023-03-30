package com.xwiggy.food.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.xwiggy.food.model.Contact;

public interface ContactDao extends MongoRepository<Contact, Integer> {
}
