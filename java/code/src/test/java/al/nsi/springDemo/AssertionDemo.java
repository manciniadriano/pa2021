package al.nsi.springDemo;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTimeout;
import static org.junit.jupiter.api.Assertions.assertTrue;

import static java.time.Duration.ofMillis; 
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import al.nsi.springDemo.model.Student;

public class AssertionDemo {
    private Student student;  

    @BeforeEach
    public void setUp() throws Exception{
        student  = new Student("Alessandro", "Galdelli", 1234);
    } 

    @Test
    @DisplayName("Ensure correct attributes of the student")
    public void testName(){
        //assertEquals("Alessandro", student.getName(),"The correct name is Alessandro ");
        //assertEquals("Galdelli", student.getSurname(),"The correct surname is Galdelli ");
        //assertEquals(1234, student.getTel(),"The correct surname is 1234 ");
        assertAll("student",
        ()-> assertEquals("Alessandro", student.getName()),
        ()-> assertEquals("Galdelli", student.getSurname()),
        ()-> assertEquals(1234, student.getTel()));
    }

    @Test
    @DisplayName("Ensure correct first two characters of the student's name and surname")
    void dependentAssertions(){
        assertAll("properties",
            ()-> { String firstName = student.getName();
            assertNotNull(firstName);

            assertAll("first name",
            ()-> assertTrue(firstName.startsWith("A")),
            ()-> assertTrue(firstName.endsWith("o")));
        
        },

        ()-> {String lastName = student.getSurname();
            assertNotNull(lastName);
            assertAll("last name",
            ()-> assertTrue(lastName.startsWith("G")),
            ()-> assertTrue(lastName.endsWith("i")));
        
        }
        );
    }

    @Test
    void timeoutNotExceeded(){
        String printResult = assertTimeout(ofMillis(1), AssertionDemo::greeting);
        assertEquals ("Hello World!", printResult);  

    }

    private static String greeting(){
    
        return "Hello World!";
    }

    @Test
    void timeoutExceeded(){
       assertTimeout(ofMillis(10), ()-> {Thread.sleep(1);});

    }



    
}
