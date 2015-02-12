package org.toDoBoard.server.task;

public class TaskDTO {
    private long id;
    private String description;
    private int type;

    public TaskDTO() {
    }

    public TaskDTO(long id, String description, int type) {
        this.id = id;
        this.description = description;
        this.type = type;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public static TaskDTO fromTask(Task task) {
        return new TaskDTO(task.getId(), task.getDescription(), task.getType().getValue());
    }
}
