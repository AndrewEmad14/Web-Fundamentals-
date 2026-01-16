package com.example;

import java.io.FileReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.json.JsonWriter;
public class App 
{
    public static void main( String[] args )
    {
        try {
            
            // This works in your IDE because "src" is a folder on your hard drive.
            FileReader reader = new FileReader("src/main/resources/Library.json", StandardCharsets.UTF_8);
            JsonReader jsonReader = Json.createReader(reader);
            JsonObject libraryJsonObject =(JsonObject)jsonReader.read();
            System.out.println(libraryJsonObject.getString("location"));
            JsonArray booksJsonArray = libraryJsonObject.getJsonArray("books");
            booksJsonArray.forEach(book->{
                System.out.println("Title: " + book.asJsonObject().getString("title"));
                System.out.println("Author: " + book.asJsonObject().getString("author"));
            });
        }catch (Exception e) {
            e.printStackTrace();
        }
        JsonObject model = Json.createObjectBuilder()
        .add("firstName","Duke")
        .add("lastName","Java")
        .add("age", 18)
        .add("city", "JavaTown")
        .add("phoneNumbers", Json.createArrayBuilder()
        .add(Json.createObjectBuilder()
        .add("type", "mobile")
        .add("number", "111-111-1111"))
        .add(Json.createObjectBuilder()
        .add("type", "home")
        .add("number", "222-222-2222")))
        .build();
        JsonWriter writer = Json.createWriter(System.out);
        writer.writeObject(model);
    }
}
