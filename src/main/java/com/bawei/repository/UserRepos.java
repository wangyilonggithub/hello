package com.bawei.repository;

import com.bawei.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * Created by jiaozhiguang on 2017/7/10.
 */
public interface UserRepos extends JpaRepository<User, String> {


    @Query(value = "select  * from user", nativeQuery = true)
    public Long findAbc();


}
