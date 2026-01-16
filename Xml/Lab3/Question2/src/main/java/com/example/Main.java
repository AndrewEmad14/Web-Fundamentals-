package com.example;
import java.util.ArrayList;
import java.util.List;

import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;

public class Main {
    public static void main(String[] args) {
       // Create a dog instance
        Dog falco = new Dog("Falco", 4);

        //object
       
        // Create Jsonb and serialize
        Jsonb jsonbObject = JsonbBuilder.create();
        String result = jsonbObject.toJson(falco);
        Dog falco2 = jsonbObject.fromJson("{\"age\":4,\"bitable\":false,\"name\":\"Falco\"}", Dog.class);

        // Print the serialized JSON and deserialized object details
        System.out.println("Serialized JSON: " + result);
        System.out.println("Deserialized DOG Name: " + falco2.getName());
        System.out.println("Deserialized DOG Age: " + falco2.getAge());

        Dog cassidy = new Dog();
        cassidy.setName("Cassidy");
        cassidy.setAge(3);
       
        //raw collection
        // List of dogs
        Dog[] dogs = new Dog[] {
        new Dog("Rex", 4),
        new Dog("pit", 3    )
        };
        // Create Jsonb and serialize
        String resultRawCollection = jsonbObject.toJson(dogs);
     
        
        System.out.println("Raw Colection: " +  resultRawCollection);
        // We can also deserialize back into a raw collection,
   
        dogs = jsonbObject.fromJson(resultRawCollection, Dog[].class);


        //generic collection
        List<Dog> dogList = new ArrayList<>();
        dogList.add(falco);
        dogList.add(cassidy);
        // Create Jsonb and serialize

        String resultGenericCollection = jsonbObject.toJson(dogList);
        System.out.println("Generic Collection: " + resultGenericCollection);
        // Deserialize back
        dogList = jsonbObject.fromJson(resultGenericCollection, new ArrayList<Dog>(){}.getClass().getGenericSuperclass());

    }
}