package org.toDoBoard.server.greeting;

import org.toDoBoard.server.greeting.Greeting;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class GreetingsController {

    @RequestMapping("/greeting")
    public
    @ResponseBody
    String greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        System.out.print("org.toDoBoard.server.greeting.GreetingsController.greeting\n");
        return "It's working!!";
    }

    @RequestMapping("/greeting2")
    public
    @ResponseBody
    Greeting greeting2(@RequestParam(value = "name", defaultValue = "World") String name) {
        System.out.print("org.toDoBoard.server.greeting.GreetingsController.greeting\n");
        return new Greeting(1, name);
    }
}