package org.toDoBoard.server.task;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum TaskType {
    BACKLOG(0),
    TODO(1),
    IN_PROGRESS(2),
    DOE(3);

    private final int value;

    TaskType(int value) {
        this.value = value;
    }

    @JsonValue
    public int getValue(){
        return value;
    }

    @JsonCreator
    public static TaskType getByValue(int value){
        for(TaskType type : TaskType.values()){
            if(type.getValue() == value){
                return type;
            }
        }
       return TaskType.TODO;
    }
}
