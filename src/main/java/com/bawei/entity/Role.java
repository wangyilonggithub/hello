package com.bawei.entity;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by jiaozhiguang on 2017/7/13.
 */
@Data
@Entity
public class Role {

    @Id
    @GeneratedValue(generator = "Generator")
    @GenericGenerator(name = "Generator", strategy = "uuid")
    private String id;

    private String name;

}
