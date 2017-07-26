package com.bawei.controller;

import com.bawei.entity.User;
import com.bawei.repository.UserRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by jiaozhiguang on 2017/7/8.
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepos userRepos;

    @GetMapping()
    public String main(Model model){
        model.addAttribute("users",userRepos.findAll());
        return "users";
    }

    @GetMapping("/list")
    @ResponseBody
    public List<User> list(){
        return userRepos.findAll();
    }


    @GetMapping("/toedit")
    public String toedit(String id, Model model) {
        model.addAttribute("id", id);
        return "users";
    }

    @GetMapping("/delete")
    public String delete(String id) {
        userRepos.delete(id);
        return "users";
    }


    @PostMapping("/save")
    public String save(User user){
        userRepos.save(user);
        return "users";
    }


}
