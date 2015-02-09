package org.toDoBoard.server.greeting;

import org.junit.Test;
import org.springframework.boot.test.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.toDoBoard.server.parent.BaseIntegrationTest;

import static org.fest.assertions.api.Assertions.assertThat;

public class GreetingIntegrationTest  extends BaseIntegrationTest {

    @Test
    public void shouldSayHello() {
        // given


        TestRestTemplate template = new TestRestTemplate();

        ResponseEntity<String> response = template.getForEntity("http://localhost:8080/greeting", String.class);

        // when

        // then
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isEqualTo("It's working!!");
    }
}
