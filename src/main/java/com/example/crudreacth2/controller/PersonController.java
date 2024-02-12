package com.example.crudreacth2.controller;

import com.example.crudreacth2.entity.Person;
import com.example.crudreacth2.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/persons")
public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    @GetMapping
    public List<Person> getAllPersons() {
        return personRepository.findAll();
    }

    @PostMapping
    public Person createPerson(@RequestBody Person person) {
        return personRepository.save(person);
    }

    @GetMapping("/{id}")
    public Person getPersonById(@PathVariable Long id) {
        return personRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Person updatePerson(@PathVariable Long id, @RequestBody Person updatedPerson) {
        updatedPerson.setId(id);
        return personRepository.save(updatedPerson);
    }

    @DeleteMapping("/{id}")
    public void deletePerson(@PathVariable Long id) {
        personRepository.deleteById(id);
    }
}
