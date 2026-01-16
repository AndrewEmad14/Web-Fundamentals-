package com.example;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class Main {
    public static void main(String[] args) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();
        Gson gson = builder.create();
        String jsonString = "{ \"name\": \"Alice\", \"age\": 23 }";
        Student student = gson.fromJson(jsonString, Student.class);
        System.out.println(student);
        jsonString = gson.toJson(student);
        System.out.println(jsonString);
    }
}