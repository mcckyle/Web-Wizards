//***************************************************************************************
//
//     Filename: PostRepository.java
//     Author: Kyle McColgan
//     Date: 13 July 2026
//     Description: This file provides database functionality for the Post entity.
//
//***************************************************************************************

package com.mcckyle.ShowMOEvents.data;

import jakarta.transaction.Transactional;
import com.mcckyle.ShowMOEvents.models.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface PostRepository extends CrudRepository<Post, Integer>
{
}
