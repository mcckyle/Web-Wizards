//***************************************************************************************
//
//     Filename: CommentRepository.java
//     Author: Kyle McColgan
//     Date: 13 July 2026
//     Description: This file provides database functionality for the Comment entity.
//
//***************************************************************************************

package com.mcckyle.ShowMOEvents.data;

import jakarta.transaction.Transactional;
import com.mcckyle.ShowMOEvents.models.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public interface CommentRepository extends CrudRepository<Comment, Integer>
{
    List<Comment> findByPostId(Integer postId);
}
