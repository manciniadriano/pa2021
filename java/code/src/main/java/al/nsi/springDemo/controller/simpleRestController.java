package al.nsi.springDemo.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import al.nsi.springDemo.model.HelloWorldClass;
import al.nsi.springDemo.model.Place;
import al.nsi.springDemo.model.Student;

@RestController
public class simpleRestController {

    @GetMapping("/hello")
    public HelloWorldClass exampleMethod(@RequestParam(name="param1", defaultValue = "World") String param1){
        return new HelloWorldClass("Alessandro2","Galdelli");    
    }

    @PostMapping("/hello")
    public HelloWorldClass exampleMethod2(@RequestBody HelloWorldClass body){
        return body;
        //return new HelloWorldClass("Alessandro2", "Galdelli");
    }
        
     @GetMapping("/nsi")
     public Student exampleStudent(@RequestParam(name="param1", defaultValue = "World") String param1){
         return new Student("Alessandro","Galdelli",1245656);
     }
    
     @PostMapping("/nsi") 
     public Student exampleStudent(@RequestBody Student body){
        return body;        
    }
}
