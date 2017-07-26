package com.bawei.entity;


import lombok.Data;

/**
 * Created by jiaozhiguang on 2017/7/13.
 */
@Data
public class UserRole {

    private String email;

    private String roleName;

    public UserRole() {}

    public UserRole(Object [] objects){
        this.email = objects[0].toString();
        this.roleName = objects[1].toString();
    }


//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getRoleName() {
//        return roleName;
//    }
//
//    public void setRoleName(String roleName) {
//        this.roleName = roleName;
//    }
}
