package org.toDoBoard.server.task;

import java.util.List;

public class TasksDTO {
    List<TaskDTO> tasks;

    public TasksDTO() {
    }

    public TasksDTO(List<TaskDTO> tasks) {
        this.tasks = tasks;
    }

    public List<TaskDTO> getTasks() {
        return tasks;
    }

    public void setTasks(List<TaskDTO> tasks) {
        this.tasks = tasks;
    }
}
