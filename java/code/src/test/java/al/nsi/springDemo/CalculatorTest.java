package al.nsi.springDemo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import al.nsi.springDemo.model.Calculator;

public class CalculatorTest {
    
    private Calculator calculator;

    @BeforeEach
    public void setUp() throws Exception{
        calculator = new Calculator();
    }

    @Test
    @DisplayName("Ensure correct handling of zero")
    public void testMultiplyZero(){
        assertEquals(0, calculator.multiply(5, 0),"Multiple with zero should be zero");
        assertEquals(0, calculator.multiply(0, 5),"Multiple with zero should be zero");
    }

    @Test
    @DisplayName("Simple multiplication should work")
    public void testMultiply(){
        assertEquals(20, calculator.multiply(10, 2),"Regular multiplication should work");
    }

    @Test
    @DisplayName("Simple addition should work")
    public void testAddition(){
        assertEquals(4, calculator.add(2, 2), "Regular addition should work");
    }

    @Test
    @DisplayName("Simple subtraction should work")
    public void testSubtraction(){
        assertEquals(5, calculator.sub(10, 5), "Regular subtraction should work");
    }

    @Test
    @DisplayName("Simple division should work")
    public void testDivision(){
        
    }

}
