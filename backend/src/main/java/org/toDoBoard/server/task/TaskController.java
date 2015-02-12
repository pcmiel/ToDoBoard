package org.toDoBoard.server.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }


    @RequestMapping("/tasks")
    public
    @ResponseBody
    TasksDTO getAllTasks() {
        System.out.print("TaskController.getAllTasks\n");
        return taskService.generateTemporaryTasksDTO(5);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/newTask")
    @ResponseBody
    public ResponseEntity postInvitation( @RequestBody TaskDTO newTask) {

//        userInvitationsService.addInvitation(username, invitation, principal.getName());
        System.out.print("TaskController.postInvitation()");
        return new ResponseEntity(HttpStatus.CREATED);
    }
}