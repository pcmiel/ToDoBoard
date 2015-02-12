package org.toDoBoard.server.task;

import java.time.LocalDateTime;

public class Task {
    private long id;
    private String description;
    private TaskType type;

    public Task(long id, String description, TaskType type) {
        this.id = id;
        this.description = description;
        this.type = type;
    }

    public long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public TaskType getType() {
        return type;
    }
}
