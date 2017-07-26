package com.bawei.repository;

import com.bawei.entity.UserRole;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by jiaozhiguang on 2017/7/13.
 */
@Service
public class UserRoleRepos extends BaseNativeSqlRepository {


    public List<UserRole> getMostCollectUser() {
        String querySql = "select u.email, r.name from user u, role r, user_role ur where u.id = ur.user_id and r.id = ur.role_id";

        List<UserRole> userRoles = new ArrayList<>();

        List<Object[]> objecArraytList = sqlArrayList(querySql);
        for(Object[] obj: objecArraytList) {
            userRoles.add(new UserRole(obj));
        }
        return userRoles;
    }

}
