package com.bawei.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by jiaozhiguang on 2017/7/8.
 */
@Controller
public class Login {

    @GetMapping("/toLogin")
    public String toLogin(){
        return "login";
    }

    @GetMapping("/datatables")
    public String datatables() {
        return "datatables";
    }

}
