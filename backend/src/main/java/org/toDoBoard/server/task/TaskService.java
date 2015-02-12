package org.toDoBoard.server.task;

import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class TaskService {
    public TasksDTO generateTemporaryTasksDTO(int number) {
        List<TaskDTO> tasks = new ArrayList<TaskDTO>();
        Random random = new Random();
        for (int i = 0; i < number; i++) {
            TaskType type = TaskType.getByValue(random.nextInt(5));
            Task newTask = createTemporaryTask(type);
            tasks.add(TaskDTO.fromTask(newTask));
        }
        return new TasksDTO(tasks);
    }

    private Task createTemporaryTask(TaskType type) {
        DateTime id = DateTime.now(DateTimeZone.forOffsetHours(0));
        String content = type.toString() + " " + id.toString();
        return new Task(id.getMillis(), content, type);
    }

}
