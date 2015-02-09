package org.toDoBoard.server.greeting;

import junitparams.JUnitParamsRunner;
import org.junit.Test;
import org.junit.runner.RunWith;

import static org.fest.assertions.api.Assertions.assertThat;

@RunWith(JUnitParamsRunner.class)
public class GreetingTest {

    @Test
    public void shouldCreateGreetingObject() {
        //given
        Greeting greeting = new Greeting(1, "test");

        //when

        //then
        assertThat(greeting.getId()).isEqualTo(1);
        assertThat(greeting.getContent()).isEqualTo("test");

    }
}
