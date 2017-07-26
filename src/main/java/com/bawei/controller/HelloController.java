package com.bawei.controller;

import com.bawei.entity.UserRole;
import com.bawei.repository.UserRoleRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by jiaozhiguang on 2017/7/7.
 */
@RestController
public class HelloController {

    @Autowired
    private  UserRoleRepos userRoleRepos;

    @RequestMapping("/hello")
    public List<UserRole> hello() {

        List<UserRole> userRoleList = userRoleRepos.getMostCollectUser();
        return userRoleList;
    }



}
