package com.example.crudreacth2.repository;

import com.example.crudreacth2.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long> {
}
