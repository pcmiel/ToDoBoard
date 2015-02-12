package org.toDoBoard.server.task;

import org.junit.Test;
import org.springframework.boot.test.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.toDoBoard.server.parent.BaseIntegrationTest;

import static org.fest.assertions.api.Assertions.assertThat;

public class TaskIntegrationTest extends BaseIntegrationTest {

    @Test
    public void shouldGetAllTasks() {
        // given


        TestRestTemplate template = new TestRestTemplate();

        ResponseEntity<TasksDTO> response = template.getForEntity("http://localhost:8080/tasks", TasksDTO.class);

        // when

        // then
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody().tasks.size()).isEqualTo(5);
    }
}
